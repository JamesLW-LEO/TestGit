from flask import Flask, render_template, request, redirect, jsonify
from controller.userctrl import usercontroller
from controller.jobctrl import jobcontroller
from controller.usermgctrl import usermgcontroller
from dao.jobdao import JobDAO

app = Flask(__name__)
app.register_blueprint(usercontroller)
app.register_blueprint(jobcontroller)
app.register_blueprint(usermgcontroller)
jobDAO = JobDAO()


@app.route('/')
def index():
    return render_template('index.html')


@app.route('/video')
def video():
    return render_template('video.html')



if __name__ == '__main__':
    app.run(host='10.0.11.65', port="5000", debug=True)
    # app.run()

# --host=10.0.11.99 --port=8080
