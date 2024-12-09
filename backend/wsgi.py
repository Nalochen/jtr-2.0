from config.app import app
from DataDomain.Database.db import initDatabase

app.debug = False

initDatabase(app)
