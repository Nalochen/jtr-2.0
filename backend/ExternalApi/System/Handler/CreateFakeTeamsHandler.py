from flask import g

from DataDomain.Database.Model.Teams import Teams
from DataDomain.Model.Response import Response
from Infrastructure.JTRFaker.Faker.ModelFaker import ModelFaker


class CreateFakeTeamsHandler:
    """Handler for generating fake teams"""

    @staticmethod
    def handle() -> Response:
        """Generate fake teams"""

        data = g.validatedData

        ModelFaker(Teams).create(amount=data['amount'])

        return Response(status=200)
