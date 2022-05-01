from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class Professor(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(120), nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(80), unique=False, nullable=False)
    

    def __repr__(self):
        return f'<Professor {self.email}>'

    def serialize(self):
        return {
            "id": self.id,
            "name": self.name,
            "email": self.email,
            # do not serialize the password, its a security breach
        }

class Student(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(120), nullable=False)
    
    

    def __repr__(self):
        return f'<Student {self.email}>'

    def serialize(self):
        return {
            "id": self.id,
            "name": self.name,
            # do not serialize the password, its a security breach
        }
        
class Class(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(120), nullable=False)
    
    

    def __repr__(self):
        return f'<Class {self.email}>'

    def serialize(self):
        return {
            "id": self.id,
            "name": self.name,
            # do not serialize the password, its a security breach
        }

class Course(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(120), unique=True, nullable=False)
    schedule = db.Column(db.String(120), nullable=False)
    location = db.Column(db.String(120), nullable=False)
    
    

    def __repr__(self):
        return f'<Course {self.email}>'

    def serialize(self):
        return {
            "id": self.id,
            "name": self.name,
            "schedule": self.schedule,
            "location": self.location,
            # do not serialize the password, its a security breach
        }
   
class Proyect(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(120), nullable=False)
    done = db.Column(db.Boolean(), nullable=False)
    description = db.Column(db.String(120), nullable=False)
    
    

    def __repr__(self):
        return f'<Proyect {self.email}>'

    def serialize(self):
        return {
            "id": self.id,
            "name": self.name,
            "done": self.done,
            "description": self.description,
            # do not serialize the password, its a security breach
        }

class Attendancy(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    date = db.Column(db.String(120), nullable=False)
    present = db.Column(db.Boolean(), nullable=False)
    delay = db.Column(db.Boolean(), nullable=False)
    comments = db.Column(db.String(120), nullable=False)
    
    

    def __repr__(self):
        return f'<Attendancy {self.email}>'

    def serialize(self):
        return {
            "id": self.id,
            "date": self.date,
            "present": self.present,
            "delay": self.delay,
            "comments": self.comments,
            # do not serialize the password, its a security breach
        }