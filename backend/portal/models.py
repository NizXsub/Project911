from django.db import models
import uuid
from datetime import datetime, timedelta
# Create your models here.
class Portal(models.Model):
    portalId = models.UUIDField(primary_key = False, default = uuid.uuid4, editable = False, unique = True)
    name = models.CharField(max_length=255)
    created_at = models.DateTimeField(auto_now_add=True)
    deadline = models.DateTimeField(default = lambda : datetime.now + timedelta(days=3))
    def __str__(self):
        return self.name