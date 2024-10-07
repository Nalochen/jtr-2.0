from database.Models.BaseModel import BaseModel
from database.db import db


class Items(BaseModel, db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(80))
