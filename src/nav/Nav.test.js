import React from "react"; 
import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Nav from "./Nav";

it('renders without crashing', () => {
    render(
        <BrowserRouter>
            <Nav >
               <nav>
                   <a></a>
                   <span></span>
               </nav>
            </Nav>
        </BrowserRouter>
    )
})

test('renders link text', () => {
    const { getByText } = render(
        <BrowserRouter>
            <Nav />
        </BrowserRouter>);
    const linkElement = getByText(/Search/i);
    expect(linkElement).toBeInTheDocument();
})