from django.shortcuts import render
from django.conf import settings

import json
from openai import OpenAI
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.contrib.postgres.search import TrigramSimilarity

from rest_framework import generics, status, permissions
from rest_framework.response import Response

from .models import Stories
from user.models import User
from .serializers import StoriesSerializer

# Create your views here.
deepseek_key = settings.DEEPSEEK_API_KEY

def generate_storyline(storyLine, chName, genre, age, narrativeStructure, pointOfView, writingStyle):
    return f"a childrens story about {storyLine} with character named {chName} with a genre of {genre} for a {age} years old. it should have a {narrativeStructure} narrative structure, {pointOfView} point of view, and {writingStyle} writing style. Maximum of 1600 words"

client = OpenAI(api_key=deepseek_key, base_url="https://api.deepseek.com")

@csrf_exempt 
def generator(request):
    if request.method == "POST":
        try:
            body = json.loads(request.body)
            title = body.get('title', '')
            storyLine = body.get('storyLine', '')
            chName = body.get('chName', '')
            genre = body.get('genre', '')
            age = body.get('age', '')
            narrativeStructure = body.get('narrativeStructure', '')
            pointOfView = body.get('pointOfView', '')
            writingStyle = body.get('writingStyle', '')

            prompt = generate_storyline(storyLine, chName, genre, age, narrativeStructure, pointOfView, writingStyle)

            # Call the OpenAI API
            response = client.chat.completions.create(
                model="deepseek-chat",
                messages=[
                    {"role": "user", "content": prompt}
                ],
                max_tokens=400,
                temperature=1.5,
            )
            story = response.choices[0].text.strip()

            new_story = Stories.objects.create(
                title=title,
                description=prompt,
                word_count=len(story.split()),
                narrative_structure=narrativeStructure,
                point_of_view=pointOfView,
                writing_style=writingStyle,
                data=story,
            )

            return JsonResponse({"story": story})
        except Exception as e:
            return JsonResponse({"error": str(e)}, status=500)
    else:
        return JsonResponse({"error": "Invalid request method."}, status=405)
    
class StoryList(generics.ListAPIView):
    queryset = Stories.objects.all()
    serializer_class = StoriesSerializer
    permission_classes = [permissions.AllowAny]

class StoryDetail(generics.RetrieveUpdateDestroyAPIView):
    serializer_class = StoriesSerializer
    permission_classes = [permissions.AllowAny]

    def get_queryset(self):
        queryset = Stories.objects.all()
        title_query = self.request.query_params.get('title', None)

        if title_query is not None:
            queryset = queryset.annotate(similarity=TrigramSimilarity('title', title_query)).filter(similarity__gt=0.3).order_by('-similarity')
        return queryset