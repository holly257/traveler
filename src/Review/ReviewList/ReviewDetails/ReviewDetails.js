import React from 'react';
import './ReviewDetails.css';
import AppContext from '../../../App/AppContext';
import { Link, Switch, Route } from 'react-router-dom';
import EditReview from '../EditReview/EditReview';
import PrivateRoute from '../../../SignIn/AuthRouting/PrivateRoute';

class ReviewDetails extends React.Component {
    static contextType = AppContext;

    render() {
        const selectedReview = this.context.reviews.find(
            review => review.id.toString() === this.props.match.params.reviewId
        );

        if (!selectedReview) {
            return <div>Loading...</div>;
        }
        return (
            <Switch>
                <Route exact path={`/review/:reviewId`}>
                    <section id="main-review">
                        <div id="review-details-container">
                            <Link className="button back-btn" to={`/review`}>
                                Back
                            </Link>

                            <h5>Name: </h5>
                            <p>{selectedReview.name}</p>
                            <h5>Rating: </h5>
                            <p>{selectedReview.rating}</p>

                            <br />
                            <h5>Location: </h5>
                            <p>
                                {selectedReview.city}, {selectedReview.country}
                            </p>
                            <h5>Address: </h5>
                            <p>{selectedReview.address}</p>

                            <br />
                            <h5>Category: </h5>
                            <p>{selectedReview.category}</p>

                            <h5>Pictures:</h5>
                            <img
                                className="review-details-img"
                                src={selectedReview.image}
                                alt={selectedReview.image_alt}
                            />

                            <h5>Imgage Description: </h5>
                            <p>{selectedReview.image_alt}</p>

                            <h5>Comments:</h5>
                            <p>{selectedReview.comments}</p>
                            <br />

                            <Link className="button" to={`/review/${selectedReview.id}/edit`}>
                                Edit
                            </Link>
                        </div>
                    </section>
                </Route>
                <PrivateRoute exact path={`/review/:reviewId/edit`} component={EditReview} />
            </Switch>
        );
    }
}

export default ReviewDetails;
