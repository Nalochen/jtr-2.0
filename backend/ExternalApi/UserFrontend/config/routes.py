from flask import Blueprint
from flask_jwt_extended import jwt_required

from config import cache, limiter
from DataDomain.Model import Response
from ExternalApi.UserFrontend.config.extensions import (
    create_user_cache_key,
    create_user_picture_cache_key,
)
from ExternalApi.UserFrontend.Handler import (
    AuthenticateUserHandler,
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
    UpdateUserHandler,
    UpdateUserLanguageHandler,
    UpdateUserPictureHandler,
)
from ExternalApi.UserFrontend.InputFilter import (
    AuthenticateUserInputFilter,
    CreateNewPasswordInputFilter,
    CreatePasswordResetInputFilter,
    CreateUserInputFilter,
    GetUserDetailsInputFilter,
    GetUserPictureInputFilter,
    IsAdminOfOrganizerInputFilter,
    IsAdminOfTeamInputFilter,
    UpdateUserInputFilter,
    UpdateUserLanguageInputFilter,
    UpdateUserPictureInputFilter,
)

user_frontend = Blueprint('user-frontend', __name__)


@user_frontend.route('/get-user-details',
                     methods=['GET'], endpoint='get-user-details')
@user_frontend.route('/get-user-details/<escapedUsername>',
                     methods=['GET'], endpoint='get-user-details')
@cache.cached(key_prefix=create_user_cache_key)
@jwt_required(optional=True)
@GetUserDetailsInputFilter.validate()
def getUserDetails(escapedUsername=None) -> Response:
    return GetUserDetailsHandler.handle()


@user_frontend.route('/get-user-overview',
                     methods=['GET'], endpoint='get-user-overview')
@cache.cached(key_prefix='user-overview')
def getUserOverview() -> Response:
    return GetUserOverviewHandler.handle()


@user_frontend.route('/get-user-picture/<userId>',
                     methods=['GET'], endpoint='get-user-picture')
@cache.cached(key_prefix=create_user_picture_cache_key)
@GetUserPictureInputFilter.validate()
def getUserPicture(userId) -> Response:
    return GetUserPictureHandler.handle()


@user_frontend.route('/get-admin-teams',
                     methods=['GET'], endpoint='get-admin-teams')
@jwt_required()
def getAdminOfTeams() -> Response:
    return GetAdminOfTeamsHandler.handle()


@user_frontend.route('/is-admin-of-team/<escapedName>',
                     methods=['GET'], endpoint='is-admin-of-team')
@jwt_required()
@IsAdminOfTeamInputFilter.validate()
def isAdminOfTeam(escapedName) -> Response:
    return IsAdminOfTeamHandler.handle()


@user_frontend.route('/is-admin-of-organizer/<tournamentId>',
                     methods=['GET'], endpoint='is-admin-of-organizer')
@jwt_required()
@IsAdminOfOrganizerInputFilter.validate()
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
@limiter.limit('3 per minute')
@jwt_required()
@UpdateUserPictureInputFilter.validate()
def updateUserPicture() -> Response:
    return UpdateUserPictureHandler.handle()


@user_frontend.route('/update-user-language',
                     methods=['PUT'],
                     endpoint='update-user-language')
@limiter.limit('4 per minute')
@jwt_required()
@UpdateUserLanguageInputFilter.validate()
def updateUserLanguage() -> Response:
    return UpdateUserLanguageHandler.handle()


@user_frontend.route('/authenticate-user', methods=['POST'], endpoint='authenticate-user')
@limiter.limit('5 per minute')
@AuthenticateUserInputFilter.validate()
def authenticateUser() -> Response:
    return AuthenticateUserHandler.handle()


@user_frontend.route('/create-user', methods=['POST'], endpoint='create-user')
@limiter.limit('2 per minute')
@CreateUserInputFilter.validate()
def createUser() -> Response:
    return CreateUserHandler.handle()


@user_frontend.route('/create-password-reset',
                     methods=['POST'],
                     endpoint='create-password-reset')
@limiter.limit('2 per minute')
@CreatePasswordResetInputFilter.validate()
def createPasswordReset() -> Response:
    return CreatePasswordResetHandler.handle()


@user_frontend.route('/create-new-password',
                     methods=['PUT'],
                     endpoint='create-new-password')
@limiter.limit('2 per minute')
@CreateNewPasswordInputFilter.validate()
def createNewPassword() -> Response:
    return CreateNewPasswordHandler.handle()


@user_frontend.route('/delete-user',
                     methods=['DELETE'],
                     endpoint='delete-user')
@limiter.limit('2 per minute')
@jwt_required()
def deleteUser() -> Response:
    return DeleteUserHandler.handle()
