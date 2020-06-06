import React from 'react';
import AppContext from '../../App/AppContext'
import { Link } from 'react-router-dom'
import { v4 as uuidv4 } from 'uuid'

class EditActivity extends React.Component {
    static contextType = AppContext;

    optRange(n) {
        let range = [];

        for(let i=1; i<=12; i++) {
            range.push(<option key={i} value={i} selected={i == n} >{i}</option>)
        }
        return range;
    }

    EditActivity = e => {
        e.preventDefault()
        const { start_time, meridiem, task } = e.target

        const editedActivity = {
            activity_id: uuidv4(),
            start_time: start_time.value,
            meridiem: meridiem.value,
            task: task.value,
        }

        // this.context.editActivity(editedActivity, this.props.match.params.tripId, this.props.match.params.dayId)
        // this.props.history.push(`/trip/${this.props.match.params.tripId}`)
        console.log(editedActivity)
    }

    render () { 
        if(!this.context.trips.length){
            return <div>loading</div>
        } 

        const tripId = this.props.match.params.tripId
        const dayId = this.props.match.params.dayId
        const activityId = this.props.match.params.activityId

        const selectedTrip = this.context.trips.find(trip => 
            trip.trip_id === tripId
        )

        const selectedDayIndex = selectedTrip.days.findIndex(day =>
            day.day_id === dayId
        )

        const selectedDay = selectedTrip.days.find(day =>
            day.day_id === dayId
        )

        const selectedActivity = selectedDay.activity.find(activity =>
            activity.activity_id === activityId
        )
        console.log(activityId, selectedActivity)

        if(selectedTrip){
            return (
                <section id='main-trip'>
                    <div id='container'>
                        <Link to={`/trip/${tripId}`}>Back</Link>
                        <form onSubmit={(e) => this.EditActivity(e)}>
                            <h6>{selectedTrip.name}</h6>
                            <h6>{selectedTrip.location.city}, {selectedTrip.location.country}</h6>
                            <br />
                            <p>Day {selectedDayIndex+1}</p>
                            
                            <span id='day'>
                                <select name='start_time'>
                                    {this.optRange(selectedActivity.start_time)}
                                </select>
                                <select name='meridiem'>
                                    <option selected={selectedActivity.meridiem === 'am'}>AM</option>
                                    <option selected={selectedActivity.meridiem === 'pm'}>PM</option>
                                </select>
                                <textarea rows='3' name='task' value={selectedActivity.task} placeholder='Activity'></textarea>
                            </span>
                            <button type='submit' className='submit-new-activity'>Add</button>
                        </form>
                    </div>
                </section>
            )
        } else return null
    }
}

export default EditActivity;