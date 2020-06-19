import React from 'react';
import './ResultsPage.css'

class ResultsPage extends React.Component {
    render () {
        return (
            <div className='each-result'>
                <img 
                    className='results-image' 
                    src={this.props.review.image}
                    alt={this.props.review.altText}
                />
                <section>
                    <h5 className='trip-name'>{this.props.review.name}</h5>
                    <h6>Rating: {this.props.review.rating}</h6>
                    <h6>{this.props.review.city}, {this.props.review.country}</h6>
                    <p className='search-comments'>{this.props.review.comments}</p>
                </section>
            </div>
        )
    }
}

export default ResultsPage;