from django.urls import path

from . import views

urlpatterns = [
    path('', views.ProductsView.as_view(), name='products'),
    path('<int:product_id>', views.ProductView.as_view(), name='product-view'),

    path('count', views.ProductCountView.as_view(), name='products-count'),
]
