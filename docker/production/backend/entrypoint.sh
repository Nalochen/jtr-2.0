#!/bin/sh

echo "Waiting for MySQL to start"
while ! nc -z mysql 3306; do
  sleep 1
done
echo "MySQL started"

exec gunicorn \
  --certfile="${SSL_CERT_PATH}" \
  --keyfile="${SSL_KEY_PATH}" \
  -b 0.0.0.0:5001 wsgi:app
