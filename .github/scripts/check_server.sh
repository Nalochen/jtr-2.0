#!/bin/bash

export FLASK_ENV='testing'
export CACHE_REDIS_HOST='localhost'
export CACHE_REDIS_PORT='6379'
export CELERY_APP_NAME='tasks'
export CELERY_BROKER_NAME='worker'
export CELERY_BROKER_URL='amqp://admin:mypass@localhost:5672'
export CELERY_RESULT_BACKEND='rpc://'
export DATABASE_URL='sqlite:///test.db'
export MAIL_SERVER='localhost'
export MAIL_PORT='1025'
export MAIL_USE_TLS='False'
export MAIL_USE_SSL='False'
export MAIL_USERNAME=None
export MAIL_PASSWORD=None
export MAIL_DEFAULT_SENDER='jtr@localhost'
export MYSQL_DATABASE='jtr'
export MYSQL_PASSWORD='password'
export MYSQL_ROOT_PASSWORD='password'
export MYSQL_USER='user'
export RABBITMQ_DEFAULT_PASS='mypass'
export RABBITMQ_DEFAULT_USER='admin'
export SECRET_KEY='secret'

python3 ./backend/wsgi.py &

SERVER_PID=$!

sleep 5

if ps -p $SERVER_PID > /dev/null
then
   echo "Server started successfully"

   kill $SERVER_PID
else
   echo "Server failed to start"

   exit 1
fi
