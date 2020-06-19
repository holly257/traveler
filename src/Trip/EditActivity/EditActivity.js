import React from 'react';
import AppContext from '../../App/AppContext'
import { Link } from 'react-router-dom'
import TokenService from '../../services/token-service'
import { API_URL } from '../../config'


class EditActivity extends React.Component {
    static contextType = AppContext;

    optRange(n) {
        let range = [];

        for(let i=1; i<=12; i++) {
            range.push(<option key={i} value={i} >{i}</option>)
        }
        return range;
    }

    EditActivity = e => {
        e.preventDefault()
        const { start_time, meridiem, activity } = e.target
        const activityId = this.props.match.params.activityId
        const dayId = this.props.match.params.dayId
        const tripId = this.props.match.params.tripId

        const editedActivity = {
            activity_id: parseInt(activityId),
            start_time: start_time.value,
            meridiem: meridiem.value,
            activity: activity.value,
            dayId: parseInt(dayId)
        }

        const options = {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json',
                'authorization': `bearer ${TokenService.getAuthToken()}`
            },
            body: JSON.stringify(editedActivity),   
        }
        fetch(`${API_URL}/activities/${activityId}`, options)
        .then(res => {
            if(!res.ok) {
                throw new Error('Trip detail fetch failed, please try again later.')
            }
            return res
        })
        .then(res => res.json())
        .then((activityData) => {
            this.context.editActivity(editedActivity, tripId, dayId, activityId)
            this.props.history.push(`/trip/${tripId}`)

        })
        .catch(error => {
            console.error(error)
            this.setState({error: 'Something went wrong. Please try again later.'})
        })


        
    }

    render () { 
        const tripId = this.props.match.params.tripId
        const dayId = this.props.match.params.dayId
        const activityId = this.props.match.params.activityId

        const selectedTrip = this.context.trips.find(trip => 
            trip.id.toString() === tripId
        )

        const selectedDayIndex = selectedTrip.days.findIndex(day =>
            day.days_id.toString() === dayId
        )

        const selectedDay = selectedTrip.days.find(day =>
            day.days_id.toString() === dayId
        )

        const selectedActivity = selectedDay.activities.find(activity =>
            activity.id.toString() === activityId
        ) 

        if(selectedTrip){
            return (
                <section id='main-trip'>
                    <div id='container'>
                        <Link className='back-to-trip-list' to={`/trip/${tripId}`}>Cancel</Link>
                        <form onSubmit={(e) => this.EditActivity(e)}>
                            <h5 className='trip-name'>{selectedTrip.name}</h5>
                            <h6 className='trip-details'>{selectedTrip.city}, {selectedTrip.country}</h6>
                            <br />
                            <p value={selectedActivity.activity_id}>Day {selectedDayIndex+1}</p>
                            
                            <span id='day'>
                                <select name='start_time' defaultValue={selectedActivity.start_time}>
                                    {this.optRange(selectedActivity.start_time)}
                                </select>
                                <select name='meridiem' defaultValue={selectedActivity.meridiem}>
                                    <option value='am'>AM</option>
                                    <option value='pm'>PM</option>
                                </select>
                                <textarea className='edit-add-activity-box' rows='3' name='activity' defaultValue={selectedActivity.activity} placeholder='Activity'></textarea>
                            </span>
                            <button type='submit' className='add-activity'>Save Edit</button>
                        </form>
                    </div>
                </section>
            )
        } else return null
    }
}

export default EditActivity;