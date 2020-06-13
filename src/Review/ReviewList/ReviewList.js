import React from 'react';
import { Link } from 'react-router-dom'
import './ReviewList.css'
import AppContext from '../../App/AppContext'
import APIkey from '../../config'
import TokenService from '../../services/token-service'

class ReviewList extends React.Component {
    static contextType = AppContext;

    handleDeleteClick = e => {
        e.preventDefault()
        const review_id = e.target.value
        const options = {
            method: 'DELETE',
            headers: {
                'content-type': 'application/json',
                'authorization': `bearer ${TokenService.getAuthToken()}`
            }
        }

        fetch(`${APIkey}/reviews/${review_id}`, options)
        .then(res => {
            if(!res.ok) {
                return res.json().then(error => {
                    throw error
                })
            }
            return
        })
        .then(() => {
            this.context.deleteReview(review_id)
        })
        .catch(error => {
            console.error({error})
            this.setState(() => { throw error; })
        })
        this.context.deleteReview(review_id)
    }

    render () {
        return (
            <main>
                <h3 id='title'>My review's</h3>
                <section id='review-cont'>
                    {this.context.reviews.map((review) => {
                        return (
                            <section key={review.id} className='reviews'>
                                <Link to={`/review/${review.id}`}>{review.name}</Link>
                                <h6>{review.city}, {review.country}</h6>
                                <button onClick={(e) => this.handleDeleteClick(e)} value={review.id} id='delete-review'>Delete Review</button>
                                <br />
                            </section>
                        )
                    })}
                </section>
                <br />
                <Link id='new-review' to={'/new-review'}>New review</Link>
            </main>
        )
    }
}

export default ReviewList;