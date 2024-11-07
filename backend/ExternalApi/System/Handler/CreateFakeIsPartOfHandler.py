from flask import g

from DataDomain.Database.Model.IsPartOf import is_part_of
from DataDomain.Model.Response import Response
from Infrastructure.JTRFaker.Faker.ModelFaker import ModelFaker
from ExternalApi.CustomerFrontend.config.extensions import clearTournamentCache


class CreateFakeIsPartOfHandler:
    """Handler for generating fake is_part_of"""

    @staticmethod
    def handle() -> Response:
        """Generate fake is_part_of"""

        data = g.validatedData

        ModelFaker(is_part_of).create(amount=data.get('amount'))

        clearTournamentCache()

        return Response(status=200)
