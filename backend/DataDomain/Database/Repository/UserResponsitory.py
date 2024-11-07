import logging

from DataDomain.Database.Model.Users import Users
from DataDomain.Database.db import db


class UserRepository:
    """Repository for user related queries"""

    @staticmethod
    def get(userId: int) -> Users:
        return Users.query.get(userId)

    @staticmethod
    def createUser(user: Users) -> None:
        try:
            existingUsername = Users.query.select(
                Users.username == user.username
            ).count()

            if existingUsername:
                raise Exception('Username already in use.')

            existingEmail = Users.query.select(
                Users.email == user.email
            ).count()

            if existingEmail:
                raise Exception('Email already in use.')

            db.session.add(user)
            db.session.commit()

        except Exception as e:
            db.session.rollback()
            logging.error(f"Error while creating user: {e}")
            raise e

    @staticmethod
    def updateUser(user: Users) -> None:
        try:
            db.session.add(user)
            db.session.commit()

        except Exception as e:
            db.session.rollback()
            logging.error(f"Error while updating user: {e}")
            raise e

    @staticmethod
    def deleteUser(userId: int) -> None:
        try:
            user = UserRepository.get(userId)

            db.session.delete(user)
            db.session.commit()

        except Exception as e:
            db.session.rollback()
            logging.error(f"Error while deleting user: {e}")
            raise e
