import React from 'react';
import { Link } from 'react-router-dom'
import './ReviewList.css'
import AppContext from '../../App/AppContext'

class ReviewList extends React.Component {
    static contextType = AppContext;

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