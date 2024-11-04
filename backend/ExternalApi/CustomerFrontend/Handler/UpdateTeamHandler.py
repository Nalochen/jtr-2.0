import json

from flask import request

from DataDomain.Database.Repository.TeamRepository import TeamRepository
from DataDomain.Model.Response import Response


class UpdateTeamHandler:
    """Handler for updating a team."""

    @staticmethod
    def handle() -> Response:
        """Update team."""

        teamId = request.json.get('teamId')

        # TODO: Authentication and Authorisation
        team = TeamRepository().get(teamId)

        if team is None:
            return Response(
                status=404,
                message='Not Team not found.'
            )

        if 'name' in request.json:
            team.name = request.json.get('name')

        if 'logo' in request.json:
            team.logo = request.json.get('logo')

        if 'city' in request.json:
            team.city = request.json.get('city')

        if 'isMixTeam' in request.json:
            team.isMixTeam = request.json.get('isMixTeam')

        if 'trainingTime' in request.json:
            team.trainingTime = request.json.get('trainingTime')

        if 'aboutUs' in request.json:
            team.aboutUs = request.json.get('aboutUs')

        if 'contacts' in request.json:
            team.contacts = json.dumps(request.json.get('contacts'))

        TeamRepository().update(team)

        return Response(
            status=200,
        )
