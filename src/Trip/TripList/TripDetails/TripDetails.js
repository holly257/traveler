import React from 'react';
import './TripDetails.css'
import AppContext from '../../../App/AppContext'
import { Link } from 'react-router-dom'
import TokenService from '../../../services/token-service'
import { API_URL } from '../../../config'
import { Route, Switch } from 'react-router-dom'
import AddActivity from '../../AddActivity/AddActivity'
import EditActivity from '../../EditActivity/EditActivity'
import PrivateRoute from '../../../SignIn/AuthRouting/PrivateRoute'

class TripDetails extends React.Component {
    static contextType = AppContext;

    state = {
        chosenTrip: [],
    }

    componentDidMount() {
        const trip_id = this.props.match.params.tripId
        const options = {
            method: 'GET',
            headers: {
                'content-type': 'application/json',
                'authorization': `bearer ${TokenService.getAuthToken()}`
            }
        }
         
        fetch(`${API_URL}/trips/${trip_id}`, options)
        .then(res => {
            if(!res.ok) {
                throw new Error('Trip detail fetch failed, please try again later.')
            }
            return res
        })
        .then(res => res.json())
        .then((tripData) => {
            this.setState({chosenTrip: tripData})
            this.context.updateSelectedTrip(tripData, trip_id)
            
        })
        .catch(error => {
            console.error(error)
            this.setState({error: 'Something went wrong. Please try again later.'})
        })
    }

    AddAnotherDay = e => {
        e.preventDefault()

        const tripId = this.props.match.params.tripId
        const newDay = {
            trip_id: tripId
        }

        const options = {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'authorization': `bearer ${TokenService.getAuthToken()}`
            },
            body: JSON.stringify(newDay),   
        }
        fetch(`${API_URL}/days`, options)
        .then(res => {
            if(!res.ok) {
                throw new Error('Trip detail fetch failed, please try again later.')
            }
            return res
        })
        .then(res => res.json())
        .then((tripData) => {
            const newData = {
                days_id: tripData.id,
                trip_id: tripData.trip_id
            }
            this.context.addDay(newData, tripId)

        })
        .catch(error => {
            console.error(error)
            this.setState({error: 'Something went wrong. Please try again later.'})
        })
    
    }

    render () { 
        // const selectedTrip = this.context.trips.find(trip => 
        //     trip.id === this.props.match.params.tripId
        // )
        
        const selectedTrip = this.state.chosenTrip
        console.log(selectedTrip[0])
        if(!selectedTrip[0]){
            return (
                <div>Loading...</div>

            )
        }
        if(!selectedTrip[0].days){
            return (
                <section id='main-trip'>
                    <div id='container'>
                    <Link to={`/trip`}>Back</Link>
                    <br />
                        <form>
                            <h6>{selectedTrip[0].name}</h6>
                            <h6>{selectedTrip[0].city}, {selectedTrip[0].country}</h6>

                            <button onClick={(e) => this.AddAnotherDay(e)} className='new-trip-btns'>Add Day</button>
                        </form>
                    </div>
                </section>
            )
        } else {
            return (
                <Switch>
                    <Route exact path={`/trip/:tripId`}>
                        <section id='main-trip'>
                            <div id='container'>
                            <Link to={`/trip`}>Back</Link>
                            <br />
                                <form>
                                    <h6>{selectedTrip[0].name}</h6>
                                    <h6>{selectedTrip[0].city}, {selectedTrip[0].country}</h6>
                                     
                                    {selectedTrip[0].days.map((day, index) => {
                                        return (
                                            <React.Fragment key={index}>                                              
                                                <div  id='day-cont'>
                                                    <p>Day {index+1}</p>

                                                    {/* sort by start_time  */}
                                                        {!day.activities ? '' : day.activities.map((activity, index) => {
                                                            return (
                                                                <span key={index} id='day'>
                                                                    <h6 name='start_time'>{activity.start_time}</h6>
                                                                    <h6 name='meridiem'>{activity.meridiem}</h6>
                                                                    <p id='trip-details-activity' name='activity'>{activity.activity}</p>
                                                                    <Link to={`/trip/${selectedTrip.id}/day/${day.days_id }/edit/${activity.id}`}>Edit</Link>
                                                                    <hr />
                                                                </span>
                                                            )
                                                        })}
                                                        
                                                        <Link to={`/trip/${selectedTrip[0].id}/day/${day.days_id}`}>Add Activity</Link>
                                                </div>
                                                <br />
                                            </React.Fragment>
                                        )
                                    })}
                                    <button onClick={(e) => this.AddAnotherDay(e)} className='new-trip-btns'>Add Day</button>
                                </form>
                            </div>
                        </section>
                    </Route>
                    <PrivateRoute exact path={'/trip/:tripId/day/:dayId'} component={AddActivity} />
                    <PrivateRoute exact path={'/trip/:tripId/day/:dayId/edit/:activityId'} component={EditActivity} />
                </Switch>
            )
        } 
    }
}

export default TripDetails;