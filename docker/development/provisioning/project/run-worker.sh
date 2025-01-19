#!/bin/bash

cd /home/backend

. worker/venv/bin/activate

nohup celery -A worker.tasks worker --loglevel=info > /var/log/worker.log 2>&1 &

echo "Worker started on pid: $!"
