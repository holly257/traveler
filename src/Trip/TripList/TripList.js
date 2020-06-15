import React from 'react';
import { Link } from 'react-router-dom'
import './TripList.css'
import AppContext from '../../App/AppContext'
import { API_URL } from '../../config'
import TokenService from '../../services/token-service'

class TripList extends React.Component {
    static contextType = AppContext;

    componentDidMount() {
        const options = {
            method: 'GET',
            headers: {
                'content-type': 'application/json',
                'authorization': `bearer ${TokenService.getAuthToken()}`
            }
        }
        
        fetch(`${API_URL}/trips`, options)
            .then(res => {
                if(!res.ok) {
                    throw new Error('Something went wrong, please try again soon.')
                    }
                
                return res
            })
            .then(res => res.json())
            .then((TripData) => {
                this.context.setTripsState(TripData)
            })
            .catch(error => {
                console.error(error)
                this.setState({error: 'Something went wrong. Please try again later.'})
            })
            
      }

    render () {
        return (
            <main>
                <h3 id='title'>My Trip's</h3>
                <section id='trip-cont'>
                    {this.context.trips.map((trip) => {
                        return (
                            <section key={trip.id} className='trips'>
                                <Link to={`/trip/${trip.id}`}>{trip.name}</Link>
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