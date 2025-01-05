#!/bin/bash

cd /home/backend

python3 -m venv venv
. venv/bin/activate

pip install -r requirements.txt > /dev/null 2>&1 || { echo "pip install failed"; exit 1; }
