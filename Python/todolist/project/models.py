from flask_login import UserMixin
from . import db
from datetime import datetime

class User(UserMixin, db.Model):
    id = db.Column(db.Integer, primary_key=True) # primary keys are required by SQLAlchemy
    email = db.Column(db.String(100), unique=True)
    password = db.Column(db.String(100))
    name = db.Column(db.String(1000))

class Task(db.Model):
    """model to store a task data"""

    id = db.Column(db.Integer, primary_key=True)
    """:type : int"""

    description = db.Column(db.String(200), nullable=False)
    """:type : str"""

    category = db.Column(db.String(200), nullable=False)
    """:type : str"""

    status = db.Column(db.String(200), nullable=False)
    """:type : str"""

    start_at = db.Column(db.DateTime)
    """:type : datetime"""

    end_at = db.Column(db.DateTime)
    """:type : datetime"""

    time_worked = db.Column(db.Integer)
    """:type : Integer"""

    date_created = db.Column(db.DateTime, default=datetime.utcnow)
    """:type : datetime"""

    def __repr__(self):
        """override __repr__ method"""
        return f"Task: #{self.id}, content: {self.description}"