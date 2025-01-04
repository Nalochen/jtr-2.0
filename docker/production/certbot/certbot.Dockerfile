FROM certbot/certbot:latest

WORKDIR /etc/letsencrypt

RUN apk add certbot-nginx

COPY docker/production/certbot/renew-certificates.sh /usr/local/bin/renew-certificates.sh
RUN chmod +x /usr/local/bin/renew-certificates.sh

RUN echo "0 0,12 * * * /usr/local/bin/renew-certificates.sh >> /var/log/letsencrypt/renewal.log 2>&1" > /etc/crontabs/root

RUN mkdir -p /var/log/letsencrypt

RUN crond

RUN touch /var/log/letsencrypt/renewal.log

ENTRYPOINT ["tail", "-f", "/var/log/letsencrypt/renewal.log"]
