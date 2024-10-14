from flask import g, Response

from DataDomain.Database.Model.Users import Users
from Infrastructure.JTRFaker.Faker.ModelFaker import ModelFaker


class GenerateFakeUserHandler:
    """Handler for generating fake users."""

    def handle(self):
        data = g.validatedData

        ModelFaker(Users).create(amount=data['amount'])

        return Response(status=200)
