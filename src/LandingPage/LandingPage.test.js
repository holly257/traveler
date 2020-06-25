import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import LandingPage from './LandingPage';

it('renders without crashing', () => {
    render(
        <BrowserRouter>
            <LandingPage>
                <main id="main-landing">
                    <br />
                    <h1></h1>
                    <br />
                    <br />
                    <h2></h2>
                    <p></p>
                    <p></p>
                </main>
                <section id="landing-start">
                    <a></a>
                    <a></a>
                </section>
            </LandingPage>
        </BrowserRouter>
    );
});

test('renders title', () => {
    const { getByText } = render(
        <BrowserRouter>
            <LandingPage />
        </BrowserRouter>
    );
    const linkElement = getByText(/Plan your next trip with ease!/i);
    expect(linkElement).toBeInTheDocument();
});
