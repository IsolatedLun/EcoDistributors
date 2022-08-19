from django.db import models
from taggit.managers import TaggableManager


class Product(models.Model):
    title = models.CharField(max_length=64)
    description = models.TextField()

    # These 2 fields are used for organizing
    category = models.CharField(max_length=32)
    tags = TaggableManager()

    price = models.PositiveIntegerField(default=0)

    thumbnail = models.ImageField(upload_to='thumbnails/')

    date_created = models.DateTimeField(auto_now_add=True)
