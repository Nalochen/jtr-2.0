#!/usr/bin/env bash

source /opt/scripts/provisioning/helper/functions.sh

create_rabbitmq_user() {
    echo "Creating RabbitMQ user..."

    USER=${RABBITMQ_USER}
    PASS=${RABBITMQ_PASS}

    sudo /usr/sbin/rabbitmqctl add_user $USER $PASS > /dev/null 2>&1
    sudo /usr/sbin/rabbitmqctl set_user_tags $USER administrator > /dev/null 2>&1
    sudo /usr/sbin/rabbitmqctl set_permissions -p / $USER ".*" ".*" ".*" > /dev/null 2>&1
}

nohup sudo /usr/sbin/rabbitmq-server &

wait_for_port 5672

echo "RabbitMQ started on pid: $!"
