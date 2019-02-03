from django.db import models


class Posts(models.Model):
    """ Creating Post Model"""
    title = models.CharField(max_length=255)
    description = models.TextField()

    created_at = models.DateTimeField(auto_now_add=True, blank=True)
    updated_at = models.DateTimeField(auto_now=True)


class ImagePosts(models.Model):
    """ Creating Image Post Model"""
    title = models.CharField(max_length=255)
    image_path = models.ImageField(upload_to='users/pictures', blank=True, null=True)

    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

# Create your models here.
