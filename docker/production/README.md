# Production Dockerfiles

This directory contains Dockerfiles for building the production images for the jtr project.

The docker-compose.yaml file is used as a template for the production deployment of the jtr project.

## Building the production images

To build the production images, run the following command:

```bash
docker-compose -f docker-compose.yaml build
```
