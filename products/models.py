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
        upload_to='thumbnails/%Y/%m/%d',
        help_text=_(
            'An image that will show the user what the product looks like')
    )

    date_created = models.DateTimeField(auto_now_add=True)

    is_upcoming = models.BooleanField(default=False)
    is_out_of_stock = models.BooleanField(default=False)


class ProductDetails(models.Model):
    product = models.OneToOneField(Product, on_delete=models.CASCADE)

    brand = models.CharField(max_length=64)
    weight = models.PositiveIntegerField(
        default=0, help_text=_('How much the product weights in lbs'))
    dimensions = models.CharField(max_length=48, help_text=_('2 x 2 x 2'))


class ProductImage(models.Model):
    product = models.ForeignKey(Product, on_delete=models.CASCADE)
    image = models.ImageField(
        upload_to='products/%Y/%m/%d',
        help_text=_(
            'An image that will show the user what the product looks like')
    )


class ProductKeyPoint(models.Model):
    product = models.ForeignKey(Product, on_delete=models.CASCADE)
    key_point = models.CharField(max_length=256, help_text=_(
        'A short text that explains a key point about the product'))


class CategoriesSingleton(models.Model):
    _singleton = models.BooleanField(default=True, editable=False, unique=True)
    categories = models.JSONField(default=list)
