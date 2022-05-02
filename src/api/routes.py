"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, Professor, Student, Group, Course, Project, Attendancy
from api.utils import generate_sitemap, APIException
import datetime
from flask_jwt_extended import create_access_token
from flask_jwt_extended import get_jwt_identity
from flask_jwt_extended import jwt_required
from flask_jwt_extended import JWTManager
from werkzeug.security import generate_password_hash, check_password_hash
api = Blueprint('api', __name__)




@api.route('/allstudents', methods=['GET'])
def get_all_students():
    students = Student.query.all()
    
    return jsonify({'results': list(map(lambda student: student.serialize(), students))}),200

@api.route('/signupteacher', methods=["POST"])
def signupTeacher():

    
    email = request.json.get('email', None)
    password = request.json.get('password', None)
    repeatpassword = request.json.get('repeatpassword', None)
    type = request.json.get('type', None)
    
    if not (email and password and type and repeatpassword):
        return jsonify({'message': 'Data not provided'}), 400

    hash_password = generate_password_hash(password)
    proffesor = Professor(email=email, password=hash_password, type_of_professor=type)
    try:

        db.session.add(proffesor)
        db.session.commit()
        token = create_access_token(identity=proffesor.id, expires_delta = datetime.timedelta(minutes=60))
        return jsonify({'token': token}), 201

    except Exception as err:
        return jsonify({'message': str(err)}), 500

@api.route('/login', methods=['POST'])
def login():
    
    email = request.json.get('email', None)
    password = request.json.get('password', None)

    if not (email and password):
        return jsonify({'message': 'Data not provided'}), 400

    # traer de mi base de datos un usuario por su email
    professor = Professor.query.filter_by(email=email).one_or_none()       

    if not professor:
        return jsonify({'message': 'Email is not valid'}), 404

    # comprobar si la contraseña es correcta
    if not check_password_hash(professor.password, password):
        return jsonify({'message': 'Your pass doesn"t match'}), 500

    token = create_access_token(identity=professor.id, expires_delta = datetime.timedelta(minutes=60))

    
    return jsonify({'token':token, 'professor':professor.serialize()}), 200