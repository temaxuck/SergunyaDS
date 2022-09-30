import os


class Config(object):
    SECRET_KEY = os.environ.get('SECRET_KEY')
    DEBUG = os.environ.get('DEBUG')

    MONGODB_USERNAME = os.environ.get('MONGODB_USENAME') or ''
    MONGODB_PASSWORD = os.environ.get('MONGODB_PASSWORD') or ''
    MONGODB_HOSTNAME = os.environ.get('MONGODB_HOSTNAME') or 'localhost'
    MONGODB_PORT = os.environ.get('MONGODB_PORT') or '27017'
    MONGODB_DATABASE = os.environ.get('MONGODB_DATABASE') or 'test'
    MONGO_URI = f'mongodb://{MONGODB_USERNAME}:{MONGODB_PASSWORD}@{MONGODB_HOSTNAME}:{MONGODB_PORT}/{MONGODB_DATABASE}'
