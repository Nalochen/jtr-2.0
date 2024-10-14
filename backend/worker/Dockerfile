FROM python:3.13-alpine

WORKDIR /worker
COPY . /worker

RUN pip install -r requirements.txt

ENTRYPOINT celery -A tasks worker --loglevel=info
