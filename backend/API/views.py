from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from .models import Projects, Post, Tools
from .serializers import ProjectsSerializer, PostSerializer, ToolsSerializer
from django.shortcuts import get_object_or_404

class ProjectsApiView(APIView):
    def get(self, request):
        data = Projects.objects.all()
        serializers = ProjectsSerializer(data, context={'request': request}, many=True)
        return Response(serializers.data)

class PostApiView(APIView):
    def get(self, request):
        data = Post.objects.all()
        serializers = PostSerializer(data, context={'request': request}, many=True)
        return Response(serializers.data)
    
class PostDetailApiView(APIView):
    def get(self, request, slug):
        post = get_object_or_404(Post, post_link=slug)
        serializers = PostSerializer(post, context={'request': request})
        return Response(serializers.data)
    
class ToolsApiView(APIView):
    def get(self, request):
        data = Tools.objects.all()
        serializers = ToolsSerializer(data, context={'request': request}, many=True)
        return Response(serializers.data)