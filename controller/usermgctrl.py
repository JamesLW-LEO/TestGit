from flask import Blueprint, render_template, redirect, url_for, request, session, g, jsonify, Flask
import hashlib
from entity.user import User
from service.usermgservice import UserMgService
from service.userservice import UserService
import math
import json
import os
from datetime import timedelta

usermgcontroller = Blueprint('usermgcontroller', __name__)
userMgService = UserMgService()
# app = Flask(__name__)
# app.config['SECRET_KEY'] = os.urandom(24)  # 设置为24位的字符,每次运行服务器都是不同的，所以服务器启动一次上次的session就清除。
# app.config['PERMANENT_SESSION_LIFETIME'] = timedelta(minutes=30)  # 设置session的保存时间。

uname = ''


@usermgcontroller.route('/usermg/<name>/')
def usermg(name):
    # print(name)
    global uname
    uname = name
    user = User()
    user.username = uname
    result = userMgService.getUserByName(user)
    # print(result)
    return render_template('user/index.html', result=result)


@usermgcontroller.route('/usermain')
def usermain():
    user = User()
    user.username = uname
    result = userMgService.getUserByName(user)
    # print(result)
    return render_template('user/index.html', result=result)


@usermgcontroller.route('/setUserPwd')
def setUserPwd():
    pwdvalue = request.args.get('pwdvalue')
    user = User()
    user.username = uname
    # print(pwdvalue,user)
    result = userMgService.setUserPwd(user, pwdvalue)
    if result:
        return redirect('/usermain')


@usermgcontroller.route('/setUserTel')
def setUserTel():
    telvalue = request.args.get('telvalue')
    user = User()
    user.username = uname
    print(telvalue, user)
    result = userMgService.setUserTel(user, telvalue)
    if result:
        return redirect('/usermain')


@usermgcontroller.route('/getjobinfo')
def getjobinfo():
    pageNO = request.args.get('pageNO')
    currentPage = request.args.get('currentPage')
    if pageNO == "" or pageNO == None:
        pageNO = 10
    else:
        pageNO = int(pageNO)
    if currentPage == "" or currentPage == None:
        currentPage = 1
    else:
        currentPage = int(currentPage)
    count = userMgService.getJobNum()
    totalPage = math.ceil(count[0][0] / pageNO)
    results = userMgService.getLimitJob(currentPage, pageNO)
    return render_template('user/jobinfo.html', results=results, pageNO=pageNO, currentPage=currentPage,
                           totalPage=totalPage)


@usermgcontroller.route('/getsortjobinfo', methods=['GET', 'POST'])
def getsortjobinfo():
    position = request.form['position']
    city = request.form['city']
    print(position, city)
    if position == "" and city == "全国":
        pageNO = request.args.get('pageNO')
        currentPage = request.args.get('currentPage')
        if pageNO == "" or pageNO == None:
            pageNO = 10
        else:
            pageNO = int(pageNO)
        if currentPage == "" or currentPage == None:
            currentPage = 1
        else:
            currentPage = int(currentPage)
        count = userMgService.getJobNum()
        totalPage = math.ceil(count[0][0] / pageNO)
        results = userMgService.getLimitJob(currentPage, pageNO)
        return render_template('user/jobinfo.html', results=results, pageNO=pageNO, currentPage=currentPage,
                               totalPage=totalPage)
    elif position != "" and city == "全国":
        pageNO = request.args.get('pageNO')
        currentPage = request.args.get('currentPage')
        if pageNO == "" or pageNO == None:
            pageNO = 10
        else:
            pageNO = int(pageNO)
        if currentPage == "" or currentPage == None:
            currentPage = 1
        else:
            currentPage = int(currentPage)
        count = userMgService.getJobNumPos(position)
        # print(count)
        totalPage = math.ceil(count[0][0] / pageNO)
        results = userMgService.getLimitJobPos(position, currentPage, pageNO)
        if results:
            return render_template('user/jobinfo.html', results=results, pageNO=pageNO, currentPage=currentPage,
                                   totalPage=totalPage)
        else:
            message = "对不起，没有找到符合你条件的职位！"
            return render_template('user/jobinfo.html', message=message, pageNO=pageNO, currentPage=currentPage,
                                   totalPage=totalPage)
    elif position == "" and city != "全国":
        pageNO = request.args.get('pageNO')
        currentPage = request.args.get('currentPage')
        if pageNO == "" or pageNO == None:
            pageNO = 10
        else:
            pageNO = int(pageNO)
        if currentPage == "" or currentPage == None:
            currentPage = 1
        else:
            currentPage = int(currentPage)
        count = userMgService.getJobNumCity(city)
        totalPage = math.ceil(count[0][0] / pageNO)
        results = userMgService.getLimitJobCity(city, currentPage, pageNO)
        if results:
            return render_template('user/jobinfo.html', results=results, pageNO=pageNO, currentPage=currentPage,
                                   totalPage=totalPage)
        else:
            message = "对不起，没有找到符合你条件的职位！"
            return render_template('user/jobinfo.html', message=message, pageNO=pageNO, currentPage=currentPage,
                                   totalPage=totalPage)
    elif position != "" and city != "全国":
        pageNO = request.args.get('pageNO')
        currentPage = request.args.get('currentPage')
        if pageNO == "" or pageNO == None:
            pageNO = 10
        else:
            pageNO = int(pageNO)
        if currentPage == "" or currentPage == None:
            currentPage = 1
        else:
            currentPage = int(currentPage)
        count = userMgService.getJobNumCP(position, city)
        print(count)
        totalPage = math.ceil(count[0][0] / pageNO)
        results = userMgService.getLimitJobPC(position, city, currentPage, pageNO)
        if results:
            return render_template('user/jobinfo.html', results=results, pageNO=pageNO, currentPage=currentPage,
                                   totalPage=totalPage)
        else:
            message = "对不起，没有找到符合你条件的职位！"
            return render_template('user/jobinfo.html', message=message, pageNO=pageNO, currentPage=currentPage,
                                   totalPage=totalPage)


@usermgcontroller.route('/sortminsalary')
def sortminsalary():
    pageNO = request.args.get('pageNO')
    currentPage = request.args.get('currentPage')
    if pageNO == "" or pageNO == None:
        pageNO = 10
    else:
        pageNO = int(pageNO)
    if currentPage == "" or currentPage == None:
        currentPage = 1
    else:
        currentPage = int(currentPage)
    count = userMgService.getJobNum()
    totalPage = math.ceil(count[0][0] / pageNO)
    results = userMgService.getLimitJobByMin(currentPage, pageNO)
    return render_template('user/jobinfo.html', results=results, pageNO=pageNO, currentPage=currentPage,
                           totalPage=totalPage)


@usermgcontroller.route('/sortmaxsalary')
def sortmaxsalary():
    pageNO = request.args.get('pageNO')
    currentPage = request.args.get('currentPage')
    if pageNO == "" or pageNO == None:
        pageNO = 10
    else:
        pageNO = int(pageNO)
    if currentPage == "" or currentPage == None:
        currentPage = 1
    else:
        currentPage = int(currentPage)
    count = userMgService.getJobNum()
    totalPage = math.ceil(count[0][0] / pageNO)
    results = userMgService.getLimitJobByMax(currentPage, pageNO)
    return render_template('user/jobinfo.html', results=results, pageNO=pageNO, currentPage=currentPage,
                           totalPage=totalPage)


@usermgcontroller.route('/makeresume')
def makeresume():
    return render_template('user/resume.html')
    pass


@usermgcontroller.route('/login')
def login():
    return render_template('login.html')
