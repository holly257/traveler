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
    
    addDataToTrip(data){
        fullTripArray.push(data)
        this.context.setTripsState(fullTripArray)
    }

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
                TripData.map(eachTrip => {
                    fetch(`${API_URL}/trips/${eachTrip.id}`, options)
                        .then(res => {
                            if(!res.ok) {
                                throw new Error('Trip detail fetch failed, please try again later.')
                            }
                            return res
                        })
                        .then(res => res.json())
                        .then((tripData) => {
                            this.addDataToTrip(tripData)
                            
                        })
                        .catch(error => {
                            console.error(error)
                            this.setState({error: 'Something went wrong. Please try again later.'})
                        })
                })
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
                <h3 id='title'>My Trip's</h3>
                <section id='review-cont'>
                    <h6>No Trips yet...</h6>
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
                        <h3 id='title'>My Trip's</h3>
                        <section id='trip-cont'>
                            {this.context.trips.map((trip) => {
                                return (
                                    <section key={trip[0].id} className='trips'>
                                        <Link to={`/trip/${trip[0].id}`} className='trip-list'>{trip[0].name}</Link>
                                        <h6>{trip[0].city}, {trip[0].country}</h6>
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