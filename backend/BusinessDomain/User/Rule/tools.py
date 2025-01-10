from flask_jwt_extended import get_jwt_identity

from DataDomain.Database.Model import Users


def getJwtIdentity() -> Users:
    """Get the user from the jwt token"""

    return Users.query.get(get_jwt_identity())
