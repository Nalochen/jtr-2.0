# Certbot

The container to create and maintain SSL certificates for the production environment.

## Usage

### Create a certificate

To create a certificate, run the following command:

```bash
docker exec -it certbot certbot certonly --webroot -w /usr/share/nginx/html -d ${CERTBOT_DOMAIN} -m ${CERTBOT_EMAIL}
```

### Renew a certificate

The certificates are renewed automatically by the cron job. If you want to renew a certificate manually, run the following command:

```bash
docker exec -it certbot certbot renew
```