# Backend

## Docker

```sh
docker exec -it jtr /bin/sh
```

## Testing
    
```sh
docker exec jtr be-test
```


## Code Style

```sh
docker exec jtr be-format
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
