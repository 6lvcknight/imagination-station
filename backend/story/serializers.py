from rest_framework import serializers

from .models import Stories, Themes, Genres, Settings

class GenresSerializer(serializers.ModelSerializer):
    class Meta:
        model = Genres
        fields = '__all__'

class ThemesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Themes
        fields = '__all__'

class SettingsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Settings
        fields = '__all__'

class StoriesSerializer(serializers.ModelSerializer):
    settings = SettingsSerializer(many=True, read_only=True)
    class Meta:
        model = Stories
        fields = [
                'title', 'description','word_count','narrative_structure','point_of_view','writing_style','created_at','data','genre','theme', 'settings'
                ]
        read_only_fields = ['id']

    def create(self, validated_data):
        return super().create(validated_data)
    
    def __init__(self, *args, **kwargs):
        super(StoriesSerializer, self).__init__(*args, **kwargs)
        request = self.context.get('request')
        if request and request.method == 'POST':
            self.Meta.depth = 0
        else:
            self.Meta.depth = 3

