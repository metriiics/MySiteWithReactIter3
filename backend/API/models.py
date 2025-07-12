from django.db import models
from taggit.managers import TaggableManager
from django.utils.text import slugify

class Projects(models.Model):
    projects_title_ru = models.CharField(max_length=100)
    projects_title_en = models.CharField(max_length=100)
    projects_description_ru = models.CharField(max_length=750)
    projects_description_en = models.CharField(max_length=750)
    projects_tags = TaggableManager()
    projects_link = models.URLField(max_length=200)

class Post(models.Model):
    post_image = models.ImageField(upload_to='posts/', null=True)
    post_title_ru = models.CharField(max_length=100)
    post_title_en = models.CharField(max_length=100)
    post_data = models.DateField()
    post_tags = TaggableManager()
    post_description_ru = models.CharField(max_length=750)
    post_description_en = models.CharField(max_length=750)
    post_content_ru = models.TextField(blank=True, null=True)
    post_content_en = models.TextField(blank=True, null=True)
    post_link = models.SlugField(max_length=200, unique=True, blank=True)

    def save(self, *args, **kwargs):
        if not self.post_link:
            self.post_link = slugify(self.post_title_en)
        super().save(*args, **kwargs)

class Tools(models.Model):
    tools_name = models.CharField(max_length=100)
    tools_image = models.ImageField(upload_to='tools/', null=True)
    