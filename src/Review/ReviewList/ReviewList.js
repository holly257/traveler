import React from 'react';
import { Link } from 'react-router-dom'
import './ReviewList.css'
import AppContext from '../../App/AppContext'
import { API_URL } from '../../config'
import TokenService from '../../services/token-service'

class ReviewList extends React.Component {
    static contextType = AppContext;

    componentDidMount() {
        const options = {
            method: 'GET',
            headers: {
                'content-type': 'application/json',
                'authorization': `bearer ${TokenService.getAuthToken()}`
            }
        }
        fetch(`${API_URL}/reviews`, options)
          .then(res => {
            if(!res.ok) {
                throw new Error('Something went wrong, please try again soon.')
                }
            return res
          })
          .then(res => res.json())
          .then((reviewData) => {
            this.context.setReviewsList(reviewData)
          })
          .catch(error => {
            console.error(error)
            this.setState({error: 'Something went wrong. Please try again later.'})
          })
    
      }

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

        fetch(`${API_URL}/reviews/${review_id}`, options)
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
        if(!this.context.reviews.length){
            return (
                <main>
                <h3 id='title'>My review's</h3>
                <section id='review-cont'>
                    <h6>No reviews yet...</h6>
                </section>
                <br />
                <Link id='new-review' to={'/new-review'}>New review</Link>
            </main>
            )
        }
        return (
            <main>
                <h3 id='title'>My review's</h3>
                
                <section id='review-cont'>
                    {this.context.reviews.map((review, index) => {
                        return (
                            <section key={index} className='reviews'>
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