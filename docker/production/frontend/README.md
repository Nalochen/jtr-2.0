# Frontend

## Build

From root dir

```bash
docker build -t jtr-prod-frontend -f docker/production/frontend/frontend.Dockerfile .
```

## Use

docker run -d -p 80:80 jtr-prod-frontend