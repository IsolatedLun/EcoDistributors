"""
ecoBackend URL Configuration!
"""
from django.contrib import admin
from django.urls import path, include, re_path
from django.conf.urls.static import static
from django.conf import settings
from django.views.generic import TemplateView, RedirectView

urlpatterns = [
    path('Calculus4Subzero9Alienable-admin/', admin.site.urls),
    path('api/products/', include('products.urls')),

    re_path('m/', TemplateView.as_view(template_name='index.html')),
    re_path(r'^.*$', RedirectView.as_view(url='/m/',
            permanent=False), name='unknown-path')
]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL,
                          document_root=settings.MEDIA_ROOT)
    urlpatterns += static(settings.STATIC_URL,
                          document_root=settings.STATIC_ROOT)

admin.site.site_header = 'EcoDistributors'
admin.site.site_title = 'EcoDistributors'
