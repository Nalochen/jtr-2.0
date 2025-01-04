#!/bin/bash

cd /home/frontend

npm install > /dev/null 2>&1 || { echo "npm install failed"; exit 1; }
