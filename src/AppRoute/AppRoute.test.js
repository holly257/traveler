import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import AppRoute from './AppRoute';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
        <BrowserRouter>
            <AppRoute />
        </BrowserRouter>,
        div
    );
    ReactDOM.unmountComponentAtNode(div);
});
