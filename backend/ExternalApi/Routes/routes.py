from flask import jsonify, request, Blueprint

from BusinessDomain.tools.extensions import redis, cache, celery
from DataDomain.Database.Models import Items, Teams

api = Blueprint('api', __name__)


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
    team = Teams.query.all()

    return jsonify([item.serialize() for item in items])
