import json
from datetime import datetime

from flask import g

from DataDomain.Database.Model.IsPartOf import is_part_of
from DataDomain.Database.Model.Teams import Teams
from DataDomain.Database.Repository.IsPartOfRepository import IsPartOfRepository
from DataDomain.Database.Repository.TeamRepository import TeamRepository
from DataDomain.Database.tools import getJwtIdentity
from DataDomain.Model.Response import Response


class CreateTeamHandler:
    """Handler for creating a team"""

    @staticmethod
    def handle() -> Response:
        """Create team"""

        data = g.validatedData

        team = Teams()

        team.name = data.get('name')
        team.city = data.get('city')
        team.is_mix_team = data.get('isMixTeam')
        team.training_time = data.get('trainingTime')
        team.about_us = data.get('aboutUs')

        contacts = data.get('contacts')
        if contacts is not None:
            team.contacts = json.dumps(contacts)

        if data.get('trainingTime') is not None:
            team.training_time_updated_at = datetime.now()

        try:
            teamId = TeamRepository.create(team)

        except Exception:
            return Response(status=500)

        user = getJwtIdentity()

        IsPartOfRepository.create(
            userId=user.id,
            teamId=teamId,
            userRole='admin'
        )

        return Response(
            status=200
        )
