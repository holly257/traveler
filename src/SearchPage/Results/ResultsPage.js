import React from 'react';
import './ResultsPage.css';
import BookmarkReview from './BookmarkReview/BookmarkReview';

class ResultsPage extends React.Component {
    render() {
        return (
            <div className="each-result">
                <img
                    className="results-image"
                    src={this.props.review.image}
                    alt={this.props.review.image_alt}
                />

                <section className="results-content">
                    <h5 className="results-trip-name">{this.props.review.name}</h5>
                    <h6 className="review-details">Rating: {this.props.review.rating}</h6>
                    <h6 className="review-details">
                        {this.props.review.city}, {this.props.review.country}
                    </h6>
                    <p className="search-comments">{this.props.review.comments}</p>
                </section>
                <BookmarkReview id={this.props.review.id} />
            </div>
        );
    }
}

export default ResultsPage;
