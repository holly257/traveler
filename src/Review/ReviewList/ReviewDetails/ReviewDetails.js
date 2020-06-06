import React from 'react';
import './ReviewDetails.css'
import AppContext from '../../../App/AppContext'
import { Link } from 'react-router-dom'


// https://images.unsplash.com/photo-1591076232271-e80adf362a13?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1083&q=80

class ReviewDetails extends React.Component {
    static contextType = AppContext;

    SubmitReview = e => {
        e.preventDefault()
        const { name, rating, city, country, address, 
            category, comments, image, altText } = e.target

        const review = {
            // review_id: '',
            // user_id: '',
            name: name.value, 
            images: {
                image: image.value,
                altText: altText.value,
            },
            location: {
                city: city.value, 
                country: country.value,
                address: address.value,
            },
            rating: rating.value,
            category: category.value, 
            comments: comments.value,
        }

        // this.context.addReview(review)
    }

    render() {
        if(!this.context.trips.length){
            return <div>loading</div>
        }

        const selectedReview = this.context.reviews.find(review =>
            review.review_id === this.props.match.params.reviewId    
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
                    <p>{selectedReview.location.city}, {selectedReview.location.country}</p>
                    <h5>Address: </h5>
                    <p>{selectedReview.location.address}</p>

                    <br />
                    <h5>Category: </h5>                                          
                    <p>{selectedReview.category}</p>

                    <h5>Pictures:</h5>
                    <img className='review-details-img' src={selectedReview.images.image} alt={selectedReview.images.altText}/>
                    
                    {/* not working */}
                    {/* <p>Imgage Description: {selectedReview.images.altText}</p> */}
                        
                    <h5>Comments:</h5>
                    <p>{selectedReview.comments}</p>
                        
                    {/* <Link to={`/`}>Edit</Link> */}
                </div>
            </section>
        )
    }
}

export default ReviewDetails;