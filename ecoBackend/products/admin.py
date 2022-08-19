from django.contrib import admin

from . import models


@admin.register(models.Product)
class ProductAdmin(admin.ModelAdmin):
    list_display = ["id", "title", 'category']
    ordering = ["title", 'category']
    search_fields = ["title", 'category']
