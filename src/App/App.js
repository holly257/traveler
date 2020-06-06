import React from 'react';
import { Route } from 'react-router-dom'
import './App.css'
import Nav from '../Nav/Nav'
import LandingPage from '../LandingPage/LandingPage'
import SearchPage from '../SearchPage/SearchPage'
import NewReview from '../Review/NewReview'
import TripList from '../Trip/TripList/TripList'
import NewTrip from '../Trip/NewTrip/NewTrip'
import TripDetails from '../Trip/TripList/TripDetails/TripDetails'
import AddActivity from '../Trip/AddActivity/AddActivity'
import EditActivity from '../Trip/EditActivity/EditActivity'
import LogIn from '../SignIn/LogIn'
import SignUp from '../SignIn/SignUp'
import store from '../STORE'
import AppContext from './AppContext'

class App extends React.Component {
  state = {
    trips: [],
    reviews: [],
  };

  componentDidMount() {
    this.setState(store);
  }

  handleAddReview = reviewToAdd => {
    this.setState({
      reviews: [...this.state.reviews, reviewToAdd]
    })
  }

  handleStartNewTrip = newTrip => {
    this.setState({
      trips: [...this.state.trips, newTrip]
    })
  }

  handleAddDay = (newDay, tripId) => {
    const selectedTrip = this.state.trips.find(trip => 
      trip.trip_id === tripId
    )
    
    selectedTrip.days = [...selectedTrip.days, newDay]
    let newTripsArr = [...this.state.trips]

    this.setState({
      trips: newTripsArr
    })
  }

  handleAddActivity = (newActivity, tripId, dayId) => {
    const selectedTrip = this.state.trips.find(trip => 
      trip.trip_id === tripId
    )

    const selectedDay= selectedTrip.days.find(day => 
      day.day_id === dayId
    )
    
    selectedDay.activity = [...selectedDay.activity, newActivity]

    this.setState({
      trips: [...this.state.trips]
    })
  }

  render(){
    const value = {
      trips: this.state.trips,
      reviews: this.state.reviews,
      addReview: this.handleAddReview,
      startNewTrip: this.handleStartNewTrip,
      addDay: this.handleAddDay,
      addActivity: this.handleAddActivity,
    }
    return (
      <AppContext.Provider value={value}>
        <div className="App">
          <Nav />
          <Route exact path='/' component={LandingPage} />
          <Route path='/search' component={SearchPage} />
          <Route path='/new-review' component={NewReview} />
          <Route exact path='/trip' component={TripList} />
          <Route path='/new-trip' component={NewTrip} />
          <Route path='/login' component={LogIn} />
          <Route path='/signup' component={SignUp} />
          <Route exact path='/trip/:tripId' component={TripDetails} />
          <Route exact path='/trip/:tripId/day/:dayId' component={AddActivity} />
          <Route exact path='/trip/:tripId/day/:dayId/edit/:activityId' component={EditActivity} />
        </div>
      </AppContext.Provider>
    );
  }
}

export default App;
