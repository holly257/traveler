import React from 'react';
import { Link } from 'react-router-dom';
import '../ReviewList/ReviewList.css';
import AppContext from '../../App/AppContext';
import { API_URL } from '../../config';
import TokenService from '../../services/token-service';
import BookmarkService from '../../services/bookmark-api-service';

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

        BookmarkService.get_bookmarks()
            .then(reviewData => {
                this.context.setBookmarkedList(reviewData);
            })
            .catch(error => {
                this.setState({
                    error: 'Something went wrong. Please try again later.',
                });
            });
    }

    handleDeleteClick = e => {
        e.preventDefault();
        let bookmarkId = e.target.value;

        BookmarkService.delete_bookmark(bookmarkId)
            .then(reviewData => {
                this.context.deleteBookmark(bookmarkId);
            })
            .catch(error => {
                this.setState({
                    error: 'Something went wrong. Please try again later.',
                });
            });
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
                                        <button
                                            className="review-delete button"
                                            onClick={e => this.handleDeleteClick(e)}
                                            value={review.id}
                                        >
                                            Remove
                                        </button>
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
