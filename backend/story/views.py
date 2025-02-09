from django.shortcuts import render
from django.conf import settings

import json
from openai import OpenAI
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt

from .models import Stories

# Create your views here.
openaikey = settings.OPENAI_API_KEY

def generate_storyline(storyLine, chName, genre, age, narrativeStructure, pointOfView, writingStyle):
    return f"a story about {storyLine} with character named {chName} with a genre of {genre} for a {age} years old. it should have a {narrativeStructure} narrative structure, {pointOfView} point of view, and {writingStyle} writing style."

client = OpenAI(
  api_key=openaikey
)

@csrf_exempt 
def generator(request):
    if request.method == "POST":
        try:
            body = json.loads(request.body)
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
                model="gpt-4o-mini",
                messages=[
                    {"role": "user", "content": prompt}
                ],
                max_tokens=400,
                temperature=0.5,
            )
            story = response.choices[0].text.strip()

            new_story = Stories.objects.create(
                title="Generated Story",
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