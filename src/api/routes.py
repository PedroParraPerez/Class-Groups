"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, Professor, Student, Group, Course, Project, Attendancy
from api.utils import generate_sitemap, APIException

from flask_jwt_extended import create_access_token
from flask_jwt_extended import get_jwt_identity
from flask_jwt_extended import jwt_required
from flask_jwt_extended import JWTManager

api = Blueprint('api', __name__)




@api.route('/allstudents', methods=['GET'])
def get_all_students():
    students = Student.query.all()
    
    return jsonify({'results': list(map(lambda student: student.serialize(), students))}),200