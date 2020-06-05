import React from 'react';
import './AddActivity.css'
import AppContext from '../../App/AppContext'
import { Link } from 'react-router-dom'

class AddActivity extends React.Component {
    static contextType = AppContext;

    optRange() {
        let range = [];

        for(let i=1; i<=12; i++) {
            range.push(<option key={i} value='{i}' >{i}</option>)
        }
        return range;
    }

    SaveActivity = e => {
        e.preventDefault()
        const { start_time, meridiem, task } = e.target

        const newActivity = {
            activity_id: 'c36479a8-7ded-4467-a648-758414e43d53',
            start_time: start_time.value,
            meridiem: meridiem.value,
            task: task.value,
        }

        console.log('add activity', newActivity)
        this.context.addActivity(newActivity, this.props.match.params.tripId, this.props.match.params.dayId)
    }

    render () { 
        const tripId = this.props.match.params.tripId
        const selectedTrip = this.context.trips.find(trip => 
            trip.trip_id === tripId
        )
        const tripIndex = this.context.trips.findIndex(trip => trip.trip_id === tripId)

        // const selectedDay = this.context.trips[tripIndex].days.find(day =>
        //     day.day_id === this.props.match.params.dayId
        // )

        console.log(this.context.trips[tripIndex])
        // console.log(this.context.trips[tripIndex].days)

        if(selectedTrip){
            return (
                <section id='main-trip'>
                    <div id='container'>
                        <Link to={'/'}>Back</Link>
                        <form onSubmit={(e) => this.SaveActivity(e)}>
                            <h6>{selectedTrip.name}</h6>
                            <h6>{selectedTrip.location.city}, {selectedTrip.location.country}</h6>
                            <br />
                            <p>Day </p>
                            
                            <span id='day'>
                                <select name='start_time'>
                                    {this.optRange()}
                                </select>
                                <select name='meridiem'>
                                    <option>AM</option>
                                    <option>PM</option>
                                </select>
                                <textarea rows='3' name='task' placeholder='Activity'></textarea>
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