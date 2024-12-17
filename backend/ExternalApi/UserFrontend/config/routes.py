from flask import Blueprint
from flask_jwt_extended import jwt_required

from DataDomain.Model.Response import Response
from ExternalApi.UserFrontend.Handler.CreateUserHandler import CreateUserHandler
from ExternalApi.UserFrontend.Handler.DeleteUserHandler import DeleteUserHandler
from ExternalApi.UserFrontend.Handler.GetUserDetailsHandler import GetUserDetailsHandler
from ExternalApi.UserFrontend.Handler.GetUserOverviewHandler import GetUserOverviewHandler
from ExternalApi.UserFrontend.Handler.IsAdminOnOrganizerHandler import IsAdminOfOrganizerHandler
from ExternalApi.UserFrontend.Handler.IsAdminOnTeamHandler import IsAdminOfTeamHandler
from ExternalApi.UserFrontend.Handler.LoginUserHandler import LoginUserHandler
from ExternalApi.UserFrontend.Handler.UpdateUserHandler import UpdateUserHandler
from ExternalApi.UserFrontend.InputFilter.CreateUserInputFilter import CreateUserInputFilter
from ExternalApi.UserFrontend.InputFilter.GetUserDetailsInputFilter import GetUserDetailsInputFilter
from ExternalApi.UserFrontend.InputFilter.IsAdminOfOrganizerInputFilter import IsAdminOfOrganizerInputFilter
from ExternalApi.UserFrontend.InputFilter.IsAdminOfTeamInputFilter import IsAdminOfTeamInputFilter
from ExternalApi.UserFrontend.InputFilter.LoginUserInputFilter import LoginUserInputFilter
from ExternalApi.UserFrontend.InputFilter.UpdateUserInputFilter import UpdateUserInputFilter
from ExternalApi.UserFrontend.config.extensions import create_user_cache_key
from config.cache import cache
from config.limiter import limiter

user_frontend = Blueprint('user-frontend', __name__)


@user_frontend.route('/get-user-details',
                     methods=['GET'], endpoint='get-user-details')
@user_frontend.route('/get-user-details/<userId>',
                     methods=['GET'], endpoint='get-user-details')
@GetUserDetailsInputFilter.validate()
@jwt_required(optional=True)
@cache.cached(key_prefix=create_user_cache_key)
def getUserDetails(userId=None) -> Response:
    return GetUserDetailsHandler.handle()


@user_frontend.route('/get-user-overview',
                     methods=['GET'], endpoint='get-user-overview')
@cache.cached(key_prefix='user-overview')
def getUserOverview() -> Response:
    return GetUserOverviewHandler.handle()


@user_frontend.route('/is-admin-of-team/<teamId>',
                     methods=['GET'], endpoint='is-admin-of-team')
@IsAdminOfTeamInputFilter.validate()
def isAdminOfTeam(teamId) -> Response:
    return IsAdminOfTeamHandler.handle()


@user_frontend.route('/is-admin-of-organizer/<tournamentId>',
                     methods=['GET'], endpoint='is-admin-of-organizer')
@IsAdminOfOrganizerInputFilter.validate()
def isAdminOfOrganizer(tournamentId) -> Response:
    return IsAdminOfOrganizerHandler.handle()


@user_frontend.route('/update-user',
                     methods=['PUT'], endpoint='update-user')
@jwt_required()
@UpdateUserInputFilter.validate()
def updateUser() -> Response:
    return UpdateUserHandler.handle()


@user_frontend.route('/login', methods=['POST'], endpoint='login')
@LoginUserInputFilter.validate()
@limiter.limit("5 per minute")
def login() -> Response:
    return LoginUserHandler.handle()


@user_frontend.route('/register', methods=['POST'], endpoint='register')
@CreateUserInputFilter.validate()
@limiter.limit("2 per minute")
def register() -> Response:
    return CreateUserHandler.handle()


@user_frontend.route('/delete-user',
                     methods=['DELETE'],
                     endpoint='delete-user')
@jwt_required()
def deleteUser() -> Response:
    return DeleteUserHandler.handle()
