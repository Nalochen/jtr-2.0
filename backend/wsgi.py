from config.app import app
from DataDomain.Database import initDatabase

app.debug = False

initDatabase(app)
