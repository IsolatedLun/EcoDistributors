from django.db.models import Q
from operator import attrgetter

from rest_framework import generics
from rest_framework.views import APIView, Response

from . import models
from . import serializers
from responses import OK, NOT_FOUND


class ProductsView(APIView):
    def post(self, req):
        filtered_products = models.Product.objects.filter(
            title__icontains=req.data['title'])

        if(req.data['filters'] or req.data['tags']):
            filtered_products = filtered_products.filter(
                Q(tags__name__in=req.data['tags']) |
                Q(category__in=req.data['filters'])
            )

        serialized_data = serializers.ProductSerializer(
            filtered_products.distinct(), many=True).data
        return Response(data=serialized_data, status=OK)


class ProductView(APIView):
    def get(self, req, product_id):
        try:
            product = models.Product.objects.get(id=product_id)
            serialized_data = serializers.ProductViewSerializer(product).data

            return Response(data=serialized_data, status=OK)
        except Exception as e:
            print(e)
            return Response(data={'detail': 'Post does not exist'}, status=NOT_FOUND)
