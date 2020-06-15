import React from 'react';
import { Route, Switch } from 'react-router-dom'
import './App.css'
import AppContext from './AppContext'
import { API_URL } from '../config'
import PrivateRoute from '../SignIn/AuthRouting/PrivateRoute'
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
import LogInPage from '../SignIn/LogIn/LogInPage'
import SignUp from '../SignIn/SignUp'
import NotFound from '../NotFound/NotFound'


class App extends React.Component {
  state = {
    reviews: [],
    trips: [],
  };

  componentDidMount() {
    fetch(`${API_URL}/search`)
      .then(res => {
        if(!res.ok) {
            throw new Error('Something went wrong, please try again soon.')
            }
        return res
      })
      .then(res => res.json())
      .then((reviewData) => {
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
        review => review.id.toString() !== reviewToDelete)

    this.setState({
      reviews: newReviewsList
    })
  }

  handleUpdateSelectedTrip = (allTripInfo, trip_id) => {
    const chosenTripIndex = this.state.trips.findIndex(trips => trips.id.toString() === trip_id)

    let newTrips = this.state.trips
    newTrips[chosenTripIndex] = allTripInfo[0]

    this.setState({
      trips: newTrips
    })
  }

  handleStartNewTrip = newTrip => {
    this.setState({
      trips: [...this.state.trips, newTrip]
    })
  }

  handleSetTripsState = allTrips => {
    this.setState({
      trips: allTrips
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
      setTripsState: this.handleSetTripsState,
      updateSelectedTrip: this.handleUpdateSelectedTrip,
    }
    return (
      <AppContext.Provider value={value}>
        <div className="App">
          <Nav />
          <Switch>
            <Route exact path='/' component={LandingPage} />
            <Route exact path='/search' component={SearchPage} />
            
            <Route exact path='/login' component={LogInPage} />
            <Route exact path='/signup' component={SignUp} />

            <PrivateRoute exact path='/review' component={ReviewList} />
            <PrivateRoute exact path='/review/:reviewId' component={ReviewDetails} />
            <PrivateRoute exact path='/new-review' component={NewReview} />

            <PrivateRoute exact path='/new-trip' component={NewTrip} />
            <PrivateRoute exact path='/trip' component={TripList} />
            <PrivateRoute exact path='/trip/:tripId' component={TripDetails} />
            <PrivateRoute exact path='/trip/:tripId/day/:dayId' component={AddActivity} />
            <PrivateRoute exact path='/trip/:tripId/day/:dayId/edit/:activityId' component={EditActivity} />
            
            <Route component={NotFound} />
          </Switch>
        </div>
      </AppContext.Provider>
    );
  }
}

export default App;
