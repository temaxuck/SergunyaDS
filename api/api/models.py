from api import db
from enum import Enum


class Status(Enum):
    OPENED = 'opened'
    CLOSED = 'closed'

class Image(db.EmbeddedDocument):
    upload = db.ImageField()

class Service(db.Document):
    name = db.StringField(max_length=200, required=True)
    status = db.EnumField(Status, default=Status.OPENED)
    description = db.StringField(max_length=600)
    image = db.EmbeddedDocumentField(Image)