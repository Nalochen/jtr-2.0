from flask import jsonify, request, Blueprint, Response

from DataDomain.Database.Models.RelationTournamentTeam import participates_in
from DataDomain.Database.Models.RelationUserTeam import is_part_of
from Infrastructure.JTRFaker.Faker.ModelFaker import ModelFaker
from extensions import redis, cache, celery
from DataDomain.Database.Models.Items import Items
from DataDomain.Database.Models.Teams import Teams
from DataDomain.Database.Models.Tournaments import Tournaments
from DataDomain.Database.Models.Users import Users


api = Blueprint('api', __name__)


@api.route('/generate-fake-users', methods=['POST'])
def generateFakeUsers():
    ModelFaker(Users).create(amount=request.json.get('count'))

    return Response(status=200)


@api.route('/generate-fake-tournaments', methods=['POST'])
def generateFakeTournaments():
    ModelFaker(Tournaments).create(amount=request.json.get('count'))

    return Response(status=200)


@api.route('/generate-fake-teams', methods=['POST'])
def generateFakeTeams():
    ModelFaker(Teams).create(amount=request.json.get('count'))

    return Response(status=200)


@api.route('/generate-fake-is-part-of', methods=['POST'])
def generateFakeIsPartOf():
    ModelFaker(is_part_of).create(amount=request.json.get('count'))

    return Response(status=200)


@api.route('/generate-fake-participates_in', methods=['POST'])
def generateFakeParticipatesIn():
    ModelFaker(participates_in).create(amount=request.json.get('count'))

    return Response(status=200)


@api.route('/data-text')
def text():
    return "Hello, String!"


@api.route('/data-obj')
def obj():
    return {"data": "Hello, Obj!"}


@api.route('/items', methods=['POST'])
def add_item():
    itemName = request.json.get('name')

    celery.send_task(
        'tasks.create_item', args=[itemName])

    cache.delete('items')

    return jsonify({'message': 'Item add queued'})


@api.route('/items', methods=['GET'])
@cache.cached(timeout=60, key_prefix='items')
def get_items():
    cachedResponse = redis.get('items')

    if cachedResponse:
        return jsonify(cachedResponse)

    items = Items.query.all()

    return jsonify([item.serialize() for item in items])
