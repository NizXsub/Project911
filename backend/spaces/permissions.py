from rest_framework.permissions import BasePermission

class IsOwner(BasePermission):
    def is_teacher(self, request, view, obj):
        return obj.teacher == request.user