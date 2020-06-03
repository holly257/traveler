import React from 'react';
import './ResultsPage.css'

class ResultsPage extends React.Component {
    render () {
        return (
            <div key={this.props.review.review_id} className='each-result'>
                <img 
                    className='results-image' 
                    src={this.props.review.images.image}
                    alt={this.props.review.images.altText}
                />
                <section>
                    <h5>{this.props.review.name}</h5>
                    <h6>Rating: {this.props.review.rating}</h6>
                    <h6>{this.props.review.location.city}, {this.props.review.location.country}</h6>
                    <p className='search-comments'>{this.props.review.comments}</p>
                    <button>add to trip</button>
                    
                </section>
            </div>
        )
    }
}

export default ResultsPage;