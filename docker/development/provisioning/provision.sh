#!/bin/bash

exec > >(tee -a /var/log/provision.log) 2> >(tee -a /var/log/provision_error.log >&2)

SCRIPT_DIR=$(cd `dirname ${BASH_SOURCE[0]}` && pwd)
source ${SCRIPT_DIR}/helper/functions.sh

####################
new_section "Initialize Services"

run_always "Ensure that the MySQL service is started" \
  . "/bin/bash ${SCRIPT_DIR}/project/start_mysql.sh"

run_always "Ensure that the RabbitMQ service is started" \
  . "/bin/bash ${SCRIPT_DIR}/project/start_rabbitmq.sh"

run_always "Ensure that the Redis service is started" \
  . "/bin/bash ${SCRIPT_DIR}/project/start_redis.sh"

####################
new_section "Initialize Application"

run_once "Ensure that all old caches are deleted" \
 . "/bin/bash ${SCRIPT_DIR}/general/clear-cache.sh"

run_once "Ensure that the database is up to date" \
  . "/bin/bash ${SCRIPT_DIR}/project/database.sh"

run_always "Ensure that all backend packages are installed and up to date" \
  . "/bin/bash ${SCRIPT_DIR}/project/build-backend.sh"

run_always "Ensure that all worker services are installed and up to date" \
  . "/bin/bash ${SCRIPT_DIR}/project/build-worker.sh"

#run_always "Ensure that all frontend packages are installed and up to date" \
#  . "/bin/bash ${SCRIPT_DIR}/project/build-frontend.sh"

run_always "Ensure that all database tables are created" \
  . "/bin/bash ${SCRIPT_DIR}/project/init-database.sh"

####################
new_section "Start services"

run_always "Ensure that the backend service is started" \
  . "/bin/bash ${SCRIPT_DIR}/project/run-backend.sh"

run_always "Ensure that the worker service is started" \
  . "/bin/bash ${SCRIPT_DIR}/project/run-worker.sh"

####################
new_section "Finish"

run_nothing "Provisioning done."

run_always "Listen to backend logs" \
  tail -f /var/log/backend.log &

wait
