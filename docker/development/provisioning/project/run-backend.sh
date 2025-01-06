#!/bin/bash

cd /home/backend

. venv/bin/activate

nohup python3 run.py > /var/log/backend.log 2>&1 &

sleep 3

echo "Backend started on pid: $!"

while true; do
  if ! nc -z localhost "8080" > /dev/null 2>&1; then
    echo
    echo "Error occurred in backend backend service, try to restart..."
    echo

    nohup python3 run.py > /var/log/backend.log 2>&1 &

    if [ $? -ne 0 ]; then
      echo
      echo "Error occurred while starting the backend service" >&2
      echo
    fi

    sleep 10
  fi
done &
