import React from 'react';
import './ResultsPage.css'

class ResultsPage extends React.Component {
    render () {
        return (
            <div className='each-result'>
                <img 
                    className='results-image' 
                    src={this.props.rating.images.image}
                    alt={this.props.rating.images.altText}
                />
                <section>
                    <h5>{this.props.rating.name}</h5>
                    <h6>Rating: {this.props.rating.rating}</h6>
                    <h6>{this.props.rating.location.city}, {this.props.rating.location.country}</h6>
                    <p className='search-comments'>{this.props.rating.comments}</p>
                    <button >add to trip</button>
                    
                </section>
            </div>
        )
    }
}

export default ResultsPage;