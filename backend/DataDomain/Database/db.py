import os

from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()


def executeSqlFile(filename: str) -> None:
    """Executes the SQL commands in the given file"""

    with open(filename, 'r') as sql_file:
        sqlCommands = sql_file.read()

    connection = db.engine.raw_connection()
    cursor = connection.cursor()

    try:
        cursor.execute(sqlCommands)
        connection.commit()

    except Exception as e:
        connection.rollback()
        print(f"Fehler beim Ausführen der SQL-Datei: {e}")

    finally:
        cursor.close()
        connection.close()


def executeSqlCommandsToInitDatabase() -> None:
    """Executes the SQL commands in the init-database folder"""

    folderPath = '/app/DataDomain/Database/data/init-database'

    for filename in os.listdir(folderPath):
        if filename.endswith('.sql'):
            fullPath = os.path.join(folderPath, filename)

            executeSqlFile(fullPath)


def initDatabase(app) -> None:
    """Initializes the database with the given SQL commands"""

    db.init_app(app)

    with app.app_context():
        db.create_all()

        executeSqlCommandsToInitDatabase()
