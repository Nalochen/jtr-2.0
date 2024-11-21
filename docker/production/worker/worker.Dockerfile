FROM python:3.13-alpine

WORKDIR /worker

COPY ../../../backend/worker/requirements.txt .

RUN pip install -r requirements.txt

COPY ../../../backend/worker .

ENTRYPOINT celery -A tasks worker --loglevel=info
