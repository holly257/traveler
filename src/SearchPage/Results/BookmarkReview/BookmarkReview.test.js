import ReactDOM from 'react-dom';
import React from 'react';
import BookmarkReview from './BookmarkReview';

const review = {
    id: 1,
};

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<BookmarkReview review={review} />, div);
    ReactDOM.unmountComponentAtNode(div);
});
