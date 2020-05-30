import React from 'react';
import { Link } from 'react-router-dom'
import './TripList.css'

function TripList () {
    return (
        <main>
            <h3 id='title'>Itinerary List</h3>
            <section id='trip-cont'>
                <section className='trips'>
                    <p>Trip one</p>
                    <button>see more...</button>
                </section>
                <section className='trips'>
                    <p>Trip two</p>
                    <button>see more...</button>
                </section>
                <section className='trips'>
                    <p>Trip three</p>
                    <button>see more...</button>
                </section>
                </section>
            <Link to={'/new-trip'}>make new itinerary</Link>
        </main>
    )
}

export default TripList;