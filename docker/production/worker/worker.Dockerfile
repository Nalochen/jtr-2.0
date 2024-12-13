FROM python:3.13-alpine

WORKDIR /worker

COPY ../../../backend/worker .

RUN pip install --no-cache-dir -r requirements.txt

ENTRYPOINT celery -A tasks worker --loglevel=info
