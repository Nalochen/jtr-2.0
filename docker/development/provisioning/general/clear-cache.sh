#!/usr/bin/env bash
set -e # Exit immediately if a command exits with a non-zero status.
set -u # Exit immediately if a variable is not defined.

# Services
redis-cli flushall

# Backend
sudo rm -rf /home/backend/venv
sudo rm -rf /home/backend/worker/venv

# Frontend
#sudo rm -rf /home/frontend/.angular
#sudo rm -rf /home/frontend/.nx
#sudo rm -rf /home/frontend/dist
#sudo rm -rf /home/frontend/node_modules
#sudo rm -rf /home/frontend/apps/desktop/tmp
#sudo rm -rf /home/frontend/apps/mobile/tmp
