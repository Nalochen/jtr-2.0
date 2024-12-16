# Frontend

## Serve

```sh
docker exec jtr (fe-serve-mobile|fe-serve-desktop)
```

## Tests

```sh
docker exec jtr fe-test
```

## Code Style

```sh
docker exec jtr fe-format
```

```sh
docker exec jtr fe-lint
```

## Run e2e tests

```sh
npx nx e2e (desktop|mobile)
```
