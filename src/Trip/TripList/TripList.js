import React from 'react';
import { Link } from 'react-router-dom'
import './TripList.css'
import AppContext from '../../App/AppContext'
import { API_URL } from '../../config'
import TokenService from '../../services/token-service'
import { Route, Switch } from 'react-router-dom'
import TripDetails from '../TripList/TripDetails/TripDetails'
import PrivateRoute from '../../SignIn/AuthRouting/PrivateRoute'

let fullTripArray = []
class TripList extends React.Component {
    static contextType = AppContext;

    componentDidMount() {
        fullTripArray = []
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
        if(!this.context.trips.length){
            return (
                <main>
                <h1 id='title'>My Trip's</h1>
                <section id='review-cont'>
                    <h2>No Trips yet...</h2>
                </section>
                <br />
                <Link  id='new-trip' to={'/new-trip'}>New Trip</Link>
            </main>
            )
        }
        return (
            <Switch>
                <Route exact path={'/trip'}>
                    <main>
                        <h1 id='title'>My Trip's</h1>
                        <section id='trip-cont'>
                            {this.context.trips.map((trip) => {
                                return (
                                    <section key={trip.id} className='trips'>
                                        <Link to={`/trip/${trip.id}`} className='trip-list'>{trip.name}</Link>
                                        <h2 className='trip-details'>{trip.city}, {trip.country}</h2>
                                        <br />
                                    </section>
                                )
                            })}
                        </section>
                        <br />
                        <Link  id='new-trip' to={'/new-trip'}>New Trip</Link>
                    </main>
                </Route>
                <PrivateRoute path='/trip/:tripId' component={TripDetails} />
                
            </Switch>
        )
    }
}

export default TripList;