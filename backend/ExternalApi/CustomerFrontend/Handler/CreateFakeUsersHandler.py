from flask import g

from DataDomain.Database.Model.Users import Users
from DataDomain.Model.Response import Response
from Infrastructure.JTRFaker.Faker.ModelFaker import ModelFaker


class CreateFakeUsersHandler:
    """Handler for generating fake users."""

    @staticmethod
    def handle() -> Response:
        """Generate fake users."""

        data = g.validatedData

        ModelFaker(Users).create(amount=data['amount'])

        return Response(status=200)
