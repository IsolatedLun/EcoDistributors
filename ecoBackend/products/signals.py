from django.db.models.signals import post_save
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
