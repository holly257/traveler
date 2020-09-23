import React from 'react';
import './BookmarkReview.css';
import { FontAwesomeIcon } from '../../../../node_modules/@fortawesome/react-fontawesome';
import { faBookmark as BookmarkFilled } from '../../../../node_modules/@fortawesome/free-solid-svg-icons';
import { faBookmark as BookmarkOutline } from '@fortawesome/free-regular-svg-icons';

class BookmarkReview extends React.Component {
    state = {
        saved_review: false,
        id: this.props.id,
    };

    toggleSaved = () => {
        let prevState = this.state.saved_review;
        this.setState({
            saved_review: !prevState,
        });
        console.log(this.state.id);
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
