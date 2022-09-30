from flask_restful import Api
from flask_pymongo import PyMongo

api = Api()
mongo = PyMongo()
db = None
