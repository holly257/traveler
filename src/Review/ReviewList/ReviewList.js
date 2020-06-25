import React from 'react';
import { Link } from 'react-router-dom';
import './ReviewList.css';
import AppContext from '../../App/AppContext';
import { API_URL } from '../../config';
import TokenService from '../../services/token-service';

class ReviewList extends React.Component {
    static contextType = AppContext;

    state = {
        error: null,
        success: null,
    };

    componentDidMount() {
        this.setState({
            error: null,
            success: null,
        });
        const options = {
            method: 'GET',
            headers: {
                'content-type': 'application/json',
                authorization: `bearer ${TokenService.getAuthToken()}`,
            },
        };
        fetch(`${API_URL}/reviews`, options)
            .then(res => {
                if (!res.ok) {
                    throw new Error('Something went wrong, please try again soon.');
                }
                return res;
            })
            .then(res => res.json())
            .then(reviewData => {
                this.context.setReviewsList(reviewData);
            })
            .catch(error => {
                console.error(error);
                this.setState({
                    error: 'Something went wrong. Please try again later.',
                });
            });
    }

    handleDeleteClick = e => {
        e.preventDefault();
        const review_id = e.target.value;
        const options = {
            method: 'DELETE',
            headers: {
                'content-type': 'application/json',
                authorization: `bearer ${TokenService.getAuthToken()}`,
            },
        };

        fetch(`${API_URL}/reviews/${review_id}`, options)
            .then(res => {
                if (!res.ok) {
                    return res.json().then(error => {
                        throw error;
                    });
                }
                return;
            })
            .then(() => {
                this.setState({ success: 'Review Deleted' });
                this.context.deleteReview(review_id);
            })
            .catch(error => {
                console.error({ error });
                this.setState({
                    error: 'Something went wrong. Please try again later.',
                });
            });
    };

    render() {
        const { error, success } = this.state;
        if (!this.context.reviews.length) {
            return (
                <main id="main-review">
                    <div>
                        <h3 className="review-list-title">My Review's</h3>
                        <section>
                            <div role="alert">{error && <p className="error">{error}</p>}</div>
                            <h6>No reviews yet...</h6>
                        </section>
                        <br />
                        <Link id="new-review" to={'/new-review'}>
                            New review
                        </Link>
                    </div>
                </main>
            );
        }
        return (
            <main id="main-review">
                <div>
                    <h1 className="review-list-title">My Review's</h1>
                    <section>
                        <div role="alert">{error && <p className="error">{error}</p>}</div>
                        <div role="alert">{success && <p className="success">{success}</p>}</div>
                        {this.context.reviews.map((review, index) => {
                            return (
                                <section key={index} className="reviews">
                                    <Link className="review-list" to={`/review/${review.id}`}>
                                        {review.name}
                                    </Link>
                                    <h2 className="review-list-link">
                                        {review.city}, {review.country}
                                    </h2>
                                    <button
                                        className="review-delete-btn"
                                        onClick={e => this.handleDeleteClick(e)}
                                        value={review.id}
                                    >
                                        Delete
                                    </button>
                                    <br />
                                </section>
                            );
                        })}
                    </section>
                    <br />
                    <Link id="new-review" to={'/new-review'}>
                        New Review
                    </Link>
                </div>
            </main>
        );
    }
}

export default ReviewList;
