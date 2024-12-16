FROM ubuntu:latest

WORKDIR /home

RUN apt-get update && \
    apt-get install -y --no-install-recommends \
        curl \
        default-mysql-server \
        erlang \
        gnupg \
        netcat-openbsd \
        iputils-ping \
        python3 \
        python3-pip \
        python3.12-venv \
        rabbitmq-server \
        redis-server \
        sudo \
        npm \
        git && \
    rm -rf /var/lib/apt/lists/*

RUN rabbitmq-plugins enable rabbitmq_management

COPY docker/development/provisioning /opt/scripts/provisioning
COPY docker/development/scripts /usr/local/bin

RUN find /opt/scripts -type f -name "*.sh" -exec chmod +x {} \;
RUN find /usr/local/bin -type f -name "*" -exec chmod +x {} \;

EXPOSE 3307 5001 5672 15672

ENTRYPOINT ["/opt/scripts/provisioning/entrypoint.sh"]
