from rest_framework import serializers
from .models import Projects
from taggit.serializers import (TagListSerializerField, TaggitSerializer)

class ProjectsSerializer(TaggitSerializer, serializers.ModelSerializer):
    projects_tags = TagListSerializerField()

    class Meta:
        model = Projects 
        fields = ('pk', 'projects_title', 'projects_description', 'projects_tags', 'projects_link')