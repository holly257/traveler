import React from 'react';
import { Route } from 'react-router-dom'
import './App.css'
import Nav from './nav/Nav'
import LandingPage from './LandingPage/LandingPage'
import SearchPage from './SearchPage/SearchPage'
import NewReview from './Review/NewReview'
import TripList from './Trip/TripList/TripList'
import NewTrip from './Trip/NewTrip/NewTrip'
import LogIn from './SignIn/LogIn'
import SignUp from './SignIn/SignUp'

function App() {
  return (
    <div className="App">
      <Nav />
      <Route exact path='/' component={LandingPage} />
      <Route path='/search' component={SearchPage} />
      <Route path='/new-review' component={NewReview} />
      <Route path='/trip' component={TripList} />
      <Route path='/new-trip' component={NewTrip} />
      <Route path='/login' component={LogIn} />
      <Route path='/signup' component={SignUp} />
    </div>
  );
}

export default App;
