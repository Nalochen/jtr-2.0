from abc import abstractmethod


class TaskHandler:
    @abstractmethod
    def handle(self, data):
        raise NotImplementedError("Subclasses must implement this method")
