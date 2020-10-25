import React from 'react';
import axios from 'axios';
import Movie from '../components/Movie';
import './Home.css';

// state를 사용하기 위해 클래스형 컴포넌트 사용
// react가 제공하는 컴포넌트를 상속받는다
class Home extends React.Component {
  state = {
    isLoading: true,
    movies: [],
  };

  // axios를 사용하여 api를 호출
  // 데이터를 가져오는데 시간이 필요한 비동기 함수로 async, await를 사용
  getMovies = async () => {
    const {
      data: {
        data: { movies },
      },
    } = await axios.get('https://yts-proxy.now.sh/list_movies.json?sort_by=like_count');

    // 데이터를 state에 저장
    // movies: movies를 movies로 축약가능
    this.setState({ movies, isLoading: false });
  }

  // 컴포넌트가 처음 화면에 그려질때 실행 (생명주기 함수)
  componentDidMount() {
    this.getMovies();
  }

  // 클래스형 컴포넌트는 render() 함수를 사용하여 JSX를 반환
  render() {
    const { isLoading, movies } = this.state;
    return (
      <section>
        <h1 className="app_title">Top 20 Movies</h1>
        <div className="container">
          {/* 영화 데이터 로딩 상태 표시 */}
          {isLoading ? (
            <div className="loader">
              <span className="loader_text">Loading...</span>
            </div> 
          ) : (
            <div className="movies">
              {/* map() 함수를 사용하여 movie컴포넌트에 props전달 */}
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