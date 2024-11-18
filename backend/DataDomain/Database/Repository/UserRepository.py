import logging
from sqlalchemy import and_

from DataDomain.Database.Model.Users import Users
from DataDomain.Database.db import db


class UserRepository:
    """Repository for user related queries"""

    @staticmethod
    def get(userId: int) -> Users:
        return Users.query.get(userId)

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

            return user.id

        except Exception as e:
            db.session.rollback()
            logging.error(f'UserRepository | create | {e}')
            raise e

    @staticmethod
    def update(user: Users) -> None:
        try:
            db.session.add(user)
            db.session.commit()

        except Exception as e:
            db.session.rollback()
            logging.error(f'UserRepository | update | {e}')
            raise e

    @staticmethod
    def delete(userId: int) -> None:
        try:
            user = UserRepository.get(userId)

            db.session.delete(user)
            db.session.commit()

        except Exception as e:
            db.session.rollback()
            logging.error(f'UserRepository | delete | {e}')
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

        return Users.query.filter(and_(*filters)).first()
