from django.contrib import admin

from . import models


class ProductImageInline(admin.TabularInline):
    model = models.ProductImage
    fields = ['image']


class ProductKeyPointInline(admin.TabularInline):
    model = models.ProductKeyPoint
    fields = ['key_point']


class ProductDetailsInline(admin.TabularInline):
    model = models.ProductDetails
    fields = []


@admin.register(models.Product)
class ProductAdmin(admin.ModelAdmin):
    inlines = [ProductDetailsInline, ProductImageInline, ProductKeyPointInline]
    list_display = ["id", "title", 'category', 'views']
    ordering = ["title", 'category']
    search_fields = ["title", 'category']
