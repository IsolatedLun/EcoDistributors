from django.db.models import Q
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
    images = serializers.SerializerMethodField(method_name='get_images')
    details = serializers.SerializerMethodField(method_name='get_details')
    tags = serializers.SerializerMethodField(method_name='get_tags')
    key_points = serializers.SerializerMethodField(
        method_name='get_key_points')
    related_products = serializers.SerializerMethodField(
        method_name='get_related_products')

    def get_reviews(self, obj):
        return []

    def get_tags(self, obj):
        return [x.name for x in Tag.objects.filter(product=obj.id)]

    def get_related_products(self, obj):
        tags = list(Tag.objects.filter(product=obj.id))
        related_objects = models.Product.objects.filter(
            Q(tags__name__in=tags) |
            Q(category__in=[obj.category])
        ).distinct()

        return ProductSerializer(related_objects, many=True).data

    def get_images(self, obj):
        return [x.image.url for x in models.ProductImage.objects.filter(product_id=obj.id)]

    def get_key_points(self, obj):
        return [x.key_point for x in models.ProductKeyPoint.objects.filter(product_id=obj.id)]

    def get_details(self, obj):
        details = models.ProductDetails.objects.get(product_id=obj.id)

        return ProductDetailSerializer(details).data

    class Meta:
        model = models.Product
        fields = '__all__'

# ===============================
# ===============================


class ProductDetailSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.ProductDetails
        exclude = ['id', 'product']
