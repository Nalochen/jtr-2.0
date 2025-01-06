#!/usr/bin/env bash

source /opt/scripts/provisioning/helper/functions.sh

nohup sudo /usr/sbin/mysqld --basedir=/usr --datadir=/var/lib/mysql --plugin-dir=/usr/lib/mysql/plugin --user=user --port=3306 --bind-address=0.0.0.0 &

wait_for_port 3306

echo "MySQL started on pid: $!"
