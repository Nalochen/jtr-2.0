from flask_jwt_extended import get_jwt_identity

from DataDomain.Database.Model import Users


def getJwtIdentity() -> Users | None:
    """Get the user from the jwt token"""

    identity = get_jwt_identity()

    if identity is None:
        return None

    return Users.query.get(identity)
