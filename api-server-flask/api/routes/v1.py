from flask_restful import Resource, abort
from flask import Blueprint
from api import api

apiv1bp = Blueprint('api', __name__)


class Service(Resource):
    def get(self, service_id):
        return ({
            'name': 'bebe',
            'status': 0,
            'cover': 'cover.png'
        }, 200)


class ServiceList(Resource):
    def get(self):
        return ({
            'name': 'bebe',
            'status': 0,
            'cover': 'cover.png'
        }, 200)


api.add_resource(Service, '/service/<int:service_id>')
api.add_resource(ServiceList, '/services')
