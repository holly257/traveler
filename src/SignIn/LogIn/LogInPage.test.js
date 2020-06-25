import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import LogInPage from './LogInPage';

it('renders without crashing', () => {
    render(
        <BrowserRouter>
            <LogInPage>
                <section id="login">
                    <div id="container">
                        <h1 className="allItems">Log In</h1>
                    </div>
                </section>
            </LogInPage>
        </BrowserRouter>
    );
});

test('renders title text', () => {
    const { getByText } = render(
        <BrowserRouter>
            <LogInPage />
        </BrowserRouter>
    );
    const linkElement = getByText(/Log In/i);
    expect(linkElement).toBeInTheDocument();
});
