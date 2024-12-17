from flask import Blueprint
from flask_jwt_extended import jwt_required

from DataDomain.Model.Response import Response
from ExternalApi.TournamentFrontend.Handler.CreateParticipationHandler import CreateParticipationHandler
from ExternalApi.TournamentFrontend.Handler.CreateResultHandler import CreateResultHandler
from ExternalApi.TournamentFrontend.Handler.CreateTournamentHandler import CreateTournamentHandler
from ExternalApi.TournamentFrontend.Handler.DeleteParticipationHandler import DeleteParticipationHandler
from ExternalApi.TournamentFrontend.Handler.DeleteTournamentHandler import DeleteTournamentHandler
from ExternalApi.TournamentFrontend.Handler.GetTournamentDetailsHandler import GetTournamentDetailsHandler
from ExternalApi.TournamentFrontend.Handler.GetTournamentOverviewHandler import GetTournamentOverviewHandler
from ExternalApi.TournamentFrontend.Handler.UpdateTournamentHandler import UpdateTournamentHandler
from ExternalApi.TournamentFrontend.InputFilter.CreateParticipationInputFilter import CreateParticipationInputFilter
from ExternalApi.TournamentFrontend.InputFilter.CreateResultInputFilter import CreateResultInputFilter
from ExternalApi.TournamentFrontend.InputFilter.CreateTournamentInputFilter import CreateTournamentInputFilter
from ExternalApi.TournamentFrontend.InputFilter.DeleteParticipationInputFilter import DeleteParticipationInputFilter
from ExternalApi.TournamentFrontend.InputFilter.DeleteTournamentInputFilter import DeleteTournamentInputFilter
from ExternalApi.TournamentFrontend.InputFilter.GetTournamentDetailsInputFilter import GetTournamentDetailsInputFilter
from ExternalApi.TournamentFrontend.InputFilter.UpdateTournamentInputFilter import UpdateTournamentInputFilter
from ExternalApi.TournamentFrontend.config.extensions import create_tournament_cache_key
from config.cache import cache
from config.limiter import limiter

tournament_frontend = Blueprint('tournament-frontend', __name__)


@tournament_frontend.route('/get-tournament-details/<tournamentId>',
                           methods=['GET'], endpoint='get-tournament-details')
@GetTournamentDetailsInputFilter.validate()
@cache.cached(key_prefix=create_tournament_cache_key)
def getTournamentDetails(tournamentId: int) -> Response:
    return GetTournamentDetailsHandler.handle(tournamentId)


@tournament_frontend.route('/get-tournament-overview',
                           methods=['GET'], endpoint='get-tournament-overview')
@cache.cached(key_prefix='tournament-overview')
def getTournamentOverview() -> Response:
    return GetTournamentOverviewHandler.handle()


@tournament_frontend.route('/update-tournament',
                           methods=['PUT'], endpoint='update-tournament')
@jwt_required()
@UpdateTournamentInputFilter.validate()
def updateTournament() -> Response:
    return UpdateTournamentHandler.handle()


@tournament_frontend.route('/create-tournament',
                           methods=['POST'], endpoint='create-tournament')
@jwt_required()
@CreateTournamentInputFilter.validate()
@limiter.limit("2 per minute")
def createTournament() -> Response:
    return CreateTournamentHandler.handle()


@tournament_frontend.route('/create-participation',
                           methods=['POST'], endpoint='create-participation')
@jwt_required()
@CreateParticipationInputFilter.validate()
@limiter.limit("2 per minute")
def createParticipation() -> Response:
    return CreateParticipationHandler.handle()


@tournament_frontend.route('/create-result',
                           methods=['POST'], endpoint='create-result')
@jwt_required()
@CreateResultInputFilter.validate()
@limiter.limit("2 per minute")
def createResult() -> Response:
    return CreateResultHandler.handle()


@tournament_frontend.route('/delete-participation',
                           methods=['DELETE'],
                           endpoint='delete-participation')
@jwt_required()
@DeleteParticipationInputFilter.validate()
def deleteParticipation() -> Response:
    return DeleteParticipationHandler.handle()


@tournament_frontend.route('/delete-tournament',
                           methods=['DELETE'],
                           endpoint='delete-tournament')
@jwt_required()
@DeleteTournamentInputFilter.validate()
def deleteTournament() -> Response:
    return DeleteTournamentHandler.handle()
