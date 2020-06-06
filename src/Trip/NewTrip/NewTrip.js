import React from 'react';
import './NewTrip.css'
import AppContext from '../../App/AppContext'
import { Link } from 'react-router-dom'
import { v4 as uuidv4 } from 'uuid'

class NewTrip extends React.Component {
    static contextType = AppContext;

    StartTrip = e => {
        e.preventDefault()
        const { name, city, country } = e.target

        const trip = {
            trip_id: uuidv4(),
            user_id: 1,
            name: name.value,
            location: {
                city: city.value,
                country: country.value,
            },
            days: [
                {
                    day_id: uuidv4(),
                    activity: [
                        {
                            activity_id: uuidv4(),
                            start_time: 9,
                            meridiem: 'am',
                            task: '',
                        },
                    ]
                }
            ]
        }

        this.context.startNewTrip(trip)
        this.props.history.push(`/trip/${trip.trip_id}`)
    }

    render () { 
        return (
            <section id='main-trip'>
                <div id='container'>
                    
                    <h3 id='trip-title'>Trip </h3>
                    <form onSubmit={(e) => this.StartTrip(e)}>
                        <input type='text' name='name' placeholder='name' required />
                        <input type='text' name='city' placeholder='city' required />
                        <input type='text' name='country' placeholder='country' required />
                        <button type='submit' id='search-btn'>Get Started</button>
                    </form>
                    <Link to={`/trip`}>Back</Link>
                </div>
            </section>
        )
    }
}

export default NewTrip;