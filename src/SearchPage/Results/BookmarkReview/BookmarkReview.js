import React from 'react';
import './BookmarkReview.css';
import AppContext from '../../../App/AppContext';
import BookmarkService from '../../../services/bookmark-api-service';
import { FontAwesomeIcon } from '../../../../node_modules/@fortawesome/react-fontawesome';
import { faBookmark as BookmarkFilled } from '../../../../node_modules/@fortawesome/free-solid-svg-icons';
import { faBookmark as BookmarkOutline } from '@fortawesome/free-regular-svg-icons';

class BookmarkReview extends React.Component {
    static contextType = AppContext;

    state = {
        saved_review: false,
        id: this.props.review.id,
        error: null,
    };

    toggleSaved = () => {
        let review = this.props.review;
        if (this.state.saved_review !== true) {
            this.bookmark_review(review);
        }
        this.setState({
            saved_review: true,
        });
    };

    bookmark_review = review => {
        this.setState({ error: null });
        BookmarkService.add_bookmark(review.id)
            .then(reviewData => {
                this.context.addBookmark(review);
            })
            .catch(error => {
                this.setState({
                    error: 'Something went wrong. Please try again later.',
                });
            });
    };

    render() {
        return (
            <>
                <FontAwesomeIcon
                    icon={this.state.saved_review ? BookmarkFilled : BookmarkOutline}
                    id="bookmark"
                    onClick={this.toggleSaved}
                />
            </>
        );
    }
}

export default BookmarkReview;
