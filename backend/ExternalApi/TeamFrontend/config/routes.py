from flask import Blueprint
from flask_jwt_extended import jwt_required

from DataDomain.Model.Response import Response
from ExternalApi.TeamFrontend.Handler.CreateTeamHandler import CreateTeamHandler
from ExternalApi.TeamFrontend.Handler.DeleteMembershipHandler import DeleteMembershipHandler
from ExternalApi.TeamFrontend.Handler.DeleteTeamHandler import DeleteTeamHandler
from ExternalApi.TeamFrontend.Handler.GetTeamDetailsHandler import GetTeamDetailsHandler
from ExternalApi.TeamFrontend.Handler.GetTeamOverviewHandler import GetTeamOverviewHandler
from ExternalApi.TeamFrontend.Handler.UpdateTeamHandler import UpdateTeamHandler
from ExternalApi.TeamFrontend.InputFilter.CreateTeamInputFilter import CreateTeamInputFilter
from ExternalApi.TeamFrontend.InputFilter.DeleteMembershipInputFilter import DeleteMembershipInputFilter
from ExternalApi.TeamFrontend.InputFilter.DeleteTeamInputFilter import DeleteTeamInputFilter
from ExternalApi.TeamFrontend.InputFilter.GetTeamDetailsInputFilter import GetTeamDetailsInputFilter
from ExternalApi.TeamFrontend.InputFilter.UpdateTeamInputFilter import UpdateTeamInputFilter
from ExternalApi.TeamFrontend.config.extensions import create_team_cache_key
from config.cache import cache
from config.limiter import limiter

team_frontend = Blueprint('team-frontend', __name__)


@team_frontend.route('/get-team-details/<teamId>',
                     methods=['GET'], endpoint='get-team-details')
@GetTeamDetailsInputFilter.validate()
@cache.cached(key_prefix=create_team_cache_key)
def getTeamDetails(teamId) -> Response:
    return GetTeamDetailsHandler.handle()


@team_frontend.route('/get-team-overview',
                     methods=['GET'], endpoint='get-team-overview')
@cache.cached(key_prefix='team-overview')
def getTeamOverview() -> Response:
    return GetTeamOverviewHandler.handle()


@team_frontend.route('/update-team',
                     methods=['PUT'], endpoint='update-team')
@jwt_required()
@UpdateTeamInputFilter.validate()
def updateTeam() -> Response:
    return UpdateTeamHandler.handle()


@team_frontend.route('/create-team',
                     methods=['POST'], endpoint='create-team')
@jwt_required()
@CreateTeamInputFilter.validate()
@limiter.limit("2 per minute")
def createTeam() -> Response:
    return CreateTeamHandler.handle()


@team_frontend.route('/delete-membership',
                     methods=['DELETE'],
                     endpoint='delete-membership')
@jwt_required()
@DeleteMembershipInputFilter.validate()
def deleteMembership() -> Response:
    return DeleteMembershipHandler.handle()


@team_frontend.route('/delete-team',
                     methods=['DELETE'],
                     endpoint='delete-team')
@jwt_required()
@DeleteTeamInputFilter.validate()
def deleteTeam() -> Response:
    return DeleteTeamHandler.handle()
