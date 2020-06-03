import React from 'react';
import './NewTrip.css'
import Activity from './Activity/Activity'
import AppContext from '../../AppContext'
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
        }

        this.context.startNewTrip(trip)
        console.log(trip)
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
                    </div>
                </section>
            )
    }
}

export default NewTrip;