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
docker exec backend find . -name '*.py' -exec autopep8 --in-place --aggressive --aggressive {} \;
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
