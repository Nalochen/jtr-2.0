# JTR

## Links

> ### [Features](https://docs.google.com/spreadsheets/d/10Gu1W1oneQ2A-ih0kCsrcmxa8moMoT5rzW0wpC1XRe8)
> ### [Discord](https://discord.gg/5KMNsKepyQ)
> ### [Figma Board](https://www.figma.com/board/NvKA4mQB6gzAeDLYAsA7Ro/JTR-Planning)
> ### [Figma Design](https://www.figma.com/design/022MCGgaBDg0bsG4OOfdj0/Jugger-Turniere-Ranglisten)


## Start Docker

```sh
docker compose up -d
```

After starting the container you have to let the container start.
To do this, view the logs and wait for `Provisioning done.` to appear. 
The container is then ready to use.

### !! Before the container is completely started, nothing is going to work correctly!!

# Test frontend

### Serve Project (Inside frontend folder)

```sh
nx serve (desktop|mobile)
```

### Visit Site

```sh
http://localhost:4200
```

To switch from desktop to mobile, change the `nx serve` command to `nx serve mobile` and vice versa.


# Test backend

For testing the routes of the backend, you can use the `.http` files in the folders:

- `backend/ExternalApi/System/specs`
- `backend/ExternalApi/TeamFrontend/specs`
- `backend/ExternalApi/TournamentFrontend/specs`
- `backend/ExternalApi/UserFrontend/specs`

Some routes require an active & valid jwt session, execute the authentication route before:

`backend/ExternalApi/specs/requests/000-Authentication.http`
