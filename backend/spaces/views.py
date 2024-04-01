from django.shortcuts import render
from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from .serializers import SpaceSerializer, UserSpaceSerializer, GetSpaceSerializer
from rest_framework import status
from django.contrib.auth.models import User
from rest_framework.authtoken.models import Token
from .permissions import IsTeacherOfSpace
from .models import Space, UserSpace
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
            userspaceserializer = UserSpaceSerializer(data = {'user': User.objects.get(pk = teacher_id).id, 'space': serializer.data['spaceId'], 'is_teacher': True})
            if userspaceserializer.is_valid():
                userspaceserializer.save()
            message = f" {serializer.data['name']} created by {User.objects.get(pk = serializer.data['teacher']).username} successfully"
            # Process the validated data
            return Response({'message': message}, status=status.HTTP_201_CREATED)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        
@api_view(['POST', 'DELETE'])
@permission_classes([IsAuthenticated, IsTeacherOfSpace])
def add_member(request, spaceId, member_name):
    try:
        space = Space.objects.get(spaceId=spaceId)
        member_name = User.objects.get(username=member_name)
    except Space.DoesNotExist:
        return Response({'error': 'Space does not exist.'}, status=status.HTTP_404_NOT_FOUND)
    if request.method == "POST":
        if UserSpace.objects.filter(user = member_name.id, space = spaceId).exists():
            return Response({'error': 'User already exists in the space.'}, status=status.HTTP_400_BAD_REQUEST)
        data = request.data 
        copied_data = data.copy()
        copied_data['space'] = spaceId
        copied_data['user'] = member_name.id
        serializer = UserSpaceSerializer(data=copied_data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    if request.method=="DELETE":
        if UserSpace.objects.filter(user = member_name.id, space = spaceId).exists():
            UserSpace.objects.filter(user = member_name.id, space = spaceId).delete()
            return Response({'message': 'User removed from space'}, status=status.HTTP_200_OK)
        else:
            return Response({'error': 'User does not exist in the space'}, status=status.HTTP_400_BAD_REQUEST)
        
        # return Response({'error': 'User does not exist in the space'}, status=status.HTTP_400_BAD_REQUEST)   

# @api_view(['PATCH']) 

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def spaces(request):
    if request.method == "GET":
        serializer = GetSpaceSerializer(Space.objects.all(), many = True)
        return Response(serializer.data, status=status.HTTP_200_OK)
    return Response({'error': 'Invalid request'}, status=status.HTTP_400_BAD_REQUEST)
    
        
        
        
