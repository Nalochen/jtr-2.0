# Backend

## Docker

```sh
docker exec -it backend /bin/sh
```

## Testing
    
```sh
docker exec backend pytest
```


## Code Style

```sh
find ./backend -name '*.py' -not -path './backend/venv/*' -not -path './backend/worker/venv/*' -exec autopep8 --in-place --aggressive --aggressive {} \;
```


## SQL

```sh
mysql -u root -p
```


## Deps

```sh
pipreqs . --force
```


## GitHub Actions

```sh
act --container-architecture linux/amd64
```
