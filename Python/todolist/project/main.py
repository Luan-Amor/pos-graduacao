from flask import Blueprint, render_template, request, redirect
from flask_login import login_required, current_user
from .models import Task
from . import db

main = Blueprint('main', __name__)

@main.route('/')
def index():
    return render_template('index.html')

@main.route('/todo',  methods=['GET', 'POST'])
@login_required
def todo():
    """root route"""
    if request.method == 'POST':
        categ = 'comum'
        if request.form['category']:
            categ = request.form['category']

        task = Task(description=request.form['description'], status="todo", category=categ)
        try:
            db.session.add(task)
            db.session.commit()
            return redirect('/todo')
        except:
            return "Houve um erro, ao inserir a tarefa"
    else:
        tasks = Task.query.order_by(Task.date_created).all()
        return render_template('todo.html', tasks=tasks)