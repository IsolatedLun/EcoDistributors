release: python ecoBackend/manage.py migrate
web: cd ./ecoBackend && gunicorn ecoBackend.wsgi:application
worker: cd ./frontend && npm run start