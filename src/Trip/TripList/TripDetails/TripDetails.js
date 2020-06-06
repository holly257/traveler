import React from 'react';
import './TripDetails.css'
import AppContext from '../../../App/AppContext'
import { Link } from 'react-router-dom'

class TripDetails extends React.Component {
    static contextType = AppContext;

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
                        task: '',
                    },
                ]
            }
    
        this.context.addDay(newDay, this.props.match.params.tripId)
    }

    render () { 
        const selectedTrip = this.context.trips.find(trip => 
            trip.trip_id === this.props.match.params.tripId
        )
        
        if(selectedTrip){
            return (
                <section id='main-trip'>
                    <div id='container'>
                    <Link to={`/trip`}>Back</Link>
                        <form>
                            <h6>{selectedTrip.name}</h6>
                            <h6>{selectedTrip.location.city}, {selectedTrip.location.country}</h6>

                            {selectedTrip.days.map((day, index) => {
                                return (
                                    <React.Fragment key={day.day_id}> 
                                        <div  id='day-cont'>
                                        <p>Day {index+1}</p>
                                            {day.activity.map((activity, index) => {
                                                return (
                                                    <span key={activity.activity_id} id='day'>
                                                        <h6 name='start_time'>{activity.start_time}</h6>
                                                        <h6 name='meridiem'>{activity.meridiem}</h6>
                                                        <p id='trip-details-task' name='task'>{activity.task}</p>
                                                        <Link to={`/trip/${selectedTrip.trip_id}/day/${day.day_id}/edit/${activity.activity_id}`}>Edit</Link>
                                                        <hr />
                                                    </span>
                                                )
                                            })}
                                            <Link to={`/trip/${selectedTrip.trip_id}/day/${day.day_id}`}>Add Activity</Link>
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
        } else return null
    }
}

export default TripDetails;