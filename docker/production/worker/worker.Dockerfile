FROM python:3.13-alpine

WORKDIR /app

COPY ../../../backend .

RUN cd worker && pip install --no-cache-dir -r requirements.txt

WORKDIR /app/worker

ENV PYTHONPATH=/app

ENTRYPOINT ["celery", "-A", "tasks", "worker", "--loglevel=info"]
