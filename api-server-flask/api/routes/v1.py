from flask_restful import Resource, abort
from flask import Blueprint

apiv1bp = Blueprint('api', __name__)


class Service(Resource):
    def get(self, id):
        return ({
            'name': 'bebe',
            'status': 0,
            'cover': 'cover.png'
        }, 200)
