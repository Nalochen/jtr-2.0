# CDN

DNS-Validierung verwenden (empfohlen für Subdomains)
Mit der DNS-Validierung kannst du ein Zertifikat ausstellen, ohne die /.well-known/acme-challenge-Route zu nutzen. Dazu musst du lediglich einen DNS-Eintrag setzen.

Schritte:

Erstelle die Zertifikatsanforderung:

```bash
certbot certonly --manual --preferred-challenges dns -d cdn.jugger-tourna.de
```
Setze den DNS-TXT-Eintrag: Certbot gibt dir eine Anweisung, einen TXT-Eintrag im DNS für die Subdomain cdn.jugger-tourna.de zu erstellen. Der Eintrag sieht ungefähr so aus:

```arduino
_acme-challenge.cdn.jugger-tourna.de. IN TXT "xyz123abc"
```
Warte auf DNS-Propagation: 

Je nach Provider kann es einige Minuten dauern, bis der Eintrag global sichtbar ist.

Bestätige die Validierung: 

Nach der Erstellung des Eintrags und einer kurzen Wartezeit kehrt Certbot zurück und überprüft den TXT-Eintrag. Ist die Validierung erfolgreich, wird das Zertifikat erstellt.
