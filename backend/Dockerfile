FROM python:3.13-alpine

WORKDIR /app
COPY . /app

RUN pip install --no-cache-dir -r requirements.txt

RUN chmod +x entrypoint.sh

EXPOSE 80

CMD ["./entrypoint.sh"]
