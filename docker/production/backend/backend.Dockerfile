FROM python:3.13-alpine

WORKDIR /app

COPY ../../../backend .

RUN pip install --no-cache-dir -r requirements.txt

RUN mkdir /opt/scripts

COPY docker/production/backend/entrypoint.sh /opt/scripts/entrypoint.sh

RUN chmod +x /opt/scripts/entrypoint.sh

ENV PYTHONPATH=/app

EXPOSE 6000

CMD ["/opt/scripts/entrypoint.sh"]
