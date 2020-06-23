import React from 'react';
import AppContext from '../../App/AppContext'
import { Link } from 'react-router-dom'
import TokenService from '../../services/token-service'
import { API_URL } from '../../config'

class AddActivity extends React.Component {
    static contextType = AppContext;
    state = { error: null }

    optRange() {
        let range = [];

        for(let i=1; i<=12; i++) {
            range.push(<option key={i} value={i} >{i}</option>)
        }
        return range;
    }

    SaveActivity = e => {
        e.preventDefault()
        this.setState({ error: null })
        const { start_time, meridiem, activity } = e.target
        const dayId = this.props.match.params.dayId
        const tripId = this.props.match.params.tripId

        const newActivity = {
            start_time: start_time.value,
            meridiem: meridiem.value.toLowerCase(),
            activity: activity.value,
            day_id: parseInt(dayId)
        }

        const options = {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'authorization': `bearer ${TokenService.getAuthToken()}`
            },
            body: JSON.stringify(newActivity),   
        }
        fetch(`${API_URL}/activities`, options)
        .then(res => {
            if(!res.ok) {
                throw new Error('Trip detail fetch failed, please try again later.')
            }
            return res
        })
        .then(res => res.json())
        .then((activityData) => {
            this.context.addActivity(activityData, tripId, dayId)
            this.props.history.push(`/trip/${tripId}`)

        })
        .catch(error => {
            console.error(error)
            this.setState({error: 'Something went wrong. Please try again later.'})
        })
    }

    render () { 
        const { error } = this.state
        const tripId = this.props.match.params.tripId
        const selectedTrip = this.context.trips.find(trip => 
            trip.id.toString() === tripId
        )

        const selectedDayIndex = selectedTrip.days.findIndex(day =>
            day.days_id.toString() === this.props.match.params.dayId
        )

        if(selectedTrip){
            return (
                <section id='main-trip'>
                    <div id='container'>
                        <Link className='back-to-trip-list' to={`/trip/${tripId}`}>Back</Link>
                        <div role='alert'>
                            {error && <p className='error'>{error}</p>}
                        </div>
                        <form onSubmit={(e) => this.SaveActivity(e)}>
                            <h5 className='trip-name'>{selectedTrip.name}</h5>
                            <h6 className='trip-details'>{selectedTrip.city}, {selectedTrip.country}</h6>
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
                                <textarea className='edit-add-activity-box' rows='3' name='activity' placeholder='Activity'></textarea>
                            </span>
                            <button type='submit' className='add-activity'>Add</button>
                        </form>
                    </div>
                </section>
            )
        } else return null
    }
}

export default AddActivity;