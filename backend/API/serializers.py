from rest_framework import serializers
from .models import Projects, Post, Tools
from taggit.serializers import (TagListSerializerField, TaggitSerializer)

class ProjectsSerializer(TaggitSerializer, serializers.ModelSerializer):
    projects_tags = TagListSerializerField()

    class Meta:
        model = Projects 
        fields = ('pk', 'projects_title_ru', 'projects_title_en', 'projects_description_ru', 'projects_description_en', 'projects_tags', 'projects_link')

class PostSerializer(TaggitSerializer, serializers.ModelSerializer):
    post_tags = TagListSerializerField()

    class Meta:
        model = Post 
        fields = ('pk', 'post_image', 'post_title_ru', 'post_title_en', 'post_data', 'post_tags', 'post_description_ru', 'post_description_en', 'post_content_ru', 'post_content_en', 'post_link')


class ToolsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tools 
        fields = ('pk', 'tools_name', 'tools_image')