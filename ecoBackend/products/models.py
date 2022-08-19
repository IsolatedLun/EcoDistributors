from django.db import models
from django.utils.translation import gettext_lazy as _

from taggit.managers import TaggableManager


class Product(models.Model):
    title = models.CharField(max_length=64)
    description = models.TextField(help_text=_(
        'A detailed paraghraph about the product'))

    # These 2 fields are used for organizing
    category = models.CharField(max_length=32, help_text=_(
        'The main category of an product (Cake => Dessert)'))
    tags = TaggableManager()

    price = models.PositiveIntegerField(default=0)
    views = models.PositiveIntegerField(default=0)

    thumbnail = models.ImageField(
        upload_to='thumbnails/', help_text=_('An image that will show the user what the product looks like'))

    date_created = models.DateTimeField(auto_now_add=True)
