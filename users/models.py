from django.db import models
"""Creating model for this app"""
from django.contrib.auth.models import User


# Create your models here.
class Profile(models.Model):
    """Creating profile extends base user"""
    user = models.OneToOneField(User, on_delete=models.CASCADE)

    phone_number = models.CharField(blank=True, max_length=20)
    description = models.TextField(blank=True)
    photo = models.ImageField(upload_to='users/pictures', blank=True, null=True)
    notification = models.BooleanField(default=False)
    # MetaData
    last_login = models.DateTimeField(auto_now_add=True)
    created_at = models.DateTimeField(auto_now_add=True)
    modified_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        """Return email."""
        return self.user.username
