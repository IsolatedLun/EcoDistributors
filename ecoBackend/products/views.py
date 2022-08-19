from django.db.models import Q
from django.db.models import Count

from rest_framework import generics
from rest_framework.views import APIView, Response

from . import models
from . import serializers
from responses import OK, NOT_FOUND


class ProductsView(APIView):
    def post(self, req):
        filtered_products = models.Product.objects.filter(
            title__icontains=req.data['title'])
        categories = list(models.Product.objects.all().values(
            'category').annotate(count=Count('category')))

        if(req.data['filters'] or req.data['tags']):
            filtered_products = filtered_products.filter(
                Q(tags__name__in=req.data['tags']) |
                Q(category__in=req.data['filters'])
            )

        serialized_data = serializers.ProductSerializer(
            filtered_products.distinct(), many=True).data
        return Response(data={'products': serialized_data, 'categories': categories}, status=OK)


class ProductView(APIView):
    def get(self, req, product_id):
        try:
            product = models.Product.objects.get(id=product_id)
            serialized_data = serializers.ProductViewSerializer(product).data

            product.views += 1
            product.save()

            return Response(data=serialized_data, status=OK)
        except Exception as e:
            print(e)
            return Response(data={'detail': 'Post does not exist'}, status=NOT_FOUND)
