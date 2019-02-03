from django.db import models


class Posts(models.Model):

    title = models.CharField(max_length=255)
    description = models.TextField()

    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)


class ImagePosts(models.Model):
    pass

# Create your models here.
