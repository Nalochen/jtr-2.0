FROM python:3.9-alpine

WORKDIR /worker
COPY . /worker

RUN python -m venv venv && \
    . venv/bin/activate

RUN pip install -r requirements.txt

ENTRYPOINT celery -A tasks worker --loglevel=info
