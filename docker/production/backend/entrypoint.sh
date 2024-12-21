#!/bin/sh

echo "Waiting for MySQL to start"
while ! nc -z mysql 3306; do
  sleep 1
done
echo "MySQL started"

# Starte die Anwendung mit Gunicorn
exec gunicorn --certfile=/nginx/nginx.crt --keyfile=/nginx/nginx.key -b 0.0.0.0:6000 wsgi:app
