import React from 'react';
import { Link } from 'react-router-dom'
import './TripList.css'
import AppContext from '../../AppContext'

class TripList extends React.Component {
    static contextType = AppContext;

    render () {
        return (
            <main>
                <h3 id='title'>My Trip's</h3>
                <section id='trip-cont'>
                    {this.context.trips.map((trip) => {
                        return (
                            <section className='trips'>
                                <Link to={`/trip/${trip.trip_id}`}>{trip.name}</Link>
                                <h6>{trip.location}</h6>
                                <br />
                            </section>
                        )
                    })}
                </section>
                <br />
                <Link id='new-trip' to={'/new-trip'}>New Trip</Link>
            </main>
        )
    }
}

export default TripList;