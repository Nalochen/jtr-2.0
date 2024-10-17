from flask import g

from DataDomain.Database.Model.RelationUserTeam import is_part_of
from DataDomain.Model.Response import Response
from Infrastructure.JTRFaker.Faker.ModelFaker import ModelFaker
from ExternalApi.CustomerFrontend.config.extensions import clearTournamentCache


class CreateFakeIsPartOfHandler:
    """Handler for generating fake is_part_of."""

    def handle(self) -> Response:
        """Generate fake is_part_of."""

        data = g.validatedData

        ModelFaker(is_part_of).create(amount=data['amount'])

        clearTournamentCache()

        return Response(status=200)
