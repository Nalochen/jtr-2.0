from abc import abstractmethod


class TaskHandler:
    """Class to handle tasks send to rabbitmq"""

    @abstractmethod
    def handle(self, data):
        """Function to handle the task"""

        raise NotImplementedError("Subclasses must implement this method")
