from datetime import datetime
from flask import Blueprint, render_template, redirect, url_for, request, flash
from werkzeug.security import generate_password_hash, check_password_hash
from flask_login import login_user, logout_user, login_required
from .models import User, Task
from . import db

auth = Blueprint('auth', __name__)

@auth.route('/login')
def login():
    return render_template('login.html')

@auth.route('/login', methods=['POST'])
def login_post():
    email = request.form.get('email')
    password = request.form.get('password')
    remember = True if request.form.get('remember') else False

    user = User.query.filter_by(email=email).first()

    # check if user actually exists
    # take the user supplied password, hash it, and compare it to the hashed password in database
    if not user or not check_password_hash(user.password, password): 
        flash('Please check your login details and try again.')
        return redirect(url_for('auth.login')) # if user doesn't exist or password is wrong, reload the page

    # if the above check passes, then we know the user has the right credentials
    login_user(user, remember=remember)
    return redirect(url_for('main.todo'))

@auth.route('/signup')
def signup():
    return render_template('signup.html')

@auth.route('/signup', methods=['POST'])
def signup_post():

    email = request.form.get('email')
    name = request.form.get('name')
    password = request.form.get('password')

    user = User.query.filter_by(email=email).first() # if this returns a user, then the email already exists in database

    if user: # if a user is found, we want to redirect back to signup page so user can try again  
        flash('Email address already exists')
        return redirect(url_for('auth.signup'))

    # create new user with the form data. Hash the password so plaintext version isn't saved.
    new_user = User(email=email, name=name, password=generate_password_hash(password, method='sha256'))

    # add the new user to the database
    db.session.add(new_user)
    db.session.commit()

    return redirect(url_for('auth.login'))

@auth.route('/logout')
@login_required
def logout():
    logout_user()
    return redirect(url_for('main.index'))

# TO DO

@auth.route('/delete/<int:id>')
@login_required
def delete(id):
    """delete a task"""
    task = Task.query.get_or_404(id)
    try:
        db.session.delete(task)
        db.session.commit()
        return redirect('/todo')
    except:
        return "Houve um erro, ao inserir a tarefa"


@auth.route('/update/<int:id>', methods=['GET', 'POST'])
@login_required
def update(id):
    """update route"""
    task = Task.query.get_or_404(id)
    if request.method == 'POST':
        task.description = request.form['description']
        try:
            db.session.commit()
            return redirect('/todo')
        except:
            return "Houve um erro, ao atualizar a tarefa"
    else:
        return render_template('update.html', task=task)

@auth.route('/update/status/<int:id>', methods=['POST'])
@login_required
def updateStatus(id):
    """update status task"""
    task = Task.query.get_or_404(id)
    if request.method == 'POST':
        if task.status == 'todo':
            task.status = 'doing'
            task.start_at = datetime.now()
        else:
            task.status = 'done'
            task.end_at = datetime.now()
            difference = task.end_at - task.start_at
            seconds_in_day = 24 * 60 * 60
            value = divmod(difference.days * seconds_in_day + difference.seconds, 60)
            task.time_worked = value[0]
        try:
            db.session.commit()
            return redirect('/todo')
        except:
            return "Houve um erro, ao atualizar a tarefa"
    else:
        return redirect('/todo')