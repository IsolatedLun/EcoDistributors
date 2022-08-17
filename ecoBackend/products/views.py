from django.shortcuts import render
from rest_framework import generics

from . import models
from . import serializers


class ProductsView(generics.ListAPIView):
    queryset = models.Product.objects.all()
    serializer_class = serializers.ProductSerializer
