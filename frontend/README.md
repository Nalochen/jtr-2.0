# Frontend

## Serve

```sh
nx serve (desktop|mobile)
```

## Build

```sh
nx build (desktop|mobile) --watch
```

If you add:

```arduino
127.0.0.1    jugger-tourna.local
127.0.0.1    m.jugger-tourna.local
127.0.0.1    cdn.jugger-tourna.local
```

to your local

```arduino
Mac & Linux: /etc/hosts
Windows: C:\Windows\System32\drivers\etc\hosts
```

file you can access the frontend via
`jugger-tourna.local` and `m.jugger-tourna.local`.

Alternatively, if you don't want to use the hosts file, you can directly use the following URLs:
`localhost`, `m.localhost`, `cdn.localhost`.

---

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
