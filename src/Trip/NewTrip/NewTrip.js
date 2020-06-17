import React from 'react';
import './NewTrip.css'
import AppContext from '../../App/AppContext'
import { Link } from 'react-router-dom'
import { API_URL } from '../../config'
import TokenService from '../../services/token-service'

class NewTrip extends React.Component {
    static contextType = AppContext;

    StartTrip = e => {
        e.preventDefault()
        const { name, city, country } = e.target

        const trip = {
            name: name.value,
            city: city.value,
            country: country.value,
            days: []
        }

        const options = {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'authorization': `bearer ${TokenService.getAuthToken()}`
            },
            body: JSON.stringify(trip),   
        }
        fetch(`${API_URL}/trips`, options)
        .then(res => {
            if(!res.ok) {
                throw new Error('Something went wrong, please try again soon.')
                }
            return res.json()
        })
        .then(data => {
            this.context.addReview(trip) 
            this.props.history.goBack()
        })
        .catch(error => {
            console.error(error)
            this.setState({ error: 'The review did not add. Please try again later.'});
        })

        // this.context.startNewTrip(trip)
        // // this.props.history.push(`/trip/${trip.id}`)
        // this.props.history.goBack()
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