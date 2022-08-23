from django.db.models.signals import post_save, post_delete
from django.dispatch import receiver
from django.db.models import Count

from . import models


@receiver(post_save, sender=models.Product)
def update_categories(sender, instance, *args, **kwargs):
    if instance:
        categories, created = models.CategoriesSingleton.objects.get_or_create(
            _singleton=True)

        categories.categories = list(models.Product.objects.all().values(
            'category').annotate(count=Count('category')))
        categories.save()


@receiver(post_delete, sender=models.Product)
def clean_product_thumbnail(sender, instance, *args, **kwargs):
    # Removes the product's thumbnail when deleted.
    if instance.id:
        instance.thumbnail.delete(save=False)


@receiver(post_delete, sender=models.ProductImage)
def clean_product_images(sender, instance, *args, **kwargs):
    # Removes the product'ss image when deleted.
    if instance.id:
        instance.image.delete(save=False)
