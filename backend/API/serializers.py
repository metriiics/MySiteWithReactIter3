from rest_framework import serializers
from .models import Projects, Post, Tools
from taggit.serializers import (TagListSerializerField, TaggitSerializer)

class ProjectsSerializer(TaggitSerializer, serializers.ModelSerializer):
    projects_tags = TagListSerializerField()

    class Meta:
        model = Projects 
        fields = ('pk', 'projects_title', 'projects_description', 'projects_tags', 'projects_link')

class PostSerializer(TaggitSerializer, serializers.ModelSerializer):
    post_tags = TagListSerializerField()

    class Meta:
        model = Post 
        fields = ('pk', 'post_image', 'post_title', 'post_data', 'post_tags', 'post_description', 'post_link')


class ToolsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tools 
        fields = ('pk', 'tools_name', 'tools_image')