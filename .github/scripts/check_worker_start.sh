#!/bin/bash

cd ./backend/worker

set -x # Print commands and their arguments as they are executed.
set -e # Exit immediately if a command exits with a non-zero status.
set -u # Exit immediately if a variable is not defined.

export CELERY_APP_NAME='tasks'
export CELERY_BROKER_URL='amqp://guest:guest@rabbitmq:5672'
export CELERY_RESULT_BACKEND='rpc://'
export DATABASE_URL='mysql+pymysql://user:password@mysql/jtr'
export MAIL_SERVER='localhost'
export MAIL_PORT='25'
export MAIL_USE_TLS='False'
export MAIL_USERNAME=None
export MAIL_PASSWORD=None

nohup celery -A tasks worker --loglevel=info &

WORKER_PID=$!
sleep 5

if ps -p $WORKER_PID > /dev/null
then
   echo "Worker is running"
   exit 0
else
   echo "Worker failed to start"
   exit 1
fi
