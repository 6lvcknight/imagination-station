from django.db import models

# Create your models here.

class Themes(models.Model):
    name = models.CharField(max_length=50)

    def __str__(self):
        return self.name
    
class Genres(models.Model):
    name = models.CharField(max_length=50)

    def __str__(self):
        return self.name
class Stories(models.Model):
    title = models.CharField(max_length=100)
    description = models.TextField()
    word_count = models.IntegerField()
    narrative_structure = models.CharField(max_length=50) 
    point_of_view = models.CharField(max_length=50)
    writing_style = models.CharField(max_length=50)
    created_at = models.DateTimeField(auto_now_add=True)
    data = models.TextField()

    genre = models.ManyToManyField(Genres, related_name='story_genre')
    theme = models.ManyToManyField(Themes, related_name='story_theme')

    def __str__(self):
        return self.title

class Settings(models.Model):
    story_id = models.ForeignKey(Stories, on_delete=models.CASCADE)
    time_period = models.CharField(max_length=100)
    location = models.CharField(max_length=255)

    def __str__(self):
        return self.name
    