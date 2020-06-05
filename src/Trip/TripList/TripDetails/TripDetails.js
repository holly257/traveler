import React from 'react';
import './TripDetails.css'
import AppContext from '../../../App/AppContext'

class TripDetails extends React.Component {
    static contextType = AppContext;

    optRange (n) {
        let range = [];

        for(let i=1; i<=12; i++) {
            range.push(<option key={i} value='{i}' selected={i === n}>{i}</option>)
        }
        return range;
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
                        <h3 id='trip-title'>Trip </h3>
                        <form onSubmit={(e) => this.SaveTrip(e)}>
                            <input type='text' name='name' value={selectedTrip.name} required />
                            <input type='text' name='city' value={selectedTrip.location.city} placeholder='location' required />
                            <input type='text' name='country' value={selectedTrip.location.country} placeholder='location' required />

                            {selectedTrip.days.map((day, index) => {
                                return (
                                    <React.Fragment key={day.day_id}> 
                                        <div  id='day-cont'>
                                        <p>Day {index+1}</p>
                                            {day.activity.map((day, index) => {
                                                return (
                                                    <span key={day.activity_id} id='day'>
                                                        <select name='start_time'>
                                                            {this.optRange(day.start_time)}
                                                        </select>
                                                        <select name='meridiem'>
                                                            <option selected={day.meridiem === 'am'}>AM</option>
                                                            <option selected={day.meridiem === 'pm'}>PM</option>
                                                        </select>
                                                        <textarea rows='3' name='task' placeholder='Activity' value={day.task}></textarea>
                
                                                        <hr />
                                                    </span>
                                                )
                                            })}
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