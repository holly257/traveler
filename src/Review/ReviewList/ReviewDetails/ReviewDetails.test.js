import React from 'react';
import { render } from '@testing-library/react';
import ReactDOM from 'react-dom';
import { BrowserRouter, MemoryRouter } from 'react-router-dom';
import ReviewDetails from './ReviewDetails';
import AppContext from '../../../App/AppContext';

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

const match = {
    params: {
        reviewId: '9',
    },
};

const contextValue = {
    reviews: data,
};

it('renders button text', () => {
    const { getByText } = render(
        <AppContext.Provider value={contextValue}>
            <MemoryRouter initialEntries={['/review/9']}>
                <ReviewDetails match={match} />
            </MemoryRouter>
        </AppContext.Provider>
    );
    const linkElement = getByText('Edit');
    expect(linkElement).toBeInTheDocument();
});

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
        <AppContext.Provider value={contextValue}>
            <BrowserRouter>
                <ReviewDetails match={match} />
            </BrowserRouter>
        </AppContext.Provider>,
        div
    );
    ReactDOM.unmountComponentAtNode(div);
});
