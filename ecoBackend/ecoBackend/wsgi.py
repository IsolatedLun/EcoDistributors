"""
WSGI config for ecoBackend project.
"""

import os

from django.core.wsgi import get_wsgi_application

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'ecoBackend.settings')

application = get_wsgi_application()
