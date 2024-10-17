FROM python:3.13-alpine

WORKDIR /app

COPY requirements.txt /app

RUN pip install --no-cache-dir -r requirements.txt

COPY . /app

RUN chmod +x entrypoint.sh

ENV PYTHONPATH=/app

EXPOSE 80

CMD ["./entrypoint.sh"]
