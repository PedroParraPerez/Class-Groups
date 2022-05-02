from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()


# Many to Many Relationship

groups = db.Table('groups',
    db.Column('groups_id', db.Integer, db.ForeignKey('group.id'), primary_key=True),
    db.Column('proffesor_id', db.Integer, db.ForeignKey('professor.id'), primary_key=True)
)

projects = db.Table('projects',
    db.Column('groups_id', db.Integer, db.ForeignKey('group.id'), primary_key=True),
    db.Column('projects_id', db.Integer, db.ForeignKey('project.id'), primary_key=True)
)




class Professor(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(120), nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(80), unique=False, nullable=False)
    type_of_professor = db.Column(db.String(120), unique=False, nullable=False)
    
    groups = db.relationship('Group', secondary=groups, lazy='subquery',backref=db.backref('Proffesors', lazy=True)) # Many to Many with Group, dont need line in Group

    def __repr__(self):
        return f'<Professor {self.name}>'

    def serialize(self):
        return {
            "id": self.id,
            "name": self.name,
            "email": self.email,
            "type": self.type,
        }

class Student(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(120), nullable=False)
    Group_id = db.Column(db.Integer, db.ForeignKey('group.id'), nullable=True) # One to Many with Group
    attendancy_id = db.Column(db.Integer, db.ForeignKey('attendancy.id'), nullable=True) # One to Many with Attendancy


    

    def __repr__(self):
        return f'<Student {self.name}>'

    def serialize(self):
        return {
            "id": self.id,
            "name": self.name,
        }
        
class Group(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(120), nullable=False)
    students = db.relationship('Student', backref='Group', lazy=True)
    course_id = db.Column(db.Integer, db.ForeignKey('course.id'), nullable=True) # One to Many with Course
    attendancy_id = db.Column(db.Integer, db.ForeignKey('attendancy.id'), nullable=True) # One to Many with Attendancy
    

    def __repr__(self):
        return f'<Group {self.name}>'

    def serialize(self):
        return {
            "id": self.id,
            "name": self.name,
        }

class Course(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(120), unique=True, nullable=False)
    schedule = db.Column(db.String(120), nullable=True)
    location = db.Column(db.String(120), nullable=True)
    lessons = db.relationship('Group', backref='Course', lazy=True)
    
    

    def __repr__(self):
        return f'<Course {self.name}>'

    def serialize(self):
        return {
            "id": self.id,
            "name": self.name,
            "schedule": self.schedule,
            "location": self.location,
        }
   
class Project(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(120), nullable=False)
    done = db.Column(db.Boolean(), nullable=False)
    description = db.Column(db.String(120), nullable=True)
    groups = db.relationship('Group', secondary=projects, lazy='subquery',backref=db.backref('Project', lazy=True)) # Many to Many with Group, dont need line in Group
    
    

    def __repr__(self):
        return f'<Proyect {self.name}>'

    def serialize(self):
        return {
            "id": self.id,
            "name": self.name,
            "done": self.done,
            "description": self.description,
        }

class Attendancy(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    date = db.Column(db.String(120), nullable=True)
    present = db.Column(db.Boolean(), nullable=False)
    delay = db.Column(db.Boolean(), nullable=False)
    comments = db.Column(db.String(120), nullable=True)
    groups = db.relationship('Group', backref='Attendancy', lazy=True) # One to Many with Group
    students = db.relationship('Student', backref='Attendancy', lazy=True) # One to Many with Group
    

    
    

    def __repr__(self):
        return f'<Attendancy {self.date}>'

    def serialize(self):
        return {
            "id": self.id,
            "date": self.date,
            "present": self.present,
            "delay": self.delay,
            "comments": self.comments,
        }