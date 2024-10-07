class BaseModel:
    def serialize(self):
        return {c.name: getattr(self, c.name) for c in self.__table__.columns}
