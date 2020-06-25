import React from 'react';
import ReactDOM from 'react-dom';
import { render } from '@testing-library/react';
import AppContext from '../App/AppContext';
import SearchPage from './SearchPage';

const data = [
    {
        name: 'test name',
        image: 'image.value',
        image_alt: 'altText',
        city: 'city.value',
        country: 'country.value',
        address: 'address.value',
        rating: 5,
        category: 'shopping',
        comments: 'comments.value',
    },
];

const contextValue = {
    reviews: data,
    updateSearchResults: jest.fn(() => {}),
    searchList: [],
};

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
        <AppContext.Provider value={contextValue}>
            <SearchPage />
        </AppContext.Provider>,
        div
    );
    ReactDOM.unmountComponentAtNode(div);
});

it('renders search reviews title', () => {
    const { getByText } = render(
        <AppContext.Provider value={contextValue}>
            <SearchPage />
        </AppContext.Provider>
    );
    const linkElement = getByText(/Search Reviews/i);
    expect(linkElement).toBeInTheDocument();
});
