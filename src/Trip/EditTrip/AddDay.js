import React from 'react';
import './AddDay.css'

class AddDay extends React.Component {
    static contextType = AppContext;

    EditTrip = e => {
        e.preventDefault()
        console.log('edit')
    }

    render () { 
        const selectedTrip = this.context.trips.find(trip => 
            trip.trip_id === this.props.match.params.tripId
        )

        const selectedDay = ''
        
        if(selectedTrip){
            return (
                <section id='main-trip'>
                    <div id='container'>
                        <h3 id='trip-title'>Trip </h3>
                        <form onSubmit={(e) => this.SaveDay(e)}>

                            <button>Back</button>
                            <h6>{selectedTrip.name}</h6>
                            <h6>{selectedTrip.location.city}, {selectedTrip.location.country}</h6>

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
                            <button type='submit' className='submit-new-day'>Edit</button>
                        </form>
                    </div>
                </section>
            )
        } else return null
    }
}

export default AddDay;