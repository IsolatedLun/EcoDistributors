from rest_framework import serializers

from . import models


class ProductSerializer(serializers.ModelSerializer):
    reviews = serializers.SerializerMethodField(method_name='count_reviews')

    def count_reviews(self, obj):
        return 0

    class Meta:
        model = models.Product
        fields = '__all__'
