import React from 'react';
import AppContext from '../../../App/AppContext';
import '../../NewReview.css';
import { Link } from 'react-router-dom';
import TokenService from '../../../services/token-service';
import { API_URL } from '../../../config';

class EditReview extends React.Component {
    static contextType = AppContext;
    state = { error: null };

    EditReview = e => {
        e.preventDefault();
        this.setState({ error: null });
        const {
            name,
            rating,
            city,
            country,
            address,
            category,
            comments,
            image_val,
            altText,
        } = e.target;
        const reviewId = this.props.match.params.reviewId;

        const editedReview = {
            id: parseInt(reviewId),
            name: name.value,
            image: image_val.value,
            image_alt: altText.value,
            city: city.value,
            country: country.value,
            address: address.value,
            rating: rating.value,
            category: category.value,
            comments: comments.value,
        };

        const options = {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json',
                authorization: `bearer ${TokenService.getAuthToken()}`,
            },
            body: JSON.stringify(editedReview),
        };
        fetch(`${API_URL}/reviews/${reviewId}`, options)
            .then(res => {
                if (!res.ok) {
                    throw new Error('Review edit failed, please try again later.');
                }
                return res;
            })
            .then(res => res.json())
            .then(reviewData => {
                this.context.editReview(reviewData, reviewId);
                this.props.history.push(`/review/${reviewId}`);
            })
            .catch(error => {
                this.setState({ error: 'Something went wrong. Please try again later.' });
            });
    };

    render() {
        const { error } = this.state;
        if (!this.context.reviews.length) {
            return (
                <section id="main-review">
                    <div id="review-details-container">
                        <div>Sorry, something went wrong</div>
                    </div>
                </section>
            );
        }

        const selectedReview = this.context.reviews.find(
            review => review.id.toString() === this.props.match.params.reviewId
        );

        return (
            <section id="main-review">
                <div id="container">
                    <Link className="button" to={`/review/${selectedReview.id}`}>
                        Cancel
                    </Link>
                    <h1 className="review-title edit-review-title">Edit Review</h1>
                    <div role="alert">{error && <p className="error">{error}</p>}</div>
                    <form onSubmit={e => this.EditReview(e)}>
                        <label htmlFor="name" className="form-input-titles">
                            Name:
                        </label>
                        <input
                            className="allReview"
                            type="text"
                            defaultValue={selectedReview.name}
                            name="name"
                            id="name"
                            required
                        />

                        <label htmlFor="rating" className="form-input-titles">
                            Rating:
                        </label>
                        <select
                            className="allReview-dropdown"
                            name="rating"
                            id="rating"
                            defaultValue={selectedReview.rating}
                            required
                        >
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
                                defaultValue={selectedReview.city}
                                name="city"
                                id="location"
                                className="allReview"
                                required
                            />
                            <input
                                type="text"
                                defaultValue={selectedReview.country}
                                name="country"
                                id="location"
                                className="allReview"
                                required
                            />
                            <input
                                type="text"
                                defaultValue={selectedReview.address}
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
                                defaultValue={selectedReview.category}
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
                            defaultValue={selectedReview.image}
                            name="image_val"
                            id="image"
                        />
                        <input
                            className="allReview"
                            type="text"
                            defaultValue={selectedReview.image_alt}
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
                            defaultValue={selectedReview.comments}
                            required
                        ></textarea>

                        <button type="submit" className="button" id="submit-review-btn">
                            Submit Edit
                        </button>
                    </form>
                </div>
            </section>
        );
    }
}

export default EditReview;
