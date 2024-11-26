# Backend image

## Build

From root dir

```bash
docker build -t jtr-prod-backend -f docker/production/backend/backend.Dockerfile .
```

## Use

After starting the mysql server, you need to run the /opt/scripts/provision.sh file
to create the database and tables and to connect the backend with mysql.

After that you can easily run the image.
