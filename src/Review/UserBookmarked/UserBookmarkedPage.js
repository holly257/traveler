import React from 'react';
import { Link } from 'react-router-dom';
import '../ReviewList/ReviewList.css';
import AppContext from '../../App/AppContext';
import { API_URL } from '../../config';
import TokenService from '../../services/token-service';

class UserBookmarkedPage extends React.Component {
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

        fetch(`${API_URL}/reviews/bookmarks`, options)
            .then(res => {
                if (!res.ok) {
                    throw new Error('Bookmarks - Something went wrong, please try again soon.');
                }
                return res;
            })
            .then(res => res.json())
            .then(reviewData => {
                this.context.setBookmarkedList(reviewData);
            })
            .catch(error => {
                this.setState({
                    error: 'Bookmarks - Something went wrong. Please try again later.',
                });
            });
    }

    handleDeleteClick = e => {
        e.preventDefault();
        console.log('not implemented yet');
        // const review_id = e.target.value;
        // const options = {
        //     method: 'DELETE',
        //     headers: {
        //         'content-type': 'application/json',
        //         authorization: `bearer ${TokenService.getAuthToken()}`,
        //     },
        // };

        // fetch(`${API_URL}/reviews/${review_id}`, options)
        //     .then(res => {
        //         if (!res.ok) {
        //             return res.json().then(error => {
        //                 throw error;
        //             });
        //         }
        //         return;
        //     })
        //     .then(() => {
        //         this.setState({ success: 'Review Deleted' });
        //         this.context.deleteReview(review_id);
        //     })
        //     .catch(error => {
        //         this.setState({
        //             error: 'Something went wrong. Please try again later.',
        //         });
        //     });
    };

    render() {
        const { error, success } = this.state;

        return (
            <main id="main-review">
                <div>
                    <h1 className="review-list-title">My Bookmarks</h1>

                    {!this.context.bookmarked.length ? (
                        <section>
                            <div role="alert">{error && <p className="error">{error}</p>}</div>
                            <h6>No bookmarked reviews yet...</h6>
                        </section>
                    ) : (
                        <section>
                            <div role="alert">{error && <p className="error">{error}</p>}</div>
                            <div role="alert">
                                {success && <p className="success">{success}</p>}
                            </div>
                            {this.context.bookmarked.map((review, index) => {
                                return (
                                    <section key={review.id} className="reviews">
                                        <Link
                                            className="review-list"
                                            to={`/bookmarks/${review.id}`}
                                        >
                                            {review.name}
                                        </Link>
                                        <h2 className="review-list-link">
                                            {review.city}, {review.country}
                                        </h2>
                                        {/* <button
                                        className="review-delete button"
                                        onClick={e => this.handleDeleteClick(e)}
                                        value={review.id}
                                    >
                                        Delete
                                    </button> */}
                                        <br />
                                    </section>
                                );
                            })}
                        </section>
                    )}
                    <br />
                    <Link className="button new-review" to={'/search'}>
                        Search
                    </Link>
                    <Link className="button new-review" to={'/review'}>
                        My Reviews
                    </Link>
                </div>
            </main>
        );
    }
}

export default UserBookmarkedPage;
