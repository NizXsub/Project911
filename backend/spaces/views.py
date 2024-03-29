from django.shortcuts import render
from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from .serializers import SpaceSerializer
from rest_framework import status
from django.contrib.auth.models import User
from rest_framework.authtoken.models import Token


# Create your views here.
@api_view(['POST'])
@permission_classes([IsAuthenticated])
def create_space(request):
    if request.method == "POST":
        serializer = SpaceSerializer(data=request.data)
        token = request.headers['Authorization'].split()[1]
        teacher_id = Token.objects.get(key = token).user_id
        if serializer.is_valid():
            serializer.validated_data['teacher'] = User.objects.get(pk = teacher_id)
            serializer.save()
            message = f" {serializer.data['name']} created by {User.objects.get(pk = serializer.data['teacher']).username} successfully"
            # Process the validated data
            return Response({'message': message}, status=status.HTTP_201_CREATED)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        

