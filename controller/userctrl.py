from flask import Blueprint, render_template, redirect, url_for, request, session, g, jsonify
import hashlib
from entity.user import User
from service.userservice import UserService
import math
import json

usercontroller = Blueprint('usercontroller', __name__)
userService = UserService()


@usercontroller.route('/login')
def login():
    return render_template('login.html')


@usercontroller.route('/loginValidate', methods=['GET', 'POST'])
def loginValidate():
    username = request.form['username']
    userpwd = request.form['userpwd']
    user = User()
    user.username = username
    user.userpwd = userpwd
    result = userService.getUserByNamePwd(user)
    if result:
        return render_template('index.html', result=result)
    else:
        msg = "用户名或密码错误!"
        return render_template('login.html', msg=msg)


@usercontroller.route('/register')
def register():
    return render_template('register.html')


@usercontroller.route('/validusername', methods=['GET', 'POST'])
def validusername():
    username = request.form['username']
    # print(username)
    user = User()
    user.username = username
    result = userService.getAllUserByName(user)
    # print(result)
    # print(type(result))
    if str(result) == "1":
        return '1'
    else:
        return '0'


@usercontroller.route('/registerS', methods=['GET', 'POST'])
def registerS():
    username =request.form['username']
    userpwd = request.form['userpwd']
    usertel = request.form['tel']
    user = User()
    user.username = username
    user.userpwd = userpwd
    user.usertel = usertel
    result = userService.getInsertUser(user)
    if result:
        feedback = "注册成功！"
        return render_template('login.html',feedback = feedback)
    else:
        feedback = "注册失败！"
        return render_template('register.html', feedback=feedback)
    pass


@usercontroller.route('/logout')
def logout():
    return redirect('/')
