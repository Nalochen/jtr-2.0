# JTR

## Links

> ### [Features](https://docs.google.com/spreadsheets/d/10Gu1W1oneQ2A-ih0kCsrcmxa8moMoT5rzW0wpC1XRe8)
> ### [Discord](https://discord.gg/5KMNsKepyQ)
> ### [Figma Board](https://www.figma.com/board/NvKA4mQB6gzAeDLYAsA7Ro/JTR-Planning)
> ### [Figma Design](https://www.figma.com/design/022MCGgaBDg0bsG4OOfdj0/Jugger-Turniere-Ranglisten)

## Backend
>
> ### Start Docker
> `docker compose up -d`
>
> ### Code Style
> `docker exec backend find . -name '*.py' -exec autopep8 --in-place --aggressive --aggressive {} \;`

## Frontend
>
> ### Desktop
> `nx serve desktop`
>
> ### Mobile
> `nx serve mobile`
>
> ### Code Style
> `nx run-many --target=lint --all --fix`
>
> ### Tests
> `nx run-many --target=test --all`
