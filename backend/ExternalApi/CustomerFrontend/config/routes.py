from flask import request, Blueprint, Response

from DataDomain.Database.Model.RelationTournamentTeam import participates_in
from DataDomain.Database.Model.RelationUserTeam import is_part_of
from ExternalApi.CustomerFrontend.Handler.GenerateFakeUserHandler import GenerateFakeUserHandler
from ExternalApi.CustomerFrontend.Handler.GetTournamentDetailsHandler import GetTournamentDetailsHandler
from ExternalApi.CustomerFrontend.InputFilter.FakerInputFilter import FakerInputFilter
from Infrastructure.JTRFaker.Faker.ModelFaker import ModelFaker
from DataDomain.Database.Model.Teams import Teams
from DataDomain.Database.Model.Tournaments import Tournaments


api = Blueprint('api', __name__)


@api.route('/get-tournament-details/<int:tournamentId>',
           methods=['GET'], endpoint='get-tournament-details')
def getTournamentDetails(
    tournamentId: int): return GetTournamentDetailsHandler().handle(tournamentId)


@api.route('/generate-fake-users', methods=['POST'])
@FakerInputFilter.validate()
def generateFakeUsers(): return GenerateFakeUserHandler().handle()


@api.route('/generate-fake-tournaments', methods=['POST'])
def generateFakeTournaments():
    ModelFaker(Tournaments).create(amount=request.json.get('amount'))

    return Response(status=200)


@api.route('/generate-fake-teams', methods=['POST'])
def generateFakeTeams():
    ModelFaker(Teams).create(amount=request.json.get('amount'))

    return Response(status=200)


@api.route('/generate-fake-is-part-of', methods=['POST'])
def generateFakeIsPartOf():
    ModelFaker(is_part_of).create(amount=request.json.get('amount'))

    return Response(status=200)


@api.route('/generate-fake-participates_in', methods=['POST'])
def generateFakeParticipatesIn():
    ModelFaker(participates_in).create(amount=request.json.get('amount'))

    return Response(status=200)
