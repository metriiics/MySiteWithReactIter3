from django.db import models
from ckeditor.fields import RichTextField
from taggit.managers import TaggableManager

class Projects(models.Model):
    projects_title = models.CharField(max_length=100)
    projects_description = models.CharField(max_length=750)
    projects_tags = TaggableManager()
    projects_link = models.URLField(max_length=200)