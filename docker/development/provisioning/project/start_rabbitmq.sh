#!/usr/bin/env bash

source /opt/scripts/provisioning/helper/functions.sh

create_rabbitmq_user() {
    echo "Creating RabbitMQ user..."

    WORKER_USER=${RABBITMQ_WORKER_USER}
    WORKER_PASS=${RABBITMQ_WORKER_PASS}

    sudo /usr/sbin/rabbitmqctl add_user $WORKER_USER $WORKER_PASS > /dev/null 2>&1
    sudo /usr/sbin/rabbitmqctl set_user_tags $WORKER_USER administrator > /dev/null 2>&1
    sudo /usr/sbin/rabbitmqctl set_permissions -p / $WORKER_USER ".*" ".*" ".*" > /dev/null 2>&1


    BE_USER=${RABBITMQ_BE_USER}
    BE_PASS=${RABBITMQ_BE_PASS}

    sudo /usr/sbin/rabbitmqctl add_user $BE_USER $BE_PASS > /dev/null 2>&1
    sudo /usr/sbin/rabbitmqctl set_user_tags $BE_USER administrator > /dev/null 2>&1
    sudo /usr/sbin/rabbitmqctl set_permissions -p / $BE_USER ".*" ".*" ".*" > /dev/null 2>&1
}

nohup sudo /usr/sbin/rabbitmq-server &

wait_for_port 5672

echo "RabbitMQ started on pid: $!"

create_rabbitmq_user
