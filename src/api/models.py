from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()


# Many to Many Relationship

groups = db.Table('groups',
    db.Column('groups_id', db.Integer, db.ForeignKey('group.id'), primary_key=True),
    db.Column('teacher_id', db.Integer, db.ForeignKey('teacher.id'), primary_key=True)
)

projects_groups = db.Table('projects_groups',
    db.Column('groups_id', db.Integer, db.ForeignKey('group.id'), primary_key=True),
    db.Column('projects_id', db.Integer, db.ForeignKey('project.id'), primary_key=True)
)

projects_students = db.Table('projects_student',
    db.Column('student_id', db.Integer, db.ForeignKey('student.id'), primary_key=True),
    db.Column('projects_id', db.Integer, db.ForeignKey('project.id'), primary_key=True)
)


class Teacher(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(120), nullable=True)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(240), unique=False, nullable=False)
    type_of_teacher = db.Column(db.String(120), unique=False, nullable=True)
    
    groups = db.relationship('Group', secondary=groups, lazy='subquery',backref=db.backref('Teachers', lazy=True)) # Many to Many with Group, dont need line in Group

    def __repr__(self):
        return f'<Teacher {self.name}>'

    def serialize(self):
        return {
            "id": self.id,
            "name": self.name,
            "email": self.email,
            "type_of_teacher": self.type_of_teacher,
            'groups': [group.serialize() for group in self.groups]
        }

class Student(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(120), nullable=False)
    group_id = db.Column(db.Integer, db.ForeignKey('group.id'), nullable=True) # One to Many with Group
    attendancy_id = db.Column(db.Integer, db.ForeignKey('attendancy.id'), nullable=True) # One to Many with Attendancy


    

    def __repr__(self):
        return f'<Student {self.name}>'

    def serialize(self):
        return {
            "id": self.id,
            "name": self.name,
            "group_id": self.group_id,
            "attendancy_id": self.attendancy_id,
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
    projects_groups = db.relationship('Group', secondary=projects_groups, lazy='subquery',backref=db.backref('Project', lazy=True)) # Many to Many with Group, dont need line in Group
    projects_students = db.relationship('Student', secondary=projects_students, lazy='subquery',backref=db.backref('Project', lazy=True)) # Many to Many with Student, dont need line in Student
    
    

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