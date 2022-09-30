from flask import Flask
from api.config import Config
from api.extensions import api, mongo, db

from api.routes.v1 import apiv1bp


def create_app() -> Flask:
    app = Flask(__name__)
    app.config.from_object(Config)

    api.init_app(apiv1bp)
    mongo.init_app(app)
    db = mongo.db

    app.register_blueprint(apiv1bp, url_prefix='v1')

    return app
