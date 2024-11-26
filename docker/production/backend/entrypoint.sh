#!/bin/sh

echo "Waiting for MySQL to start"
while ! nc -z mysql 3306; do
  sleep 1
done
echo "MySQL started"

# Starte die Anwendung mit Gunicorn
exec gunicorn -b 0.0.0.0:5001 wsgi:app
