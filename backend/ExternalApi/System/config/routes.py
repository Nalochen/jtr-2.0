
from flask import Blueprint

from DataDomain.Model.Response import Response
from ExternalApi.System.Handler.CreateFakeIsPartOfHandler import CreateFakeIsPartOfHandler
from ExternalApi.System.Handler.CreateFakeParticipatesInHandler import CreateFakeParticipatesInHandler
from ExternalApi.System.Handler.CreateFakeTeamsHandler import CreateFakeTeamsHandler
from ExternalApi.System.Handler.CreateFakeTournamentsHandler import CreateFakeTournamentsHandler
from ExternalApi.System.Handler.CreateFakeUsersHandler import CreateFakeUsersHandler
from ExternalApi.System.InputFilter.FakerInputFilter import FakerInputFilter
from ExternalApi.System.Handler.GetSwaggerFileHandler import GetSwaggerFileHandler


system = Blueprint('system', __name__)


@system.route('/get-swagger-file', methods=['GET'])
def getSwagger(): return GetSwaggerFileHandler().handle()


@system.route('/create-fake-users',
                         methods=['POST'],
                         endpoint='create-fake-users')
@FakerInputFilter.validate()
def createFakeUsers() -> Response:
    return CreateFakeUsersHandler().handle()


@system.route('/create-fake-tournaments',
                         methods=['POST'], endpoint='create-fake-tournaments')
@FakerInputFilter.validate()
def createFakeTournaments() -> Response:
    return CreateFakeTournamentsHandler().handle()


@system.route('/create-fake-teams',
                         methods=['POST'],
                         endpoint='create-fake-teams')
@FakerInputFilter.validate()
def createFakeTeams() -> Response:
    return CreateFakeTeamsHandler().handle()


@system.route('/create-fake-is-part-of',
                         methods=['POST'],
                         endpoint='create-fake-is-part-of')
@FakerInputFilter.validate()
def createFakeIsPartOf() -> Response:
    return CreateFakeIsPartOfHandler().handle()


@system.route('/create-fake-participates_in',
                         methods=['POST'], endpoint='create-fake-participates_in')
@FakerInputFilter.validate()
def createFakeParticipatesIn() -> Response:
    return CreateFakeParticipatesInHandler().handle()
