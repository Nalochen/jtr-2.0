from flask import g

from DataDomain.Database.Model.RelationTournamentTeam import participates_in
from DataDomain.Model.Response import Response
from Infrastructure.JTRFaker.Faker.ModelFaker import ModelFaker
from ExternalApi.CustomerFrontend.config.extensions import clearTournamentCache


class CreateFakeParticipatesInHandler:
    """Handler for generating fake participates_in."""

    def handle(self) -> Response:
        """Generate fake participates_in."""

        data = g.validatedData

        ModelFaker(participates_in).create(amount=data['amount'])

        clearTournamentCache()

        return Response(status=200)
