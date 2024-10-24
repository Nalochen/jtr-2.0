#!/bin/sh

echo "Waiting for MySQL to start"
while ! nc -z mysql 3306; do
  sleep 1
done
echo "MySQL started"

# Erstelle die Database und die Tabellen
python - <<END
from config.app import createApp
from DataDomain.Database.db import initDatabase

app = createApp()

initDatabase(app)

END
