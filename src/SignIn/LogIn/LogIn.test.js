import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import LogIn from './LogIn';

it('renders without crashing', () => {
    render(
        <BrowserRouter>
            <LogIn>
                <form></form>
                <div></div>
            </LogIn>
        </BrowserRouter>
    );
});

test('renders link text', () => {
    const { getByText } = render(
        <BrowserRouter>
            <LogIn />
        </BrowserRouter>
    );
    const linkElement = getByText(/Submit/i);
    expect(linkElement).toBeInTheDocument();
});
