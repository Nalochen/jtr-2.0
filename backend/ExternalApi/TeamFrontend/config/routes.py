from flask import Blueprint
from flask_jwt_extended import jwt_required

from config.cache import cache
from config.limiter import limiter
from DataDomain.Model.Response import Response
from ExternalApi.TeamFrontend.config.extensions import create_team_cache_key
from ExternalApi.TeamFrontend.Handler.AcceptTeamInvitationHandler import (
    AcceptTeamInvitationHandler,
)
from ExternalApi.TeamFrontend.Handler.CreateTeamHandler import CreateTeamHandler
from ExternalApi.TeamFrontend.Handler.DeleteMembershipHandler import (
    DeleteMembershipHandler,
)
from ExternalApi.TeamFrontend.Handler.DeleteTeamHandler import DeleteTeamHandler
from ExternalApi.TeamFrontend.Handler.GetTeamDetailsHandler import GetTeamDetailsHandler
from ExternalApi.TeamFrontend.Handler.GetTeamOverviewHandler import GetTeamOverviewHandler
from ExternalApi.TeamFrontend.Handler.SendTeamInvitationHandler import (
    SendTeamInvitationHandler,
)
from ExternalApi.TeamFrontend.Handler.UpdateMembershipHandler import (
    UpdateMembershipHandler,
)
from ExternalApi.TeamFrontend.Handler.UpdateTeamHandler import UpdateTeamHandler
from ExternalApi.TeamFrontend.Handler.UpdateTeamPictureHandler import (
    UpdateTeamPictureHandler,
)
from ExternalApi.TeamFrontend.InputFilter.AcceptTeamInvitationInputFilter import (
    AcceptTeamInvitationInputFilter,
)
from ExternalApi.TeamFrontend.InputFilter.CreateTeamInputFilter import (
    CreateTeamInputFilter,
)
from ExternalApi.TeamFrontend.InputFilter.DeleteMembershipInputFilter import (
    DeleteMembershipInputFilter,
)
from ExternalApi.TeamFrontend.InputFilter.DeleteTeamInputFilter import (
    DeleteTeamInputFilter,
)
from ExternalApi.TeamFrontend.InputFilter.GetTeamDetailsInputFilter import (
    GetTeamDetailsInputFilter,
)
from ExternalApi.TeamFrontend.InputFilter.SendTeamInvitationInputFilter import (
    SendTeamInvitationInputFilter,
)
from ExternalApi.TeamFrontend.InputFilter.UpdateMembershipInputFilter import (
    UpdateMembershipInputFilter,
)
from ExternalApi.TeamFrontend.InputFilter.UpdateTeamInputFilter import (
    UpdateTeamInputFilter,
)
from ExternalApi.TeamFrontend.InputFilter.UpdateTeamPictureInputFilter import (
    UpdateTeamPictureInputFilter,
)

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


@team_frontend.route('/update-membership',
                     methods=['PUT'], endpoint='update-membership')
@jwt_required()
@UpdateMembershipInputFilter.validate()
def updateMembership() -> Response:
    return UpdateMembershipHandler.handle()


@team_frontend.route('/update-team',
                     methods=['PUT'], endpoint='update-team')
@jwt_required()
@UpdateTeamInputFilter.validate()
def updateTeam() -> Response:
    return UpdateTeamHandler.handle()


@team_frontend.route('/update-team-picture',
                     methods=['PUT'], endpoint='update-team-picture')
@jwt_required()
@UpdateTeamPictureInputFilter.validate()
@limiter.limit('3 per minute')
def updateTeamPicture() -> Response:
    return UpdateTeamPictureHandler.handle()


@team_frontend.route('/create-team',
                     methods=['POST'], endpoint='create-team')
@jwt_required()
@CreateTeamInputFilter.validate()
@limiter.limit('2 per minute')
def createTeam() -> Response:
    return CreateTeamHandler.handle()


@team_frontend.route('/send-team-invitation',
                     methods=['POST'], endpoint='send-team-invitation')
@jwt_required()
@SendTeamInvitationInputFilter.validate()
@limiter.limit('2 per minute')
def sendTeamInvitation() -> Response:
    return SendTeamInvitationHandler.handle()


@team_frontend.route('/accept-team-invitation/<hash>',
                     methods=['POST'], endpoint='accept-team-invitation')
@jwt_required()
@AcceptTeamInvitationInputFilter.validate()
@limiter.limit('2 per minute')
def acceptTeamInvitation(hash) -> Response:
    return AcceptTeamInvitationHandler.handle()


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
