from flask import g

from DataDomain.Database.Model.RelationUserTeam import is_part_of
from DataDomain.Model.Response import Response
from Infrastructure.JTRFaker.Faker.ModelFaker import ModelFaker


class CreateFakeIsPartOfHandler:
    """Handler for generating fake is_part_of."""

    def handle(self) -> Response:
        """Generate fake is_part_of."""

        data = g.validatedData

        ModelFaker(is_part_of).create(amount=data['amount'])

        return Response(status=200)
