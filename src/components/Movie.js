import React from 'react';
import PropTypes from 'prop-types';
import './Movie.css';

function Movie({ year, title, genres, summary, poster }) {
  return (
    <div className="movie">
      <img src={poster} alt={title} title={title}/>
      <div className="movie_data">
        <h2 className="movie_title">{title}</h2>
        <ul className="movie_genres">
          {genres.map((genre, index) => {
            return <li key={index} className="movie_genre">{genre}</li>;
          })}
        </ul>
        <p className="movie_year">{year}</p>
        <p className="movie_summary">{summary.slice(0, 180)}...</p>
      </div>
    </div>
  );
}

Movie.propTypes = { 
  year: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
  summary: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
};

export default Movie;