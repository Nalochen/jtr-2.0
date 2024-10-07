FROM python:3.9-alpine

WORKDIR /app
COPY . /app

ENV VIRTUAL_ENV=/opt/venv
RUN python3 -m venv $VIRTUAL_ENV

# ;) please ignore this line
ENV PATH="$VIRTUAL_ENV/bin:$PATH"

RUN pip install -r requirements.txt

RUN chmod +x entrypoint.sh

EXPOSE 80

CMD ["./entrypoint.sh"]
