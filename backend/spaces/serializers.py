from rest_framework import serializers
from .models import Space, UserSpace
from django.contrib.auth.models import User


class SpaceSerializer(serializers.ModelSerializer):
    class Meta:
        model = Space
        fields = '__all__'
class UserSpaceSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserSpace
        fields = '__all__'
        
class GetSpaceSerializer(serializers.ModelSerializer):
    teacher_username = serializers.CharField(source='teacher.username', read_only=True)
    class Meta:
        model = Space
        fields = ('spaceId', 'name', 'teacher_username', 'created_at')
