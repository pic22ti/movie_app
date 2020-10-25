import React from 'react';
import axios from 'axios';
import Movie from '../components/Movie';
import './Home.css';

class Home extends React.Component {
  state = {
    isLoading: true,
    movies: [],
  };
  getMovies = async () => {
    // 구조 분해 할당
    const {
      data: {
        data: { movies },
      },
    } = await axios.get('https://yts-proxy.now.sh/list_movies.json?sort_by=like_count');
    // 객체의 키와 대입할 변수의 이름이 같으면 코드를 축약할 수 있음
    // movies: movies
    // movies
    this.setState({ movies, isLoading: false });
  }

  componentDidMount() {
    // 영화 데이터 로딩
    this.getMovies();
  }

  render() {
    // 구조 분해 할당
    const { isLoading, movies } = this.state;
    return (
      <section>
        <h1 className="app_title">Top 20 Movies</h1>
        <div className="container">
          {isLoading ? (
            <div className="loader">
              <span className="loader_text">Loading...</span>
            </div> 
          ) : (
            <div className="movies">
              {movies.map((movie) => {
                return (<Movie 
                  key={movie.id}
                  id={movie.id}
                  year={movie.year}
                  title={movie.title}
                  genres={movie.genres}
                  summary={movie.summary}
                  poster={movie.medium_cover_image}
                />);
              })}
            </div>
          )}
        </div>
      </section>
    );
  } 
}

export default Home;