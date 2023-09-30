import json

from flask_restful import Resource, abort
from flask import Blueprint, jsonify, request
from flask_mongoengine import mongoengine

from api import api
from api.models import Service as ServiceModel

apiv1bp = Blueprint('api', __name__)

def getServiceByID(service_id: str) -> ServiceModel:
    try:
        service = ServiceModel.objects(id=service_id).first()
    except mongoengine.errors.ValidationError:
        return None
    
    return service

class Service(Resource):
    def get(self, service_id: str):
        service = ServiceModel.objects(id=service_id).first()

        if (service):
            return (jsonify(service).json, 200)

        return ({'message': 'Service with such ID does not exist'}, 404)

    def delete(self, service_id: str):
        service = ServiceModel.objects(id=service_id).first()

        if (service):
            service.delete()
            return ({}, 204)
        
        return ({'message': 'Service with such ID does not exist'}, 404)

    def patch(self, service_id: str):
        req_body = json.loads(request.get_data(as_text=True))
        service = getServiceByID(service_id)

        if (service):
            if (name := req_body.get('name')):
                service.name = name
            elif (status := req_body.get('status')):
                service.status = status
            elif (description := req_body.get('description')):
                service.description = description
                        
            service.save()
            return (jsonify(service).json, 200)
        
        return ({'message': 'Service with such ID does not exist'}, 404)


class ServiceList(Resource):
    def get(self):
        servicelist = ServiceModel.objects()
        return (jsonify(servicelist).json, 200)

    def post(self):
        print(request.get_data(as_text=True))
        req_body = json.loads(request.get_data(as_text=True))

        service = ServiceModel(
            name=req_body['name'],
            status=status if (status := req_body.get('status')) else 'opened')
        service.save()

        return (jsonify(service).json, 201)


api.add_resource(Service, '/service/<string:service_id>')
api.add_resource(ServiceList, '/services')
