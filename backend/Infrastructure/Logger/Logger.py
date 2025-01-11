import logging
import os

from DataDomain.Database import db
from DataDomain.Model import LogHandler

logger = logging.getLogger('jtr_mysql_logger')

lowestLogLevel = logging.DEBUG if os.getenv(
    'FLASK_ENV') == 'development' else logging.INFO
logger.setLevel(lowestLogLevel)


dbHandler = LogHandler(db.session)
formatter = logging.Formatter('%(message)s')
dbHandler.setFormatter(formatter)

logger.addHandler(dbHandler)
