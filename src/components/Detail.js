import React from 'react';
import './Detail.css';

class Detail extends React.Component {
  // render() -> componentDidMount() 순서로 함수가 실행하므로 두 함수 모두
  // location.state에 들어온 데이터가 없다면 Home으로 돌려보내는 다이렉트를 설정해준다.
  componentDidMount() {
    const { location, history } = this.props;
    if( location.state === undefined ) {
      history.push('/');
    }
  }

  render() {
    const { location } = this.props;
    if( location.state ) {
      const { year, title, genres, summary, poster } = location.state;
      return (
        <div className="movie_detail">
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
            {/* 줄거리는 140자만 잘라서 보여줌 */}
            <p className="movie_summary">{summary}</p>
          </div>
        </div>
      );
    }
    else {
      return null;
    }
  }
}

export default Detail;