import React from 'react';
import PropTypes from 'prop-types';
import './Movie.css';
import { Link } from 'react-router-dom';

// state가 필요하지 않으므로 함수형 컴포넌트를 사용
function Movie({ year, title, genres, summary, poster }) {
  return (
    <div className="movie">
      <Link to={{ pathname: '/movie_detail', state: { year, title, summary, poster, genres }}}>
        {/* 포스터 이미지 */}
        <img src={poster} alt={title} title={title}/>
        {/* 영화 데이터 */}
        <div className="movie_data">
          <h2 className="movie_title">{title}</h2>
          <ul className="movie_genres">
            {genres.map((genre, index) => {
              return <li key={index} className="movie_genre">{genre}</li>;
            })}
          </ul>
          <p className="movie_year">{year}</p>
          {/* 줄거리는 120자만 잘라서 보여줌 */}
          <p className="movie_summary">{summary.slice(0, 120)}...</p>
        </div>
      </Link>
    </div>
  );
}

// 넘어와야 하는 데이터의 타입을 정의하고 관리하기 위해 proptypes 사용
Movie.propTypes = { 
  year: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
  summary: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
};

export default Movie;