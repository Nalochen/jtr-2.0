import json
from datetime import datetime

from flask import g

from DataDomain.Database.Repository.TeamRepository import TeamRepository
from DataDomain.Model.Response import Response
from ExternalApi.UserFrontend.Service.CheckForMembershipRoleService import CheckForMembershipRoleService
from ExternalApi.TeamFrontend.config.extensions import clearTeamCache


class UpdateTeamHandler:
    """Handler for updating a team"""

    @staticmethod
    def handle() -> Response:
        """Update team"""

        data = g.validatedData

        teamId = data.get('teamId')

        team = TeamRepository.get(teamId)

        if team is None:
            return Response(status=404)

        if CheckForMembershipRoleService.isCurrentUserAdminOfTeam(
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
            team.founded = datetime.fromisoformat(founded)

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
            TeamRepository.update()

            clearTeamCache(teamId)

        except Exception:
            return Response(status=500)

        return Response(
            status=200
        )
