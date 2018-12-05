import sqlalchemy
from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session
from sqlalchemy import create_engine, func
from sqlalchemy.sql import label

from flask import Flask, jsonify, render_template, redirect, request, send_from_directory

#################################################
# Database Setup
#################################################


#Flask set up
app = Flask(__name__,static_url_path='')

@app.route('/')
def root():
    return app.send_static_file('index.html')

#@app.route('/static/jss/<path>')
#def send_js(path):
#    return send_from_directory('/static/jss', path)

#@app.route('/static/css/<path>')
#def send_css(path):
#    return send_from_directory('/static/css', path)

@app.route("/data")
def data():
    engine = create_engine("sqlite:///movie_data.sqlite")

# reflect an existing database into a new model
    Base = automap_base()
# reflect the tables
    Base.prepare(engine, reflect=True)

# Save reference to the table
    Movies = Base.classes.movies

# Create our session (link) from Python to the DB
    session = Session(engine)
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
   



if __name__ == '__main__':
    app.run(debug=True)
