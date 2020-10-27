import React from 'react';
import './App.css';
import { HashRouter, Route } from 'react-router-dom';
import Home from './routes/Home';
import About from './routes/About';
import Navigation from './components/Navigation';
import Detail from './components/Detail';

function App() {
  return (
  <HashRouter>
    <Navigation />
    {/* Route는 두가지 props (path, component)를 전달한다
        path가 정확히 "/"일때만 Home을 출력하도록 exact 추가 */}
    <Route path="/" exact={true} component={Home} />
    <Route path="/about" component={About} />
    <Route path="/movie_detail" component={Detail} />
  </HashRouter>
  );
}

export default App;