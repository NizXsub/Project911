from django.utils import timezone
from django.db import models
import uuid
from django.contrib.auth.models import User


# Create your models here.
class Space(models.Model):
    spaceId = models.UUIDField(primary_key = False, default = uuid.uuid4, editable = False, unique = True)
    name = models.CharField(max_length=255)
    teacher = models.ForeignKey("auth.User", on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)
    # teacher_name = User.objects.get(pk = teacher['id']).username 
    print(teacher)
    def __str__(self):
        return self.name
    
    
    # @property
    # def teacher_name(self):
    #     user = User.objects.get(pk = self.teacher)
    #     return user.username
    
class Notice(models.Model):
    NoticeId = models.UUIDField(primary_key = False, default = uuid.uuid4, editable = False, unique = True)
    space = models.ForeignKey(Space, on_delete=models.CASCADE)
    title = models.CharField(max_length=255)
    content = models.TextField()
    created_at = models.DateTimeField(default = timezone.now())
    deadline = models.DateTimeField()
    created_by = models.ForeignKey("auth.User", on_delete=models.CASCADE)

    def __str__(self):
        return self.title
    
class CustomDateTimeField(models.DateTimeField):
    def value_to_string(self, obj):
        val = self.value_from_object(obj)
        if val:
            val.replace(microsecond=0)
            return val.isoformat()
        return ''

class UserSpace(models.Model):
    user = models.ForeignKey("auth.User", on_delete=models.CASCADE)
    space = models.ForeignKey(Space, to_field = 'spaceId',on_delete=models.CASCADE)
    is_teacher = models.BooleanField(default=False)
    def __str__(self):
        return self.user.username + " - " + self.space.name
    
