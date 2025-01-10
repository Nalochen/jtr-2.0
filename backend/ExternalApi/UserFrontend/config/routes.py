from flask import Blueprint
from flask_jwt_extended import jwt_required

from config import cache, limiter
from DataDomain.Model import Response
from ExternalApi.UserFrontend.config.extensions import (
    create_user_cache_key,
    create_user_picture_cache_key,
)
from ExternalApi.UserFrontend.Handler import (
    CreateNewPasswordHandler,
    CreatePasswordResetHandler,
    CreateUserHandler,
    DeleteUserHandler,
    GetAdminOfTeamsHandler,
    GetUserDetailsHandler,
    GetUserOverviewHandler,
    GetUserPictureHandler,
    IsAdminOfOrganizerHandler,
    IsAdminOfTeamHandler,
    LoginUserHandler,
    UpdateUserHandler,
    UpdateUserLanguageHandler,
    UpdateUserPictureHandler,
)
from ExternalApi.UserFrontend.InputFilter import (
    CreateNewPasswordInputFilter,
    CreatePasswordResetInputFilter,
    CreateUserInputFilter,
    GetUserDetailsInputFilter,
    GetUserPictureInputFilter,
    IsAdminOfOrganizerInputFilter,
    IsAdminOfTeamInputFilter,
    LoginUserInputFilter,
    UpdateUserInputFilter,
    UpdateUserLanguageInputFilter,
    UpdateUserPictureInputFilter,
)

user_frontend = Blueprint('user-frontend', __name__)


@user_frontend.route('/get-user-details',
                     methods=['GET'], endpoint='get-user-details')
@user_frontend.route('/get-user-details/<escapedUsername>',
                     methods=['GET'], endpoint='get-user-details')
@GetUserDetailsInputFilter.validate()
@jwt_required(optional=True)
@cache.cached(key_prefix=create_user_cache_key)
def getUserDetails(escapedUsername=None) -> Response:
    return GetUserDetailsHandler.handle()


@user_frontend.route('/get-user-overview',
                     methods=['GET'], endpoint='get-user-overview')
@cache.cached(key_prefix='user-overview')
def getUserOverview() -> Response:
    return GetUserOverviewHandler.handle()


@user_frontend.route('/get-user-picture/<userId>',
                     methods=['GET'], endpoint='get-user-picture')
@GetUserPictureInputFilter.validate()
@cache.cached(key_prefix=create_user_picture_cache_key)
def getUserPicture(userId) -> Response:
    return GetUserPictureHandler.handle()


@user_frontend.route('/get-admin-teams',
                     methods=['GET'], endpoint='get-admin-teams')
@jwt_required()
def getAdminOfTeams() -> Response:
    return GetAdminOfTeamsHandler.handle()


@user_frontend.route('/is-admin-of-team/<teamId>',
                     methods=['GET'], endpoint='is-admin-of-team')
@IsAdminOfTeamInputFilter.validate()
@jwt_required()
def isAdminOfTeam(teamId) -> Response:
    return IsAdminOfTeamHandler.handle()


@user_frontend.route('/is-admin-of-organizer/<tournamentId>',
                     methods=['GET'], endpoint='is-admin-of-organizer')
@IsAdminOfOrganizerInputFilter.validate()
@jwt_required()
def isAdminOfOrganizer(tournamentId) -> Response:
    return IsAdminOfOrganizerHandler.handle()


@user_frontend.route('/update-user',
                     methods=['PUT'], endpoint='update-user')
@jwt_required()
@UpdateUserInputFilter.validate()
def updateUser() -> Response:
    return UpdateUserHandler.handle()


@user_frontend.route('/update-user-picture',
                     methods=['PUT'], endpoint='update-user-picture')
@jwt_required()
@UpdateUserPictureInputFilter.validate()
@limiter.limit('3 per minute')
def updateUserPicture() -> Response:
    return UpdateUserPictureHandler.handle()


@user_frontend.route('/update-user-language',
                     methods=['PUT'],
                     endpoint='update-user-language')
@jwt_required()
@UpdateUserLanguageInputFilter.validate()
@limiter.limit('4 per minute')
def updateUserLanguage() -> Response:
    return UpdateUserLanguageHandler.handle()


@user_frontend.route('/login', methods=['POST'], endpoint='login')
@LoginUserInputFilter.validate()
@limiter.limit('5 per minute')
def login() -> Response:
    return LoginUserHandler.handle()


@user_frontend.route('/register', methods=['POST'], endpoint='register')
@CreateUserInputFilter.validate()
@limiter.limit('2 per minute')
def register() -> Response:
    return CreateUserHandler.handle()


@user_frontend.route('/create-password-reset',
                     methods=['POST'],
                     endpoint='create-password-reset')
@CreatePasswordResetInputFilter.validate()
@limiter.limit('2 per minute')
def createPasswordReset() -> Response:
    return CreatePasswordResetHandler.handle()


@user_frontend.route('/create-new-password',
                     methods=['PUT'],
                     endpoint='create-new-password')
@CreateNewPasswordInputFilter.validate()
@limiter.limit('2 per minute')
def createNewPassword() -> Response:
    return CreateNewPasswordHandler.handle()


@user_frontend.route('/delete-user',
                     methods=['DELETE'],
                     endpoint='delete-user')
@jwt_required()
@limiter.limit('2 per minute')
def deleteUser() -> Response:
    return DeleteUserHandler.handle()
