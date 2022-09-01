"""
Django settings for ecoBackend project.
"""

from pathlib import Path
import os
import json
from dotenv import load_dotenv, find_dotenv
from datetime import timedelta
import dj_database_url
from google.oauth2 import service_account

load_dotenv(find_dotenv())

# Build paths inside the project like this: BASE_DIR / 'subdir'.
BASE_DIR = Path(__file__).resolve().parent.parent


# Quick-start development settings - unsuitable for production
# See https://docs.djangoproject.com/en/4.0/howto/deployment/checklist/

# SECURITY WARNING: keep the secret key used in production secret!
SECRET_KEY = os.environ['SECRET_KEY']

# SECURITY WARNING: don't run with debug turned on in production!
DEBUG = False

ALLOWED_HOSTS = ['*']


# Application definition
# =================================
# Custom changes
# =================================
INSTALLED_APPS = [
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'whitenoise.runserver_nostatic',
    'django.contrib.staticfiles',

    'rest_framework',
    'corsheaders',
    'taggit',

    'users',
    'products',
]

AUTH_USER_MODEL = 'users.cUser'

CORS_ORIGIN_ALLOW_ALL = True

WHITENOISE_MIMETYPES = {
    '.js': 'application/javascript',
    '.css': 'text/css'
}

STATICFILES_STORAGE = 'whitenoise.storage.CompressedStaticFilesStorage'
STATIC_URL = '/static/'
STATICFILES_DIRS = [os.path.join('public')]
STATIC_ROOT = os.path.join(BASE_DIR, 'static')

# Storage
DEFAULT_FILE_STORAGE = 'storages.backends.gcloud.GoogleCloudStorage'
GS_BUCKET_NAME = os.environ['GOOGLE_BUCKET_NAME']
GS_PROJECT_ID = os.environ['GS_PROJECT_ID']

MEDIA_ROOT = os.path.join(BASE_DIR, 'media')
MEDIA_URL = 'https://storage.googleapis.com/{}/'.format(GS_BUCKET_NAME)

GS_CREDENTIALS_JSON = {'type': 'service_account', 'project_id': 'bamboo-medium-360514', 'private_key_id': 'a76c322cc4b495a22f4aedb4885d34839f40d2c0', 'private_key': '-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQCXARdViWmUVif5\nmpOn3nWDVwHV2fRqX6kj+tWPkr9qggudA4QDvYQfwq7DwYWJP++86AM1zeONsPeo\nOEVFUSCg34juMKgi3Ob8i6M+CQjn13pcTQEeuPwo7/6pB/tMhptX04T3+qd2BFYb\nPXePrakzxCuWT6oNTQd0pxjwDwa1yWiXQ7K5utlOx7Qlkjf+CZuqf84LrQBbUAAj\nO/kQWaHT1tRrxymoRm1OsSqyXRakysvd/v26bmDUIKJqlgScR0iDfvXmWrQ9ujcQ\nsCw8WZ0HdDD8n4udw3qQDveDv3/R8TLMfhB75vW7FmX9q6sYQGSdeUybBpkvQubk\nambO8/u7AgMBAAECggEAHH78t8wcK/2MQqq8hZfSBkyTkJc2bCKMSTlrNtJjJAbR\niTpiHdCUT+gN0exBtnJl2/jOrkch05nbSpf/3oJeTW2Rqh1thVK5llwFnM3Yq+O6\neBOiC/mtwE31+VEDx9+5DfxhIejf1EIiO7bAStFjVl0FOrLi7Oql5wonhxnW0tQa\nguHa9rutjovz1pOD0VM2aB66Ac2JAkMU37z25cFn6PiP0/cuUCuo7pNGPDOG3Ogd\n/A7bVZYIgjx9Dr4Ww7eXYEbUIkLvCyEceVvxyAUKKJH5H2IxD0QeM7bk5CJ8l8tl\n4n+DuRRNN7xdDianrZCTeozKgUbolcSjXKHwu4Lm0QKBgQDPpBpvx6/EgqcRYaym\nwf6vSARbTYzIuHPYG+GUGWw/BphrPUNmgRfX6/70emqyj20aw4knyJf0VNVL3Dq5\nvdxWMKUtHYr3Kbvd0NhcBxgVq/uKo1wY5KtDIUV/Pqke3xDkBq0ddbzLI9sfUKN5\nMtvK2aehnmvWf633DOpGSIcUcQKBgQC6LDYma3vbIm75oTUjWDwRwCeXnjooV+/E\nKGSIx8SK5if3bXDTsej1fPBQX2zwxLYMrIdsDtm+fg1o5BcuTsGnjLt+GVyiGFj6\nl3HTC2pyooo9hPwGpvqbT5dK0DiXEmbPDJRI/J8si8se4Yge7kx+yn0un41W+7Bc\nZO7vDfO46wKBgHxkBgZi7TRfRPDPv9uiqg2dqiZ8XdO9VIDpqwjK9iMHs3XDHMai\nnYMX+QPC9nqEG8uFynvP2uBflew9Qd0WFZJ4z+soIKETGl23CHaRNWd+QVH7rWeo\nTcUIgJbLFgvNfFPuf/T/HJvhnhqzd0tbIXrzS04yFs5IbRJsZUi3mFyxAoGAbSzA\nFIezei4XJgyDPNbhYwdsMF15fW8UC9QkIJIFj+6oQVDMeVg7ZLp/sqJDIG460/PY\n9mU/C5agBoK7lUxaBAdja+8zg1sD0vA8r6ZiJhdrOehiYwRIsgtajWTNysnfwEuA\nKcz7CwRveQyI5pqYAUJ9ZnnqSLgQFB6cf1OPOUECgYEAnfJjie2sTem4pULDvxpm\n6VsMl1q5oVfm9ngH/3cGy/GWBkJLvXEv5eZDveZsBCfDUJ+HWzrxTcXWIOG4+aG/\nu3TZeLunFORLMyy/a9PHJYB8bUgOaEHHYSayD13Bf/ogzdhljpFYe2DbVWdhw4V4\nL2IomRAW6MBlfnjspn9Kqyg=\n-----END PRIVATE KEY-----\n',
                       'client_email': 'eco-media-service@bamboo-medium-360514.iam.gserviceaccount.com', 'client_id': '101980303372356620245', 'auth_uri': 'https://accounts.google.com/o/oauth2/auth', 'token_uri': 'https://oauth2.googleapis.com/token', 'auth_provider_x509_cert_url': 'https://www.googleapis.com/oauth2/v1/certs', 'client_x509_cert_url': 'https://www.googleapis.com/robot/v1/metadata/x509/eco-media-service%40bamboo-medium-360514.iam.gserviceaccount.com'}

GS_CREDENTIALS = service_account.Credentials.from_service_account_info(
    GS_CREDENTIALS_JSON
)

MIDDLEWARE = [
    'corsheaders.middleware.CorsMiddleware',
    'whitenoise.middleware.WhiteNoiseMiddleware',
    'django.middleware.security.SecurityMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
]

ROOT_URLCONF = 'ecoBackend.urls'

TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [os.path.join(BASE_DIR, 'public')],
        'APP_DIRS': True,
        'OPTIONS': {
            'context_processors': [
                'django.template.context_processors.debug',
                'django.template.context_processors.request',
                'django.contrib.auth.context_processors.auth',
                'django.contrib.messages.context_processors.messages',
            ],
        },
    },
]

WSGI_APPLICATION = 'ecoBackend.wsgi.application'


# Database
# https://docs.djangoproject.com/en/4.0/ref/settings/#databases

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql_psycopg2',
        'NAME': 'postgres',
        'USER': 'postgres',
        'PASSWORD': '123',
        'HOST': '127.0.0.1',
        'PORT': '5432',

    }
}


# Password validation
# https://docs.djangoproject.com/en/4.0/ref/settings/#auth-password-validators

AUTH_PASSWORD_VALIDATORS = [
    {
        'NAME': 'django.contrib.auth.password_validation.UserAttributeSimilarityValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.MinimumLengthValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.CommonPasswordValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.NumericPasswordValidator',
    },
]


# Internationalization
# https://docs.djangoproject.com/en/4.0/topics/i18n/

LANGUAGE_CODE = 'en-us'

TIME_ZONE = 'UTC'

USE_I18N = True

USE_TZ = True


# Static files (CSS, JavaScript, Images)
# https://docs.djangoproject.com/en/4.0/howto/static-files/

STATIC_URL = 'static/'

# Default primary key field type
# https://docs.djangoproject.com/en/4.0/ref/settings/#default-auto-field

DEFAULT_AUTO_FIELD = 'django.db.models.BigAutoField'

DATABASES['default'] = dj_database_url.config(
    default=os.environ['DATABASE_URL'])
