from django.utils import timezone
from django.db import models

# Create your models here.
class Space(models.Model):
    name = models.CharField(max_length=255)
    teacher = models.ForeignKey("auth.User", on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)
    def __str__(self):
        return self.name
    
class Notice(models.Model):
    space = models.ForeignKey(Space, on_delete=models.CASCADE)
    title = models.CharField(max_length=255)
    content = models.TextField()
    created_at = models.DateTimeField(default = timezone.now())
    deadline = models.DateTimeField()
    created_by = models.ForeignKey("auth.User", on_delete=models.CASCADE)

    def __str__(self):
        return self.title

