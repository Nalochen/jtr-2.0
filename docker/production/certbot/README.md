# Certbot

The container to create and maintain SSL certificates for the production environment.

## Usage

### Create a certificate

To create a certificate, run the following command inside the container:

```bash
certbot certonly --webroot \
  -w /usr/share/nginx/html/desktop -d ${CERTBOT_DOMAIN} \
  -w /usr/share/nginx/html/mobile -d m.${CERTBOT_DOMAIN} \
  -m ${CERTBOT_EMAIL}
```

### Renew a certificate

The certificates are renewed automatically by the cron job. If you want to renew a certificate manually, run the following command:

```bash
docker exec -it certbot certbot renew
```
