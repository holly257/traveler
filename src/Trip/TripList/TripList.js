import React from 'react';
import { Link } from 'react-router-dom'
import './TripList.css'
import AppContext from '../../App/AppContext'
// import API_URL from '../../config'

class TripList extends React.Component {
    static contextType = AppContext;

    getAllTripInfo = e => {
        e.preventDefault()
        console.log('getting trip info')
        // const trip_id = this.trip.id
        //dont forget headers and auth 
        // fetch(API_URL + `'/trips/${trip_id}`)
        // .then(res => {
        //     if(!res.ok) {
        //         throw new Error('Trip detail fetch failed, please try again later.')
        //     }
        //     return res.json()
        // })
        // .then((data)) => {
        //     this.setState({
        //         trips: this.state.trips.filter(trips => trips.id !== trip_id)
        //     })
        // })
        // .catch(error => {
        //     console.error(error)
        //     this.setState({error: 'Something went wrong. Please try again later.'})
        // })
        // }
    }

    render () {
        return (
            <main>
                <h3 id='title'>My Trip's</h3>
                <section id='trip-cont'>
                    {this.context.trips.map((trip) => {
                        return (
                            <section key={trip.id} className='trips'>
                                <Link onClick={(e) => this.getAllTripInfo(e)} to={`/trip/${trip.id}`}>{trip.name}</Link>
                                <h6>{trip.city}, {trip.country}</h6>
                                <br />
                            </section>
                        )
                    })}
                </section>
                <br />
                <Link  id='new-trip' to={'/new-trip'}>New Trip</Link>
            </main>
        )
    }
}

export default TripList;