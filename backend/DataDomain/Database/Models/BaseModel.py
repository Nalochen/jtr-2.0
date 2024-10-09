
class BaseModel():
    """
    Base model class for all models
    """

    def serialize(self):
        return {c.name: getattr(self, c.name) for c in self.__table__.columns}
