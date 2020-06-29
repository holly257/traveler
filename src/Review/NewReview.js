import React from 'react';
import './NewReview.css';
import AppContext from '../App/AppContext';
import { Link } from 'react-router-dom';
import { API_URL } from '../config';
import TokenService from '../services/token-service';

class NewReview extends React.Component {
    static contextType = AppContext;
    state = { error: null };

    SubmitReview = e => {
        e.preventDefault();
        this.setState({ error: null });

        const { name, rating, city, country, address, category, comments, image } = e.target;

        let altText = e.target.altText.value;

        if (!altText) {
            altText = name.value + ' image';
        }

        const review = {
            name: name.value,
            image: image.value,
            image_alt: altText,
            city: city.value,
            country: country.value,
            address: address.value,
            rating: rating.value,
            category: category.value,
            comments: comments.value,
        };

        const options = {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                authorization: `bearer ${TokenService.getAuthToken()}`,
            },
            body: JSON.stringify(review),
        };

        fetch(`${API_URL}/reviews`, options)
            .then(res => {
                if (!res.ok) {
                    return res.json().then(error => {
                        throw error;
                    });
                }
                return res.json();
            })
            .then(data => {
                this.context.addReview(review);
                this.props.history.goBack();
            })
            .catch(error => {
                this.setState({ error: 'Sorry, the review did not add. Please try again later.' });
            });
    };

    render() {
        const { error } = this.state;
        return (
            <section id="main-review">
                <div id="container">
                    <Link className="button back-btn" to={`/review`}>
                        Back
                    </Link>
                    <h1 id="review-title">Review</h1>
                    <div role="alert">{error && <p className="error">{error}</p>}</div>
                    <form onSubmit={e => this.SubmitReview(e)}>
                        <label htmlFor="name" className="form-input-titles">
                            Name:
                        </label>
                        <input
                            className="allReview"
                            type="text"
                            placeholder="name"
                            name="name"
                            id="name"
                            required
                        />

                        <label htmlFor="rating" className="form-input-titles">
                            Rating:
                        </label>
                        <select className="allReview-dropdown" name="rating" id="rating" required>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                        </select>

                        <br />
                        <label htmlFor="location" className="form-input-titles">
                            Location:
                        </label>
                        <div className="allReview">
                            <input
                                type="text"
                                placeholder="City"
                                name="city"
                                id="location"
                                className="allReview"
                                required
                            />
                            <input
                                type="text"
                                placeholder="Country"
                                name="country"
                                id="location"
                                className="allReview"
                                required
                            />
                            <input
                                type="text"
                                placeholder="Address"
                                name="address"
                                id="location"
                                className="allReview"
                                required
                            />
                        </div>

                        <div>
                            <label htmlFor="category" className="form-input-titles">
                                Category:
                            </label>
                            <select
                                className="allReview-dropdown"
                                name="category"
                                id="category"
                                required
                            >
                                <option>restaurant</option>
                                <option>bar/coffee</option>
                                <option>shopping</option>
                                <option>activity</option>
                                <option>lodging</option>
                            </select>
                        </div>

                        <label htmlFor="image" className="form-input-titles">
                            Pictures:
                        </label>
                        <input
                            className="allReview"
                            type="url"
                            placeholder="link to image"
                            name="image"
                            id="image"
                        />
                        <input
                            className="allReview"
                            type="text"
                            placeholder="briefly describe the image"
                            name="altText"
                            id="image"
                        />

                        <br />
                        <label htmlFor="comments" className="form-input-titles">
                            Comments:
                        </label>
                        <textarea
                            className="allReview"
                            rows="5"
                            name="comments"
                            id="comments"
                            required
                        ></textarea>

                        <button type="submit" className="button" id="add-review-btn">
                            Submit
                        </button>
                    </form>
                </div>
            </section>
        );
    }
}

export default NewReview;
