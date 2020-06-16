import React from 'react';
import './TripDetails.css'
import AppContext from '../../../App/AppContext'
import { Link } from 'react-router-dom'
import TokenService from '../../../services/token-service'
import { API_URL } from '../../../config'

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
            this.context.updateSelectedTrip(tripData, trip_id)
            this.state.chosenTrip.push(tripData)
        })
        .catch(error => {
            console.error(error)
            this.setState({error: 'Something went wrong. Please try again later.'})
        })
    }

    AddAnotherDay = e => {
        e.preventDefault()

        const newDay = 
            {
                day_id: 'f9261356-2137-4e9b-88ba-4b4fa1ea798d',
                activity: [
                    {
                        activity_id: '453c81fa-d3e5-4daf-b54e-32c2dbdw1581',
                        start_time: 9,
                        meridiem: 'am',
                        activity: '',
                    },
                ]
            }
    
        this.context.addDay(newDay, this.props.match.params.tripId)
    }

    render () { 
        const selectedTrip = this.context.trips.find(trip => 
            trip.id.toString() === this.props.match.params.tripId
        )

        // if(!selectedTrip.days){
        //     return <div>loading</div>
        // } 
        console.log(this.context.trips)

        if(!selectedTrip.days){
            return (
                <section id='main-trip'>
                    <div id='container'>
                    <Link to={`/trip`}>Back</Link>
                    <br />
                        <form>
                            <h6>{selectedTrip.name}</h6>
                            <h6>{selectedTrip.city}, {selectedTrip.country}</h6>

                            <button onClick={(e) => this.AddAnotherDay(e)} className='new-trip-btns'>Add Day</button>
                        </form>
                    </div>
                </section>
            )
        } else {
            return (
                <section id='main-trip'>
                    <div id='container'>
                    <Link to={`/trip`}>Back</Link>
                    <br />
                        <form>
                            <h6>{selectedTrip.name}</h6>
                            <h6>{selectedTrip.city}, {selectedTrip.country}</h6>

                            {selectedTrip.days.map((day, index) => {
                                return (
                                    <React.Fragment key={index}> 
                                        <div  id='day-cont'>
                                        <p>Day {index+1}</p>
                                            {day.activities.map((activity, index) => {
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
                                            <Link to={`/trip/${selectedTrip.id}/day/${day.day_id}`}>Add Activity</Link>
                                        </div>
                                        <br />
                                    </React.Fragment>
                                )
                            })}
                            <button onClick={(e) => this.AddAnotherDay(e)} className='new-trip-btns'>Add Day</button>
                        </form>
                    </div>
                </section>
            )
        } 
    }
}

export default TripDetails;