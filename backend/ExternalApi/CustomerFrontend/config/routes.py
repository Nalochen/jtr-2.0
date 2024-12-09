from flask import Blueprint
from flask_jwt_extended import jwt_required

from DataDomain.Model.Response import Response
from ExternalApi.CustomerFrontend.Handler.CreateParticipationHandler import CreateParticipationHandler
from ExternalApi.CustomerFrontend.Handler.CreateTeamHandler import CreateTeamHandler
from ExternalApi.CustomerFrontend.Handler.CreateTournamentHandler import CreateTournamentHandler
from ExternalApi.CustomerFrontend.Handler.CreateUserHandler import CreateUserHandler
from ExternalApi.CustomerFrontend.Handler.DeleteMembershipHandler import DeleteMembershipHandler
from ExternalApi.CustomerFrontend.Handler.DeleteParticipationHandler import DeleteParticipationHandler
from ExternalApi.CustomerFrontend.Handler.DeleteTeamHandler import DeleteTeamHandler
from ExternalApi.CustomerFrontend.Handler.DeleteTournamentHandler import DeleteTournamentHandler
from ExternalApi.CustomerFrontend.Handler.GetTeamDetailsHandler import GetTeamDetailsHandler
from ExternalApi.CustomerFrontend.Handler.GetTeamOverviewHandler import GetTeamOverviewHandler
from ExternalApi.CustomerFrontend.Handler.GetTournamentDetailsHandler import GetTournamentDetailsHandler
from ExternalApi.CustomerFrontend.Handler.GetTournamentOverviewHandler import GetTournamentOverviewHandler
from ExternalApi.CustomerFrontend.Handler.GetUserDetailsHandler import GetUserDetailsHandler
from ExternalApi.CustomerFrontend.Handler.LoginUserHandler import LoginUserHandler
from ExternalApi.CustomerFrontend.Handler.UpdateTeamHandler import UpdateTeamHandler
from ExternalApi.CustomerFrontend.Handler.UpdateTournamentHandler import UpdateTournamentHandler
from ExternalApi.CustomerFrontend.Handler.UpdateUserHandler import UpdateUserHandler
from ExternalApi.CustomerFrontend.InputFilter.CreateParticipationInputFilter import CreateParticipationInputFilter
from ExternalApi.CustomerFrontend.InputFilter.CreateTeamInputFilter import CreateTeamInputFilter
from ExternalApi.CustomerFrontend.InputFilter.CreateTournamentInputFilter import CreateTournamentInputFilter
from ExternalApi.CustomerFrontend.InputFilter.CreateUserInputFilter import CreateUserInputFilter
from ExternalApi.CustomerFrontend.InputFilter.DeleteMembershipInputFilter import DeleteMembershipInputFilter
from ExternalApi.CustomerFrontend.InputFilter.DeleteParticipationInputFilter import DeleteParticipationInputFilter
from ExternalApi.CustomerFrontend.InputFilter.DeleteTeamInputFilter import DeleteTeamInputFilter
from ExternalApi.CustomerFrontend.InputFilter.DeleteTournamentInputFilter import DeleteTournamentInputFilter
from ExternalApi.CustomerFrontend.InputFilter.GetTeamDetailsInputFilter import GetTeamDetailsInputFilter
from ExternalApi.CustomerFrontend.InputFilter.GetTournamentDetailsInputFilter import GetTournamentDetailsInputFilter
from ExternalApi.CustomerFrontend.InputFilter.GetUserDetailsInputFilter import GetUserDetailsInputFilter
from ExternalApi.CustomerFrontend.InputFilter.LoginUserInputFilter import LoginUserInputFilter
from ExternalApi.CustomerFrontend.InputFilter.UpdateTeamInputFilter import UpdateTeamInputFilter
from ExternalApi.CustomerFrontend.InputFilter.UpdateTournamentInputFilter import UpdateTournamentInputFilter
from ExternalApi.CustomerFrontend.InputFilter.UpdateUserInputFilter import UpdateUserInputFilter
from config.limiter import limiter

customer_frontend = Blueprint('customer-frontend', __name__)


@customer_frontend.route('/get-tournament-details/<tournamentId>',
                         methods=['GET'], endpoint='get-tournament-details')
@GetTournamentDetailsInputFilter.validate()
# @cache.cached(key_prefix=create_tournament_cache_key)
def getTournamentDetails(tournamentId: int) -> Response:
    return GetTournamentDetailsHandler.handle(tournamentId)


@customer_frontend.route('/get-tournament-overview',
                         methods=['GET'], endpoint='get-tournament-overview')
# @cache.cached(key_prefix='upcoming-tournaments')
def getTournamentOverview() -> Response:
    return GetTournamentOverviewHandler.handle()


@customer_frontend.route('/get-team-details/<teamId>',
                         methods=['GET'], endpoint='get-team-details')
@GetTeamDetailsInputFilter.validate()
def getTeamDetails(teamId: int) -> Response:
    return GetTeamDetailsHandler.handle(teamId)


@customer_frontend.route('/get-team-overview',
                         methods=['GET'], endpoint='get-team-overview')
def getTeamOverview() -> Response:
    return GetTeamOverviewHandler.handle()


@customer_frontend.route('/get-user-details',
                         methods=['GET'], endpoint='get-user-details')
@customer_frontend.route('/get-user-details/<userId>',
                         methods=['GET'], endpoint='get-user-details')
@GetUserDetailsInputFilter.validate()
@jwt_required(optional=True)
def getUserDetails(userId: int = None) -> Response:
    return GetUserDetailsHandler.handle(userId)


@customer_frontend.route('/update-team',
                         methods=['PUT'], endpoint='update-team')
@jwt_required()
@UpdateTeamInputFilter.validate()
def updateTeam() -> Response:
    return UpdateTeamHandler.handle()


@customer_frontend.route('/update-tournament',
                         methods=['PUT'], endpoint='update-tournament')
@jwt_required()
@UpdateTournamentInputFilter.validate()
def updateTournament() -> Response:
    return UpdateTournamentHandler.handle()


@customer_frontend.route('/update-user',
                         methods=['PUT'], endpoint='update-user')
@jwt_required()
@UpdateUserInputFilter.validate()
def updateUser() -> Response:
    return UpdateUserHandler.handle()


@customer_frontend.route('/create-participation',
                         methods=['POST'], endpoint='create-participation')
@jwt_required()
@CreateParticipationInputFilter.validate()
def createParticipation() -> Response:
    return CreateParticipationHandler().handle()


@customer_frontend.route('/create-team',
                         methods=['POST'], endpoint='create-team')
@jwt_required()
@CreateTeamInputFilter.validate()
def createTeam() -> Response:
    return CreateTeamHandler.handle()


@customer_frontend.route('/create-tournament',
                         methods=['POST'], endpoint='create-tournament')
@jwt_required()
@CreateTournamentInputFilter.validate()
def createTournament() -> Response:
    return CreateTournamentHandler.handle()


@customer_frontend.route('/login', methods=['POST'], endpoint='login')
@LoginUserInputFilter.validate()
@limiter.limit("5 per minute")
def login() -> Response:
    return LoginUserHandler.handle()


@customer_frontend.route('/register', methods=['POST'], endpoint='register')
@CreateUserInputFilter.validate()
def register() -> Response:
    return CreateUserHandler.handle()


@customer_frontend.route('/delete-membership',
                         methods=['DELETE'],
                         endpoint='delete-membership')
@jwt_required()
@DeleteMembershipInputFilter.validate()
def deleteMembership() -> Response:
    return DeleteMembershipHandler.handle()


@customer_frontend.route('/delete-participation',
                         methods=['DELETE'],
                         endpoint='delete-participation')
@jwt_required()
@DeleteParticipationInputFilter.validate()
def deleteParticipation() -> Response:
    return DeleteParticipationHandler().handle()


@customer_frontend.route('/delete-team',
                         methods=['DELETE'],
                         endpoint='delete-team')
@jwt_required()
@DeleteTeamInputFilter.validate()
def deleteTeam() -> Response:
    return DeleteTeamHandler.handle()


@customer_frontend.route('/delete-tournament',
                         methods=['DELETE'],
                         endpoint='delete-tournament')
@jwt_required()
@DeleteTournamentInputFilter.validate()
def deleteTournament() -> Response:
    return DeleteTournamentHandler.handle()
