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
    state = { error: null }

    AddAnotherDay = e => {
        e.preventDefault()
        this.setState({ error: null })

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

    handleDeleteActivity = e => {
        e.preventDefault()
        
        const dayId = e.target.name
        const tripId = e.target.value
        const activity_id = e.target.id

        const options = {
            method: 'DELETE',
            headers: {
                'content-type': 'application/json',
                'authorization': `bearer ${TokenService.getAuthToken()}`
            }
        }

        fetch(`${API_URL}/activities/${activity_id}`, options)
        .then(res => {
            if(!res.ok) {
                return res.json().then(error => {
                    throw error
                })
            }
            return
        })
        .then(() => {
            this.context.deleteActivity(activity_id, dayId, tripId)
        })
        .catch(error => {
            console.error({error})
            this.setState({error: 'Something went wrong. Please try again later.'})
        }) 
    }

    handleDeleteDay = e => {
        e.preventDefault()
        
        const dayId = e.target.name
        const tripId = e.target.value
        console.log(dayId, tripId)

        const options = {
            method: 'DELETE',
            headers: {
                'content-type': 'application/json',
                'authorization': `bearer ${TokenService.getAuthToken()}`
            }
        }

        fetch(`${API_URL}/days/${dayId}`, options)
        .then(res => {
            if(!res.ok) {
                return res.json().then(error => {
                    throw error
                })
            }
            return
        })
        .then(() => {
            this.context.deleteDay(dayId, tripId)
        })
        .catch(error => {
            console.error({error})
            this.setState({error: 'Something went wrong. Please try again later.'})
        }) 
    }

    render () {
        const { error } = this.state
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
                            <h1 className='trip-name'>{selectedTrip.name}</h1>
                            <h2 className='trip-details'>{selectedTrip.city}, {selectedTrip.country}</h2>
                            
                            <div role='alert'>
                                {error && <p className='error'>{error}</p>}
                            </div>
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
                                    <h1 className='trip-name'>{selectedTrip.name}</h1>
                                    <h2 className='trip-details'>{selectedTrip.city}, {selectedTrip.country}</h2>
                                     
                                    <div role='alert'>
                                        {error && <p className='error'>{error}</p>}
                                    </div>
                                    {selectedTrip.days.map((day, index) => {
                                        return (
                                            <React.Fragment key={index}>                                              
                                                <div  id='day-cont'>
                                                    <p>Day {index+1}</p>
                                                        {!day.activities ? '' : day.activities
                                                            .sort((a, b) => {
                                                                if (a.meridiem < b.meridiem) {
                                                                    return -1;
                                                                } else {
                                                                    if (b.meridiem < a.meridiem) {
                                                                        return 1;
                                                                    } else {
                                                                        return a.start_time - b.start_time;
                                                                    }
                                                                }
                                                            })
                                                            .map((activity, index) => {
                                                                return (
                                                                    <span key={index} id='day'>                                                
                                                                        <h3 className='start_time'>{activity.start_time} {activity.meridiem}</h3>
                                                                        <p id='trip-details-activity' className='activity'>{activity.activity}</p>
                                                                        <Link 
                                                                            className='edit-btn' 
                                                                            to={`/trip/${selectedTrip.id}/day/${day.days_id }/edit/${activity.id}`}
                                                                        >Edit</Link>
                                                                        <button
                                                                            className='delete-act-btn'
                                                                            onClick={(e) => this.handleDeleteActivity(e)}
                                                                            value={selectedTrip.id}
                                                                            name={day.days_id}
                                                                            id={activity.id}
                                                                        >Delete</button>
                                                                        <hr />
                                                                    </span>
                                                                )
                                                        })}
                                                        
                                                        <Link className='add-activity' to={`/trip/${selectedTrip.id}/day/${day.days_id}`}>Add Activity</Link>
                                                        <button 
                                                            className='add-day' 
                                                            onClick={(e) => this.handleDeleteDay(e)} 
                                                            value={selectedTrip.id}
                                                            name={day.days_id}
                                                        >Delete Day</button>
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