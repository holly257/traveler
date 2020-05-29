import React from 'react';
import { Route } from 'react-router-dom'
import './App.css'
import Nav from './nav/Nav'
import LandingPage from './LandingPage/LandingPage'
import SearchPage from './SearchPage/SearchPage'
import NewReview from './Review/NewReview'

function App() {
  return (
    <div className="App">
      <Nav />
      <Route exact path='/' component={LandingPage} />
      <Route path='/search' component={SearchPage} />
      <Route path='/new-review' component={NewReview} />
    </div>
  );
}

export default App;
