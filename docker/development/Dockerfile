FROM ubuntu:latest

WORKDIR /home

RUN apt-get update && \
    apt-get install -y --no-install-recommends \
        curl \
        default-mysql-server \
        erlang \
        gnupg \
        iputils-ping \
        netcat-openbsd \
        npm \
        python3 \
        python3-pip \
        python3.12-venv \
        rabbitmq-server \
        redis-server \
        sudo \
        vim && \
    rm -rf /var/lib/apt/lists/*

RUN rabbitmq-plugins enable rabbitmq_management

COPY docker/development/provisioning /opt/scripts/provisioning
COPY docker/development/scripts /usr/local/bin

RUN find /opt/scripts -type f -name "*.sh" -exec chmod +x {} \;
RUN find /usr/local/bin -type f -name "*" -exec chmod +x {} \;

EXPOSE 3306 6000 15672

ENTRYPOINT ["/opt/scripts/provisioning/provision.sh"]
