import numpy as np

import sqlalchemy
from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session
from sqlalchemy import create_engine, func

from flask import Flask, jsonify, render_template, redirect

#################################################
# Database Setup
#################################################
engine = create_engine("sqlite:///movie_data.sqlite")

# reflect an existing database into a new model
Base = automap_base()
# reflect the tables
Base.prepare(engine, reflect=True)

# Save reference to the table
Movies = Base.classes.movies

# Create our session (link) from Python to the DB
session = Session(engine)

#Flask set up
app = Flask(__name__)


@app.route("/")
def index():
    #put stuff here
@app.route("/map")
def map():
    country_data = session.query(label("total_movies", func.count(Movies.movie_title)),\
                                 label("total_gross", func.sum(Movies.gross)),\
                                 label("total_budget", func.sum(Movies.budget))).\
                                 group_by(Movies.country).all()
    
    return render_template("Map.html", country_data=country_data)

@app.route("/graphs")
def graphs():
    graph_data = session.query(Movies).all()
    return render_template("Graphs.html", graph_data=graph_data)

@app.route("/directors")
def directors():
    director_data = session.query(Movies).all()
    return render_template("Directors.html", director_data=director_data)

