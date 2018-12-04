import sqlalchemy
from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session
from sqlalchemy import create_engine, func
from sqlalchemy.sql import label

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
  return (
        f"Available Routes:<br/>"
        f"/map<br/>"
        f"/graphs<br/>"
        f"/directors<br/>"
    
    )

@app.route("/map")
def map():
    sel1=[Movies.movie_title, Movies.director_name, Movies.gross, Movies.genres, Movies.country, Movies.content_rating, Movies.budget, Movies.title_year, Movies.Longitude, Movies.Latitude]
    country_data = session.query(*sel1).all()
    data1 = []
    for d in country_data:
        data1.append({
               "movie_title":d[0],
                "director_name":d[1],
                "gross":d[2],
                "genres":d[3],
                "country":d[4],
                "content_rating":d[5],
                "budget":d[6],
                "title_year":d[7],
                "Latitude":d[8],
                "Longitude":d[9]})
    return jsonify(data1)
   

@app.route("/graphs")
def graphs():
   
    sel2=[Movies.movie_title, Movies.director_name, Movies.gross, Movies.genres, Movies.country, Movies.content_rating, Movies.budget, Movies.title_year, Movies.Longitude, Movies.Latitude]
    graph_data = session.query(*sel2).all()
    data2 = []
    for d in graph_data:
        data2.append({
               "movie_title":d[0],
                "director_name":d[1],
                "gross":d[2],
                "genres":d[3],
                "country":d[4],
                "content_rating":d[5],
                "budget":d[6],
                "title_year":d[7],
                "Latitude":d[8],
                "Longitude":d[9]})
    return jsonify(data2)

@app.route("/directors")
def directors():
    sel3=[Movies.movie_title, Movies.director_name, Movies.gross, Movies.genres, Movies.country, Movies.content_rating, Movies.budget, Movies.title_year, Movies.Longitude, Movies.Latitude]
    director_data = session.query(*sel3).all()
    data3 = []
    for d in director_data:
        data3.append({
               "movie_title":d[0],
                "director_name":d[1],
                "gross":d[2],
                "genres":d[3],
                "country":d[4],
                "content_rating":d[5],
                "budget":d[6],
                "title_year":d[7],
                "Latitude":d[8],
                "Longitude":d[9]})
    return jsonify(data3)
