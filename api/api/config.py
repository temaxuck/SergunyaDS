import os


class Config(object):
    SECRET_KEY = os.environ.get('SECRET_KEY')
    DEBUG = os.environ.get('DEBUG')

    MONGODB_USERNAME = os.environ.get('MONGODB_USENAME') or 'admin'
    MONGODB_PASSWORD = os.environ.get('MONGODB_PASSWORD') or 'password'
    MONGODB_HOSTNAME = os.environ.get('MONGODB_HOSTNAME') or 'localhost'
    MONGODB_PORT = int(os.environ.get('MONGODB_PORT')) or 27017
    MONGODB_DATABASE = os.environ.get('MONGODB_DATABASE') or 'test'

    MONGODB_SETTINGS = {
        'username': MONGODB_USERNAME,
        'password': MONGODB_PASSWORD,
        'host': MONGODB_HOSTNAME,
        'port': MONGODB_PORT,
        'db': MONGODB_DATABASE
    }
