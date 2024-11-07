import json

from flask import g

from DataDomain.Database.Repository.TeamRepository import TeamRepository
from DataDomain.Model.Response import Response
from ExternalApi.CustomerFrontend.Service.CheckForIsPartOfRoleService import CheckForIsPartOfRoleService


class UpdateTeamHandler:
    """Handler for updating a team"""

    def __init__(self):
        """Constructor for UpdateTeamHandler"""

        self.checkForIsPartOfRoleService = CheckForIsPartOfRoleService()

    def handle(self) -> Response:
        """Update team"""

        data = g.validatedData

        teamId = data.get('teamId')

        team = TeamRepository().get(teamId)

        if team is None:
            return Response(status=404)

        if self.checkForIsPartOfRoleService.isCurrentUserAdminOfTeam(
                team.id) is None:
            return Response(status=403)

        name = data.get('name')
        if name is not None:
            team.name = name

        logo = data.get('logo')
        if logo is not None:
            team.logo = logo

        founded = data.get('founded')
        if founded is not None:
            team.founded = founded

        city = data.get('city')
        if city is not None:
            team.city = city

        isMixTeam = data.get('isMixTeam')
        if isMixTeam is not None:
            team.isMixTeam = isMixTeam

        trainingTime = data.get('trainingTime')
        if trainingTime is not None:
            team.trainingTime = trainingTime

        aboutUs = data.get('aboutUs')
        if aboutUs is not None:
            team.aboutUs = aboutUs

        contacts = data.get('contacts')
        if contacts is not None:
            team.contacts = json.dumps(contacts)

        try:
            TeamRepository().update()

        except Exception:
            return Response(status=500)

        return Response(
            status=200
        )
