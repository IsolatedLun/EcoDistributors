"""
ecoBackend URL Configuration
"""
from django.contrib import admin
from django.urls import path, include, re_path
from django.conf.urls.static import static
from django.shortcuts import render
from django.conf import settings
from django.views.generic import TemplateView


def render_svetltekit(request):
    return render(request, "index.html")


urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/products/', include('products.urls')),

    re_path(r"^$", TemplateView.as_view(template_name='index.html')),
    re_path(r"^(?:.*)/?$", TemplateView.as_view(template_name='index.html')),
]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL,
                          document_root=settings.MEDIA_ROOT)
    urlpatterns += static(settings.STATIC_URL,
                          document_root=settings.STATIC_ROOT)

admin.site.site_header = 'EcoDistributors'
admin.site.site_title = 'EcoDistributors'