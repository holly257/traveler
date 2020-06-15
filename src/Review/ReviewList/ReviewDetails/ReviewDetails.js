import React from 'react';
import './ReviewDetails.css'
import AppContext from '../../../App/AppContext'
import { Link } from 'react-router-dom'

class ReviewDetails extends React.Component {
    static contextType = AppContext;

    render() {
        if(!this.context.reviews.length){
            return <div>loading</div>
        }
        
        const selectedReview = this.context.reviews.find(review =>
            review.id.toString() === this.props.match.params.reviewId    
        )

        return (
            <section id='main-review'>
                <div id='review-details-container'>
                    <Link id='review-details-link' to={`/review`}>Back</Link>       
                    
                    <h5>Name: </h5>
                    <p>{selectedReview.name}</p>
                    <h5>Rating: </h5>
                    <p>{selectedReview.rating}</p>
                    
                    <br />
                    <h5>Location: </h5>
                    <p>{selectedReview.city}, {selectedReview.country}</p>
                    <h5>Address: </h5>
                    <p>{selectedReview.address}</p>

                    <br />
                    <h5>Category: </h5>                                          
                    <p>{selectedReview.category}</p>

                    <h5>Pictures:</h5>
                    <img className='review-details-img' src={selectedReview.image} alt={selectedReview.altText}/>
                    
                    <h5>Imgage Description: </h5>
                    <p>{selectedReview.image_alt}</p>
                        
                    <h5>Comments:</h5>
                    <p>{selectedReview.comments}</p>
                        
                </div>
            </section>
        )
    }
}

export default ReviewDetails;