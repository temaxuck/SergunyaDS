from flask import Flask, redirect, render_template, url_for
from api.config import Config


def create_app() -> Flask:
    app = Flask(__name__)
    app.config.from_object(Config)

    return app
