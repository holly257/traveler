import React from 'react';
import AppContext from '../../App/AppContext'
import { Link } from 'react-router-dom'

class AddActivity extends React.Component {
    static contextType = AppContext;

    optRange() {
        let range = [];

        for(let i=1; i<=12; i++) {
            range.push(<option key={i} value={i} >{i}</option>)
        }
        return range;
    }

    SaveActivity = e => {
        e.preventDefault()
        const { start_time, meridiem, activity } = e.target

        const newActivity = {
            start_time: start_time.value,
            meridiem: meridiem.value,
            activity: activity.value,
        }

        this.context.addActivity(newActivity, this.props.match.params.tripId, this.props.match.params.dayId)
        this.props.history.push(`/trip/${this.props.match.params.tripId}`)
    }

    render () { 
        if(!this.context.trips.length){
            return <div>loading</div>
        } 

        const tripId = this.props.match.params.tripId
        const selectedTrip = this.context.trips.find(trip => 
            trip.id === tripId
        )

        const selectedDayIndex = selectedTrip.days.findIndex(day =>
            day.day_id === this.props.match.params.dayId
        )

        if(selectedTrip){
            return (
                <section id='main-trip'>
                    <div id='container'>
                        <Link to={`/trip/${tripId}`}>Back</Link>
                        <form onSubmit={(e) => this.SaveActivity(e)}>
                            <h6>{selectedTrip.name}</h6>
                            <h6>{selectedTrip.city}, {selectedTrip.country}</h6>
                            <br />
                            <p>Day {selectedDayIndex+1}</p>
                            
                            <span id='day'>
                                <select name='start_time'>
                                    {this.optRange()}
                                </select>
                                <select name='meridiem'>
                                    <option>AM</option>
                                    <option>PM</option>
                                </select>
                                <textarea rows='3' name='activity' placeholder='Activity'></textarea>
                            </span>
                            <button type='submit' className='submit-new-activity'>Add</button>
                        </form>
                    </div>
                </section>
            )
        } else return null
    }
}

export default AddActivity;