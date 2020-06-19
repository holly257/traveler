import React from "react"; 
import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import NewTrip from "./NewTrip";

it('renders without crashing', () => {
    render(
        <BrowserRouter>
            <NewTrip/>
        </BrowserRouter>
    )
})

it('renders button text', () => {
    const { getByText } = render(
        <BrowserRouter>
            <NewTrip />
        </BrowserRouter>);
    const linkElement = getByText(/Get Started/i);
    expect(linkElement).toBeInTheDocument();
})