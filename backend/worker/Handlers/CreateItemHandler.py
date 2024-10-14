from TaskHandler import TaskHandler

from DataDomain.Database.Model.Items import Items
from DataDomain.Database.db import db


class CreateItemHandler(TaskHandler):
    def handle(self, data):
        itemName = data['name']

        print(f"Start creating item: {itemName}")

        item = Items()
        item.name = itemName

        db.session.add(item)
        db.session.commit()

        print(f"Finished creating item: {itemName}")
