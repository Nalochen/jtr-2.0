from flask import Blueprint
from flask_jwt_extended import jwt_required

from config import cache, limiter
from DataDomain.Model import Response
from ExternalApi.TournamentFrontend.config import create_tournament_cache_key
from ExternalApi.TournamentFrontend.Handler import (
    CreateParticipationHandler,
    CreateResultHandler,
    CreateTournamentHandler,
    CreateTournamentNotificationHandler,
    CreateTournamentSubscriptionHandler,
    DeleteParticipationHandler,
    DeleteTournamentHandler,
    DeleteTournamentSubscriptionHandler,
    GetPastTournamentOverviewHandler,
    GetTournamentDetailsHandler,
    GetTournamentOverviewHandler,
    UpdateTournamentHandler,
    UpdateTournamentStatusHandler,
)
from ExternalApi.TournamentFrontend.InputFilter import (
    CreateParticipationInputFilter,
    CreateResultInputFilter,
    CreateTournamentInputFilter,
    CreateTournamentNotificationInputFilter,
    CreateTournamentSubscriptionInputFilter,
    DeleteParticipationInputFilter,
    DeleteTournamentInputFilter,
    DeleteTournamentSubscriptionInputFilter,
    GetTournamentDetailsInputFilter,
    UpdateTournamentInputFilter,
    UpdateTournamentStatusInputFilter,
)

tournament_frontend = Blueprint('tournament-frontend', __name__)


@tournament_frontend.route('/get-tournament-details/<tournamentId>',
                           methods=['GET'], endpoint='get-tournament-details')
@GetTournamentDetailsInputFilter.validate()
@cache.cached(key_prefix=create_tournament_cache_key)
def getTournamentDetails(tournamentId) -> Response:
    return GetTournamentDetailsHandler.handle()


@tournament_frontend.route('/get-tournament-overview',
                           methods=['GET'], endpoint='get-tournament-overview')
@cache.cached(key_prefix='tournament-overview')
def getTournamentOverview() -> Response:
    return GetTournamentOverviewHandler.handle()


@tournament_frontend.route('/get-past-tournament-overview',
                           methods=['GET'], endpoint='get-past-tournament-overview')
@cache.cached(key_prefix='past-tournament-overview')
def getPastTournamentOverview() -> Response:
    return GetPastTournamentOverviewHandler.handle()


@tournament_frontend.route('/update-tournament',
                           methods=['PUT'], endpoint='update-tournament')
@jwt_required()
@UpdateTournamentInputFilter.validate()
def updateTournament() -> Response:
    return UpdateTournamentHandler.handle()


@tournament_frontend.route('/update-tournament-status',
                           methods=['PUT'], endpoint='update-tournament-status')
@jwt_required()
@UpdateTournamentStatusInputFilter.validate()
def updateTournamentStatus() -> Response:
    return UpdateTournamentStatusHandler.handle()


@tournament_frontend.route('/create-tournament',
                           methods=['POST'], endpoint='create-tournament')
@jwt_required()
@CreateTournamentInputFilter.validate()
@limiter.limit('2 per minute')
def createTournament() -> Response:
    return CreateTournamentHandler.handle()


@tournament_frontend.route('/create-participation',
                           methods=['POST'], endpoint='create-participation')
@jwt_required()
@CreateParticipationInputFilter.validate()
@limiter.limit('2 per minute')
def createParticipation() -> Response:
    return CreateParticipationHandler.handle()


@tournament_frontend.route('/create-result',
                           methods=['POST'], endpoint='create-result')
@jwt_required()
@CreateResultInputFilter.validate()
@limiter.limit('2 per minute')
def createResult() -> Response:
    return CreateResultHandler.handle()


@tournament_frontend.route('/create-tournament-subscription',
                           methods=['POST'], endpoint='create-tournament-subscription')
@jwt_required()
@CreateTournamentSubscriptionInputFilter.validate()
@limiter.limit('2 per minute')
def createTournamentSubscription() -> Response:
    return CreateTournamentSubscriptionHandler.handle()


@tournament_frontend.route('/create-tournament-notification',
                           methods=['POST'], endpoint='create-tournament-notification')
@jwt_required()
@CreateTournamentNotificationInputFilter.validate()
@limiter.limit('2 per minute')
def createTournamentNotification() -> Response:
    return CreateTournamentNotificationHandler.handle()


@tournament_frontend.route('/delete-participation',
                           methods=['DELETE'],
                           endpoint='delete-participation')
@jwt_required()
@DeleteParticipationInputFilter.validate()
@limiter.limit('2 per minute')
def deleteParticipation() -> Response:
    return DeleteParticipationHandler.handle()


@tournament_frontend.route('/delete-tournament',
                           methods=['DELETE'],
                           endpoint='delete-tournament')
@jwt_required()
@DeleteTournamentInputFilter.validate()
@limiter.limit('2 per minute')
def deleteTournament() -> Response:
    return DeleteTournamentHandler.handle()


@tournament_frontend.route('/delete-tournament-subscription',
                           methods=['DELETE'],
                           endpoint='delete-tournament-subscription')
@jwt_required()
@DeleteTournamentSubscriptionInputFilter.validate()
@limiter.limit('2 per minute')
def deleteTournamentSubscription() -> Response:
    return DeleteTournamentSubscriptionHandler.handle()
