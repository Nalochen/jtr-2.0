FROM python:3.13-alpine

WORKDIR /app

COPY ../../../backend .

RUN pip install --no-cache-dir -r worker/requirements.txt

ENV PYTHONPATH=/app

ENTRYPOINT ["celery", "-A", "worker.tasks", "worker", "--loglevel=info"]
