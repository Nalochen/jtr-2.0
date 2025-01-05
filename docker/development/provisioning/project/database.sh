#!/bin/bash

is_schema_update_required="0"
found_databases="0"
expected_databases="5"

determine_available_databases () {
  found_databases=$(sudo mysql --skip-column-names --execute "SHOW DATABASES" --silent | wc --lines)
}

create_databases () {
  for DB in ${MYSQL_DATABASE}; do
      sudo mysql --execute="DROP DATABASE IF EXISTS ${DB};"
      sudo mysql --execute="CREATE DATABASE ${DB};"
  done
}

create_test_user () {
  sudo mysql --execute="CREATE USER IF NOT EXISTS 'user'@'%' IDENTIFIED BY 'password';
    GRANT ALL PRIVILEGES ON jtr.* TO 'user'@'%';
    FLUSH PRIVILEGES;"
}

on_create () {
  create_databases
  create_test_user
}

on_update () {
  #update_database_schemas
  echo "Database schemas are up to date."
}

setup_database () {
  determine_available_databases

  if test $found_databases -ge "${expected_databases}"; then
    on_update
  else
    on_create
  fi
}

setup_database
