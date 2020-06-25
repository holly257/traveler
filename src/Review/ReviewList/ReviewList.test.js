import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import ReviewList from './ReviewList';

it('renders without crashing', () => {
    render(
        <BrowserRouter>
            <ReviewList></ReviewList>
        </BrowserRouter>
    );
});

test('renders title', () => {
    const { getByText } = render(
        <BrowserRouter>
            <ReviewList />
        </BrowserRouter>
    );
    const linkElement = getByText(/My Review's/i);
    expect(linkElement).toBeInTheDocument();
});
