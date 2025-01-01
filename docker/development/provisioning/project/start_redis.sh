#!/usr/bin/env bash

source /opt/scripts/provisioning/helper/functions.sh

nohup sudo /usr/bin/redis-server &

wait_for_port 6379

echo "Redis started on pid: $!"
