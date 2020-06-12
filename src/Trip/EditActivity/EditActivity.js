import React from 'react';
import AppContext from '../../App/AppContext'
import { Link } from 'react-router-dom'

class EditActivity extends React.Component {
    static contextType = AppContext;

    optRange(n) {
        let range = [];

        for(let i=1; i<=12; i++) {
            range.push(<option key={i} defaultValue={i} selected={i == n} >{i}</option>)
        }
        return range;
    }

    EditActivity = e => {
        e.preventDefault()
        const { start_time, meridiem, task } = e.target
        const activityId = this.props.match.params.activityId

        const editedActivity = {
            activity_id: activityId,
            start_time: start_time.value,
            meridiem: meridiem.value,
            task: task.value,
        }

        this.context.editActivity(editedActivity, this.props.match.params.tripId, this.props.match.params.dayId, activityId)
        this.props.history.push(`/trip/${this.props.match.params.tripId}`)
    }

    render () { 
        if(!this.context.trips.length){
            return <div>loading</div>
        } 

        const tripId = this.props.match.params.tripId
        const dayId = this.props.match.params.dayId
        const activityId = this.props.match.params.activityId

        const selectedTrip = this.context.trips.find(trip => 
            trip.id === tripId
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

        if(selectedTrip){
            return (
                <section id='main-trip'>
                    <div id='container'>
                        <Link to={`/trip/${tripId}`}>Cancel</Link>
                        <form onSubmit={(e) => this.EditActivity(e)}>
                            <h6>{selectedTrip.name}</h6>
                            <h6>{selectedTrip.location.city}, {selectedTrip.location.country}</h6>
                            <br />
                            <p value={selectedActivity.activity_id}>Day {selectedDayIndex+1}</p>
                            
                            <span id='day'>
                                <select name='start_time'>
                                    {this.optRange(selectedActivity.start_time)}
                                </select>
                                <select name='meridiem'>
                                    <option selected={selectedActivity.meridiem === 'am'}>AM</option>
                                    <option selected={selectedActivity.meridiem === 'pm'}>PM</option>
                                </select>
                                <textarea rows='3' name='task' defaultValue={selectedActivity.task} placeholder='Activity'></textarea>
                            </span>
                            <button type='submit' className='submit-new-activity'>Save Edit</button>
                        </form>
                    </div>
                </section>
            )
        } else return null
    }
}

export default EditActivity;