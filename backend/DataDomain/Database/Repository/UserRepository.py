import uuid
from typing import List

from sqlalchemy import and_

from DataDomain.Database.db import db
from DataDomain.Database.Model.Users import Users
from Infrastructure.Logger.Logger import logger


class UserRepository:
    """Repository for user related queries"""

    @staticmethod
    def get(userId: int) -> Users:
        return Users.query.filter_by(
            id=userId,
            is_deleted=False
        ).first()

    @staticmethod
    def getByEmail(email: str) -> Users:
        return Users.query.filter_by(
            email=email,
            is_deleted=False
        ).first()

    @staticmethod
    def getUserOverview() -> List[dict]:
        """Get user overview"""

        users = Users.query.filter(Users.is_deleted is False).all()

        return [{
            'id': user.id,
            'username': user.username,
            'name': user.name if user.name_visibility else None,
            'birthdate': user.birthdate if user.birthdate_visibility else None,
            'picture': user.picture,
            'pronouns': user.pronouns,
            'city': user.city if user.city_visibility else None,
            'email': user.email
        } for user in users]

    @staticmethod
    def create(user: Users) -> int:
        try:
            existingUsername = Users.query.filter(
                Users.username == user.username
            ).count()

            if existingUsername:
                raise Exception('Username already in use.')

            existingEmail = Users.query.filter(
                Users.email == user.email
            ).count()

            if existingEmail:
                raise Exception('Email already in use.')

            db.session.add(user)
            db.session.commit()

            logger.info(
                f'UserRepository | create | User created with id {
                    user.id}')

            return user.id

        except Exception as e:
            db.session.rollback()
            logger.error(f'UserRepository | create | {e}')
            raise e

    @staticmethod
    def createPasswordResetHash(userId: int) -> str:
        try:
            randomHash = uuid.uuid4().hex

            Users.query.filter(
                Users.id == userId,
            ).update(
                values={
                    'password_reset_hash': randomHash,
                }
            )
            db.session.commit()

            logger.info(f'UserRepository | createPasswordResetHash | '
                        f'Password reset hash created for User {userId} updated')

            return randomHash

        except Exception as e:
            db.session.rollback()
            logger.error(f'UserRepository | update | {e}')
            raise e

    @staticmethod
    def update(user: Users) -> None:
        try:
            db.session.add(user)
            db.session.commit()

            logger.info(
                f'UserRepository | update | User with id {
                    user.id} updated')

        except Exception as e:
            db.session.rollback()
            logger.error(f'UserRepository | update | {e}')
            raise e

    @staticmethod
    def delete(userId: int) -> None:
        try:
            user = UserRepository.get(userId)

            user.is_deleted = True

            db.session.commit()

            logger.info(
                f'UserRepository | delete | User with id {userId} deleted')

        except Exception as e:
            db.session.rollback()
            logger.error(f'UserRepository | delete | {e}')
            raise e

    @staticmethod
    def getUserByUsername(username: str) -> Users | None:
        """Get a user by username"""

        return Users.query.filter(Users.username == username).first()

    @staticmethod
    def getUserByEmail(email: str) -> Users | None:
        """Get a user by email"""

        return Users.query.filter(Users.email == email).first()

    @staticmethod
    def getUserByUsernameOrEmail(
            username: str | None,
            email: str | None) -> Users | None:
        """Get a user by username or email"""

        filters = []

        if username is not None:
            filters.append(Users.username == username)
        if email is not None:
            filters.append(Users.email == email)

        return Users.query.filter(
            and_(*filters, Users.is_deleted is False)).first()

    @staticmethod
    def checkPasswordResetHash(hash: str) -> Users | None:
        """Check if a password reset hash is valid"""

        return Users.query.filter(
            Users.password_reset_hash == hash,
            Users.is_deleted is False
        ).first()

    @staticmethod
    def updatePasswordAndClearPasswordResetHash(
            userId: int, passwordHash: str) -> None:
        """Clear the password reset hash for a user"""

        try:
            Users.query.filter(
                Users.id == userId
            ).update(
                values={
                    'password_hash': passwordHash,
                    'password_reset_hash': None
                }
            )
            db.session.commit()

            logger.info(
                f'UserRepository | clearPasswordResetHash | '
                f'Password reset hash cleared for User {userId}')

        except Exception as e:
            db.session.rollback()
            logger.error(f'UserRepository | clearPasswordResetHash | {e}')
            raise e
