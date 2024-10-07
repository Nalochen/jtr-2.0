from TaskHandler import TaskHandler


class DeleteItemHandler(TaskHandler):
    def handle(self, data):
        item_id = data['item_id']
        print(f"Deleting item: {item_id}")
