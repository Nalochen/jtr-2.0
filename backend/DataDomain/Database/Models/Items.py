from .BaseModel import BaseModel
from ..db import db


class Items(BaseModel, db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(80))
