import ReactDOM from 'react-dom';
import AppContext from '../../App/AppContext';
import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import ReviewList from './ReviewList';

it('renders title', () => {
    const { getByText } = render(
        <BrowserRouter>
            <ReviewList />
        </BrowserRouter>
    );
    const linkElement = getByText(/My Review's/i);
    expect(linkElement).toBeInTheDocument();
});

const data = [
    {
        address: '11 DF Malan, Roggebaai Square, Cape Town, 8012, South Africa',
        category: 'shopping',
        city: 'Cape Town',
        comments: 'best place to get groceries and snacks on your trip.',
        country: 'South Africa',
        date_created: '2020-06-20T14:45:17.977Z',
        id: 9,
        image: 'https://movendi.ngo/wp-content/uploads/2019/07/woolworths-pre-1024x545.jpg',
        image_alt: 'grocery store',
        name: 'Woolworths',
        rating: 5,
        user_id: 1,
    },
];

const contextValue = {
    reviews: data,
};

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
        <AppContext.Provider value={contextValue}>
            <BrowserRouter>
                <ReviewList />
            </BrowserRouter>
        </AppContext.Provider>,
        div
    );
    ReactDOM.unmountComponentAtNode(div);
});
