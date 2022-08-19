from rest_framework import serializers

from . import models

from taggit.models import Tag
from taggit.serializers import TagList


class ProductSerializer(serializers.ModelSerializer):
    reviews = serializers.SerializerMethodField(method_name='count_reviews')
    tags = serializers.SerializerMethodField(method_name='get_tags')

    def count_reviews(self, obj):
        return 0

    def get_tags(self, obj):
        return [x.name for x in Tag.objects.filter(product=obj.id)]

    class Meta:
        model = models.Product
        fields = '__all__'


class ProductViewSerializer(serializers.ModelSerializer):
    reviews = serializers.SerializerMethodField(method_name='get_reviews')
    related_products = serializers.SerializerMethodField(
        method_name='get_related_products')

    def get_reviews(self, obj):
        return []

    def get_related_products(self, obj):
        related_objects = models.Product.objects.filter(
            tags__name__in=['dessert']).distinct()
        return ProductSerializer(related_objects, many=True).data

    class Meta:
        model = models.Product
        fields = '__all__'
