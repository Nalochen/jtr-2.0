#!/bin/bash
set -e # Exit immediately if a command exits with a non-zero status.
set -u # Exit immediately if a variable is not defined.

# Services
redis-cli flushall
