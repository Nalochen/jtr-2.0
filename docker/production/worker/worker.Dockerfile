FROM python:3.13-alpine

WORKDIR /app

COPY ../../../backend .

RUN cd worker && pip install --no-cache-dir -r requirements.txt

ENV PYTHONPATH=/backend/worker

ENTRYPOINT ["celery", "-A", "worker.tasks", "worker", "--loglevel=info", "-E"]
