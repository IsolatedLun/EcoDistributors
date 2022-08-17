from django.db import models


class Product(models.Model):
    title = models.CharField(max_length=64)
    description = models.TextField()

    price = models.PositiveIntegerField(default=0)

    thumbnail = models.ImageField(upload_to='thumbnail/')

    date_created = models.DateTimeField(auto_now_add=True)
