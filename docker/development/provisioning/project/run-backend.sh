#!/usr/bin/env bash

cd /home/backend

. venv/bin/activate

nohup python3 run.py > /var/log/backend.log 2>&1 &

sleep 3

while true; do
  if ! nc -z localhost "5001" > /dev/null 2>&1; then
    echo
    echo "Error occurred in backend backend service, try to restart..."
    echo

    nohup python3 run.py 2>&1 | tee -a /var/log/backend.log &

    if [ $? -ne 0 ]; then
      echo "Error occurred while starting the backend service" >&2
      echo
    fi

    sleep 10
  fi
done &
