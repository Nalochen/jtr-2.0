from flask import Blueprint

from ExternalApi.CustomerFrontend.Handler.CreateFakeIsPartOfHandler import CreateFakeIsPartOfHandler
from ExternalApi.CustomerFrontend.Handler.CreateFakeParticipatesInHandler import CreateFakeParticipatesInHandler
from ExternalApi.CustomerFrontend.Handler.CreateFakeTeamsHandler import CreateFakeTeamsHandler
from ExternalApi.CustomerFrontend.Handler.CreateFakeTournamentsHandler import CreateFakeTournamentsHandler
from ExternalApi.CustomerFrontend.Handler.CreateFakeUsersHandler import CreateFakeUsersHandler
from ExternalApi.CustomerFrontend.Handler.GetTournamentDetailsHandler import GetTournamentDetailsHandler
from ExternalApi.CustomerFrontend.Handler.GetTournamentOverviewHandler import GetTournamentOverviewHandler
from ExternalApi.CustomerFrontend.InputFilter.FakerInputFilter import FakerInputFilter
from ExternalApi.CustomerFrontend.InputFilter.GetTournamentDetailsInputFilter import GetTournamentDetailsInputFilter
from ExternalApi.CustomerFrontend.config.extensions import create_tournament_cache_key
from config.extensions import cache


customer_frontend = Blueprint('customer-frontend', __name__)


@customer_frontend.route('/get-tournament-details/<tournamentId>',
                         methods=['GET'], endpoint='get-tournament-details')
@GetTournamentDetailsInputFilter.validate()
#@cache.cached(key_prefix=create_tournament_cache_key)
def getTournamentDetails(
    tournamentId: int): return GetTournamentDetailsHandler().handle(tournamentId)


@customer_frontend.route('/get-tournament-overview',
                         methods=['GET'], endpoint='get-tournament-overview')
#@cache.cached(key_prefix='upcoming-tournaments')
def getTournamentOverview(): return GetTournamentOverviewHandler().handle()


@customer_frontend.route('/create-fake-users',
                         methods=['POST'],
                         endpoint='create-fake-users')
@FakerInputFilter.validate()
def createFakeUsers(): return CreateFakeUsersHandler().handle()


@customer_frontend.route('/create-fake-tournaments',
                         methods=['POST'], endpoint='create-fake-tournaments')
@FakerInputFilter.validate()
def createFakeTournaments(): return CreateFakeTournamentsHandler().handle()


@customer_frontend.route('/create-fake-teams',
                         methods=['POST'],
                         endpoint='create-fake-teams')
@FakerInputFilter.validate()
def createFakeTeams(): return CreateFakeTeamsHandler().handle()


@customer_frontend.route('/create-fake-is-part-of',
                         methods=['POST'],
                         endpoint='create-fake-is-part-of')
@FakerInputFilter.validate()
def createFakeIsPartOf(): return CreateFakeIsPartOfHandler().handle()


@customer_frontend.route('/create-fake-participates_in',
                         methods=['POST'], endpoint='create-fake-participates_in')
@FakerInputFilter.validate()
def createFakeParticipatesIn(): return CreateFakeParticipatesInHandler().handle()
