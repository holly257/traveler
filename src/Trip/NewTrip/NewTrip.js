import React from 'react';
import './NewTrip.css';
import AppContext from '../../App/AppContext';
import { Link } from 'react-router-dom';
import { API_URL } from '../../config';
import TokenService from '../../services/token-service';

class NewTrip extends React.Component {
    static contextType = AppContext;
    state = { error: null };

    StartTrip = e => {
        e.preventDefault();
        this.setState({ error: null });
        const { name, city, country } = e.target;

        const trip = {
            name: name.value,
            city: city.value,
            country: country.value,
            days: [],
        };

        const options = {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                authorization: `bearer ${TokenService.getAuthToken()}`,
            },
            body: JSON.stringify(trip),
        };
        fetch(`${API_URL}/trips`, options)
            .then(res => {
                if (!res.ok) {
                    throw new Error('Something went wrong, please try again soon.');
                }
                return res.json();
            })
            .then(data => {
                this.context.addReview(trip);
                this.props.history.goBack();
            })
            .catch(error => {
                console.error(error);
                this.setState({ error: 'The review did not add. Please try again later.' });
            });
    };

    render() {
        const { error } = this.state;
        return (
            <section id="main-trip">
                <div id="container">
                    <div role="alert">{error && <p className="error">{error}</p>}</div>
                    <h1 id="trip-title">New Trip</h1>
                    <form onSubmit={e => this.StartTrip(e)}>
                        <label for="name" className="new-trip-label">
                            Name:{' '}
                        </label>
                        <input
                            className="new-trip-input"
                            type="text"
                            id="name"
                            name="name"
                            placeholder="name"
                            required
                        />
                        <label for="city" className="new-trip-label">
                            City:{' '}
                        </label>
                        <input
                            className="new-trip-input"
                            type="text"
                            id="city"
                            name="city"
                            placeholder="city"
                            required
                        />
                        <label for="country" className="new-trip-label">
                            Country:{' '}
                        </label>
                        <input
                            className="new-trip-input"
                            type="text"
                            id="country"
                            name="country"
                            placeholder="country"
                            required
                        />
                        <button type="submit" id="search-btn">
                            Get Started
                        </button>
                    </form>
                    <Link className="back-to-trip-list" to={`/trip`}>
                        Back
                    </Link>
                </div>
            </section>
        );
    }
}

export default NewTrip;
