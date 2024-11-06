from flask_jwt_extended import get_jwt_identity

from DataDomain.Database.Model.Users import Users


def getJwtIdentity() -> Users:
    """Get the user from the jwt token"""

    username = get_jwt_identity()

    user = Users.query.filter_by(username=username['username']).first()

    return user.serialize()