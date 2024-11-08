from flask import Blueprint
from flask_jwt_extended import jwt_required

from DataDomain.Model.Response import Response
from ExternalApi.CustomerFrontend.Handler.CreateTeamHandler import CreateTeamHandler
from ExternalApi.CustomerFrontend.Handler.CreateUserHandler import CreateUserHandler
from ExternalApi.CustomerFrontend.Handler.DeleteIsPartOfHandler import DeleteIsPartOfHandler
from ExternalApi.CustomerFrontend.Handler.DeleteParticipatesInHandler import DeleteParticipatesInHandler
from ExternalApi.CustomerFrontend.Handler.DeleteTeamHandler import DeleteTeamHandler
from ExternalApi.CustomerFrontend.Handler.DeleteTournamentHandler import DeleteTournamentHandler
from ExternalApi.CustomerFrontend.Handler.GetTeamDetailsHandler import GetTeamDetailsHandler
from ExternalApi.CustomerFrontend.Handler.GetTeamOverviewHandler import GetTeamOverviewHandler
from ExternalApi.CustomerFrontend.Handler.GetTournamentDetailsHandler import GetTournamentDetailsHandler
from ExternalApi.CustomerFrontend.Handler.GetTournamentOverviewHandler import GetTournamentOverviewHandler
from ExternalApi.CustomerFrontend.Handler.GetUserDetailsHandler import GetUserDetailsHandler
from ExternalApi.CustomerFrontend.Handler.LoginUserHandler import LoginUserHandler
from ExternalApi.CustomerFrontend.Handler.UpdateTeamHandler import UpdateTeamHandler
from ExternalApi.CustomerFrontend.Handler.UpdateUserHandler import UpdateUserHandler
from ExternalApi.CustomerFrontend.InputFilter.CreateTeamInputFilter import CreateTeamInputFilter
from ExternalApi.CustomerFrontend.InputFilter.CreateUserInputFilter import CreateUserInputFilter
from ExternalApi.CustomerFrontend.InputFilter.DeleteIsPartOfInputFilter import DeleteIsPartOfInputFilter
from ExternalApi.CustomerFrontend.InputFilter.DeleteParticipatingInInputFilter import DeleteParticipatingInInputFilter
from ExternalApi.CustomerFrontend.InputFilter.DeleteTeamInputFilter import DeleteTeamInputFilter
from ExternalApi.CustomerFrontend.InputFilter.DeleteTournamentInputFilter import DeleteTournamentInputFilter
from ExternalApi.CustomerFrontend.InputFilter.GetTeamDetailsInputFilter import GetTeamDetailsInputFilter
from ExternalApi.CustomerFrontend.InputFilter.GetTournamentDetailsInputFilter import GetTournamentDetailsInputFilter
from ExternalApi.CustomerFrontend.InputFilter.GetUserDetailsInputFilter import GetUserDetailsInputFilter
from ExternalApi.CustomerFrontend.InputFilter.LoginUserInputFilter import LoginUserInputFilter
from ExternalApi.CustomerFrontend.InputFilter.UpdateTeamInputFilter import UpdateTeamInputFilter
from ExternalApi.CustomerFrontend.InputFilter.UpdateUserInputFilter import UpdateUserInputFilter

customer_frontend = Blueprint('customer-frontend', __name__)


@customer_frontend.route('/get-tournament-details/<tournamentId>',
                         methods=['GET'], endpoint='get-tournament-details')
@GetTournamentDetailsInputFilter.validate()
# @cache.cached(key_prefix=create_tournament_cache_key)
def getTournamentDetails(tournamentId: int) -> Response:
    return GetTournamentDetailsHandler().handle(tournamentId)


@customer_frontend.route('/get-tournament-overview',
                         methods=['GET'], endpoint='get-tournament-overview')
# @cache.cached(key_prefix='upcoming-tournaments')
def getTournamentOverview() -> Response:
    return GetTournamentOverviewHandler().handle()


@customer_frontend.route('/get-team-details/<teamId>',
                         methods=['GET'], endpoint='get-team-details')
@GetTeamDetailsInputFilter.validate()
def getTeamDetails(teamId: int) -> Response:
    return GetTeamDetailsHandler().handle(teamId)


@customer_frontend.route('/get-team-overview',
                         methods=['GET'], endpoint='get-team-overview')
def getTeamOverview() -> Response:
    return GetTeamOverviewHandler().handle()


@customer_frontend.route('/get-user-details',
                         methods=['GET'], endpoint='get-user-details')
@customer_frontend.route('/get-user-details/<userId>',
                         methods=['GET'], endpoint='get-user-details')
@GetUserDetailsInputFilter.validate()
@jwt_required(optional=True)
def getUserDetails(userId: int = None) -> Response:
    return GetUserDetailsHandler().handle(userId)


@customer_frontend.route('/update-team',
                         methods=['PUT'], endpoint='update-team')
@jwt_required()
@UpdateTeamInputFilter.validate()
def updateTeam() -> Response:
    return UpdateTeamHandler().handle()


@customer_frontend.route('/update-user',
                         methods=['PUT'], endpoint='update-user')
@jwt_required()
@UpdateUserInputFilter.validate()
def updateUser() -> Response:
    return UpdateUserHandler().handle()


@customer_frontend.route('/create-team',
                         methods=['POST'], endpoint='create-team')
@jwt_required()
@CreateTeamInputFilter.validate()
def createTeam() -> Response:
    return CreateTeamHandler().handle()


@customer_frontend.route('/login', methods=['POST'], endpoint='login')
@LoginUserInputFilter.validate()
def login() -> Response:
    return LoginUserHandler().handle()


@customer_frontend.route('/register', methods=['POST'], endpoint='register')
@CreateUserInputFilter.validate()
def register() -> Response:
    return CreateUserHandler().handle()


@customer_frontend.route('/delete-is-part-of',
                         methods=['DELETE'],
                         endpoint='delete-is-part-of')
@jwt_required()
@DeleteIsPartOfInputFilter.validate()
def deleteIsPartOf() -> Response:
    return DeleteIsPartOfHandler().handle()


@customer_frontend.route('/delete-participates-in',
                         methods=['DELETE'],
                         endpoint='delete-participates-in')
@jwt_required()
@DeleteParticipatingInInputFilter.validate()
def deleteParticipatingIn() -> Response:
    return DeleteParticipatesInHandler().handle()


@customer_frontend.route('/delete-team',
                         methods=['DELETE'],
                         endpoint='delete-team')
@jwt_required()
@DeleteTeamInputFilter.validate()
def deleteParticipatingIn() -> Response:
    return DeleteTeamHandler().handle()


@customer_frontend.route('/delete-tournament',
                         methods=['DELETE'],
                         endpoint='delete-tournament')
@jwt_required()
@DeleteTournamentInputFilter.validate()
def deleteParticipatingIn() -> Response:
    return DeleteTournamentHandler().handle()
