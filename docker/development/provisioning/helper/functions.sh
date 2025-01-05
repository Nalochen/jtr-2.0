#!/bin/bash

##
# Display Headline
#
# @param headline      The text to show
##
function print_section() {
  echo
  echo -e "\e[36m>>\e[0m \e[94m$1\e[0m"
  echo
}

##
# Run a command once
#   Will write a file to ensure this command is only run once. If that file
#   is deleted, the command will be run again.
#
# @param task_title    Title of the task to run
# @param working_dir   Working directory. Will cd there before running command
# @param command       Command to execute
##
function run_once() {
    task="$(echo "$1" | tr '[:upper:]' '[:lower:]' | tr ' ' '_')"
    display_task="$1"
    working_dir="$2"
    command="$3"
    run_file="/opt/scripts/.setup.${section}.${task}"
    echo
    echo -e "\e[36m>>\e[0m \e[94m${display_task}\e[0m"
    if [ ! -f "${run_file}" ]; then
        _run_command "${working_dir}" "${command}"
        touch "${run_file}"
    else
        echo -e "\e[33mSKIPPED\e[0m \e[2mDelete\e[0m ${run_file} \e[2mto run again\e[0m"
    fi
}

##
# Run a command always
#
# @param task_title    Title of the task to run
# @param working_dir   Working directory. Will cd there before running command
# @param command       Command to execute
##
function run_always() {
    task="$(echo "$1" | tr '[:upper:]' '[:lower:]' | tr ' ' '_')"
    display_task="$1"
    working_dir="$2"
    command="$3"
    echo
    echo -e "\e[36m>>\e[0m \e[94m${display_task}\e[0m"
    _run_command "${working_dir}" "${command}"
}


##
# Run no command at all
#
# @param task_title    Title of the task to run
##
function run_nothing() {
    task="$(echo "$1" | tr '[:upper:]' '[:lower:]' | tr ' ' '_')"
    display_task="$1"
    echo
    echo -e "\e[33m>>\e[0m \e[92m${display_task}\e[0m"
}


##
# Start a new section of build tasks
#
# @param section_title    Title of the section
##
function new_section() {
    section="$(echo "$1" | tr '[:upper:]' '[:lower:]' | tr ' ' '_')"
    display_section="$1"
}

##
# Execute the command
#
# @param working_dir   Working directory. Will cd there before running command
# @param command       Command to execute
##
function _run_command() {
    working_dir="$1"
    command="$2"
    cd "${working_dir}" || exit
    echo -e "\e[2m$ cd $(pwd)"
    echo -e "\e[2m$ ${command}"
    echo -e
    ${command}
    if [ "$?" != "0" ]; then
        (>&2 echo -e "       \e[1;31mFAILED\e[0m")
        exit 1
    fi
    cd - 1>/dev/null || exit
}

wait_for_port() {
    port=$1

    while ! nc -z localhost "$port" > /dev/null 2>&1; do
      sleep 1
    done
}

export -f print_section
export -f run_once
export -f run_always
export -f new_section
export -f _run_command
export -f wait_for_port
