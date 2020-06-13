import React from 'react';
import { Route } from 'react-router-dom'
import './App.css'
import AppContext from './AppContext'
import APIkey from '../config'
// import TokenService from '../services/token-service'
import PrivateRoute from '../SignIn/AuthRouting/PrivateRoute'
// import PublicRoute from '../SignIn/AuthRouting/PublicRoute'
import Nav from '../Nav/Nav'
import LandingPage from '../LandingPage/LandingPage'
import SearchPage from '../SearchPage/SearchPage'
import NewReview from '../Review/NewReview'
import ReviewList from '../Review/ReviewList/ReviewList'
import ReviewDetails from '../Review/ReviewList/ReviewDetails/ReviewDetails'
import TripList from '../Trip/TripList/TripList'
import NewTrip from '../Trip/NewTrip/NewTrip'
import TripDetails from '../Trip/TripList/TripDetails/TripDetails'
import AddActivity from '../Trip/AddActivity/AddActivity'
import EditActivity from '../Trip/EditActivity/EditActivity'
import LogIn from '../SignIn/LogIn'
import SignUp from '../SignIn/SignUp'


class App extends React.Component {
  state = {
    reviews: [],
    trips: [],
  };

  componentDidMount() {
    fetch(`${APIkey}/reviews`)
      .then(res => {
        console.log(res.json())
        if(!res.ok) {
            throw new Error('Something went wrong, please try again soon.')
            }
        return res
      })
      .then(res => res.json())
      .then((reviewData) => {
        console.log(reviewData)
        this.setState({
          reviews: reviewData
        })
      })
      .catch(error => {
        console.error(error)
        this.setState({error: 'Something went wrong. Please try again later.'})
      })

  }
  
  handleAddReview = reviewToAdd => {
    this.setState({
      reviews: [...this.state.reviews, reviewToAdd]
    })
  }

  handleDeleteReview = reviewToDelete => {
    const newReviewsList = this.state.reviews.filter(
        review => review.id != reviewToDelete)

    this.setState({
      reviews: newReviewsList
    })
  }

  handleStartNewTrip = newTrip => {
    this.setState({
      trips: [...this.state.trips, newTrip]
    })
  }

  handleAddDay = (newDay, tripId) => {
    const selectedTrip = this.state.trips.find(trip => 
      trip.id === tripId
    )
    
    selectedTrip.days = [...selectedTrip.days, newDay]
    let newTripsArr = [...this.state.trips]

    this.setState({
      trips: newTripsArr
    })
  }

  handleAddActivity = (newActivity, tripId, dayId) => {
    const selectedTrip = this.state.trips.find(trip => 
      trip.id === tripId
    )

    const selectedDay= selectedTrip.days.find(day => 
      day.day_id === dayId
    )
    
    selectedDay.activity = [...selectedDay.activity, newActivity]

    this.setState({
      trips: [...this.state.trips]
    })
  }

  handleEditActivity = (editedActivity, tripId, dayId, activityId) => {
    const selectedTrip = this.state.trips.find(trip => 
      trip.id === tripId
    )

    const selectedDay= selectedTrip.days.find(day => 
      day.day_id === dayId
    )

    const selectedActivityIndex = selectedDay.activity.findIndex(activity =>
      activity.activity_id === activityId
    )
    
    selectedDay.activity[selectedActivityIndex] = editedActivity

    this.setState({
      trips: [...this.state.trips]
    })
  }

  render(){
    const value = {
      trips: this.state.trips,
      reviews: this.state.reviews,
      addReview: this.handleAddReview,
      deleteReview: this.handleDeleteReview,
      startNewTrip: this.handleStartNewTrip,
      addDay: this.handleAddDay,
      addActivity: this.handleAddActivity,
      editActivity: this.handleEditActivity,
    }
    return (
      <AppContext.Provider value={value}>
        <div className="App">
          <Nav />
          <Route exact path='/' component={LandingPage} />
          <Route path='/search' component={SearchPage} />

          <PrivateRoute exact path='/review' component={ReviewList} />
          <PrivateRoute exact path='/review/:reviewId' component={ReviewDetails} />
          <PrivateRoute path='/new-review' component={NewReview} />
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
