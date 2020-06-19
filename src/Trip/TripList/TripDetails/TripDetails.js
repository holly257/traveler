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
        const selectedTrip = this.context.trips.find(trip => 
            trip.id.toString() === this.props.match.params.tripId
        )

        if(!selectedTrip){
            return (
                <div>Loading...</div>

            )
        }
        if(!selectedTrip.days){
            return (
                <section id='main-trip'>
                    <div id='container'>
                    <Link className='back-to-trip-list' to={`/trip`}>Back</Link>
                    <br />
                        <form>
                            <h5 className='trip-name'>{selectedTrip.name}</h5>
                            <h6 className='trip-details'>{selectedTrip.city}, {selectedTrip.country}</h6>

                            <button  className='back-to-trip-list' onClick={(e) => this.AddAnotherDay(e)} >Add Day</button>
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
                            <Link className='back-to-trip-list' to={`/trip`}>Back</Link>
                            <br />
                                <form>
                                    <h5 className='trip-name'>{selectedTrip.name}</h5>
                                    <h6 className='trip-details'>{selectedTrip.city}, {selectedTrip.country}</h6>
                                     
                                    {selectedTrip.days.map((day, index) => {
                                        return (
                                            <React.Fragment key={index}>                                              
                                                <div  id='day-cont'>
                                                    <p>Day {index+1}</p>

                                                    {/* sort by start_time  */}
                                                        {!day.activities ? '' : day.activities.map((activity, index) => {
                                                            return (
                                                                <span key={index} id='day'>                                                
                                                                    <h5 className='start_time'>{activity.start_time} {activity.meridiem}</h5>
                                                                    <p id='trip-details-activity' className='activity'>{activity.activity}</p>
                                                                    <Link className='edit-btn' to={`/trip/${selectedTrip.id}/day/${day.days_id }/edit/${activity.id}`}>Edit</Link>
                                                                    <hr />
                                                                </span>
                                                            )
                                                        })}
                                                        
                                                        <Link className='add-activity' to={`/trip/${selectedTrip.id}/day/${day.days_id}`}>Add Activity</Link>
                                                </div>
                                                <br />
                                            </React.Fragment>
                                        )
                                    })}
                                    <button className='add-day' onClick={(e) => this.AddAnotherDay(e)} >Add Day</button>
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