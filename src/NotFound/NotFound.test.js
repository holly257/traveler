import React from "react"; 
import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import NotFound from "./NotFound";

it('renders without crashing', () => {
    render(
        <BrowserRouter>
            <NotFound >
                <main id='main-landing'>
                    <p id='notFound'>Sorry, Page Not Found</p>
                </main>
            </NotFound>
        </BrowserRouter>
    )
})

test('renders text', () => {
    const { getByText } = render(
        <BrowserRouter>
            <NotFound />
        </BrowserRouter>);
    const linkElement = getByText(/Sorry, Page Not Found/i);
    expect(linkElement).toBeInTheDocument();
})
