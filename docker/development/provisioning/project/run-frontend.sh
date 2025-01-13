#!/bin/bash

nginx > /var/log/nginx.log 2>&1 &

echo "Nginx started on pid: $!"
