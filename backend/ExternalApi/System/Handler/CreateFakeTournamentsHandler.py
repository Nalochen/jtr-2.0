from flask import g

from DataDomain.Database.Model.Tournaments import Tournaments
from DataDomain.Model.Response import Response
from Infrastructure.JTRFaker.Faker.ModelFaker import ModelFaker
from ExternalApi.CustomerFrontend.config.extensions import clearTournamentCache


class CreateFakeTournamentsHandler:
    """Handler for generating fake tournaments"""

    @staticmethod
    def handle() -> Response:
        """Generate fake tournaments"""

        data = g.validatedData

        ModelFaker(Tournaments).create(amount=data.get('amount'))

        clearTournamentCache()

        return Response(status=200)
