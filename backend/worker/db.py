import os

import pymysql
from sqlalchemy import create_engine
from sqlalchemy.orm import scoped_session, sessionmaker

pymysql.install_as_MySQLdb()

engine = create_engine(
    os.getenv('DATABASE_URL'),
    echo=True)

db = scoped_session(sessionmaker(bind=engine, expire_on_commit=True))
