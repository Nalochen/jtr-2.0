#!/bin/bash

# Funktion zum Starten von Diensten
start_services() {
    echo "Starting MySQL..."
    sudo /usr/sbin/mysqld --basedir=/usr --datadir=/var/lib/mysql --plugin-dir=/usr/lib/mysql/plugin --user=user --port=3307 --bind-address=0.0.0.0 &
    mysql_pid=$!

    echo "Starting RabbitMQ..."
    sudo /usr/sbin/rabbitmq-server &
    rabbitmq_pid=$!

    echo "Starting Redis..."
    sudo /usr/bin/redis-server &
    redis_pid=$!
}

start_provisioning() {
    echo "Starting provisioning..."
    sudo /bin/bash /opt/scripts/provisioning/provision.sh
    provision_pid=$!
}

wait_for_port() {
    port=$1

    while ! nc -z localhost "$port" > /dev/null 2>&1; do
      sleep 1
    done
}

#trap stop_services SIGTERM SIGINT

start_services

sleep 5

echo "Waiting for MySQL..."
wait_for_port 3307

echo "Waiting for RabbitMQ..."
wait_for_port 5672

echo "Waiting for Redis..."
wait_for_port 6379

/bin/bash /opt/scripts/provisioning/provision.sh

wait
