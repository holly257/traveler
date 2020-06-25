import React from 'react';
import ReactDOM from 'react-dom';
import AppContext from '../../App/AppContext';
import ResultsPage from './ResultsPage';

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
};

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
        <AppContext.Provider value={contextValue}>
            <ResultsPage key={1} review={data[0]} />
        </AppContext.Provider>,
        div
    );
    ReactDOM.unmountComponentAtNode(div);
});
