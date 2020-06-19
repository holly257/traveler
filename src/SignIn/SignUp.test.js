import React from "react"; 
import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import SignUp from "./SignUp";

it('renders without crashing', () => {
    render(
        <BrowserRouter>
            <SignUp >
               <section>
                   <div>
                       <h1></h1>
                   </div>
               </section>
            </SignUp>
        </BrowserRouter>
    )
})

test('renders title text', () => {
    const { getByText } = render(
        <BrowserRouter>
            <SignUp />
        </BrowserRouter>);
    const linkElement = getByText(/Sign Up/i);
    expect(linkElement).toBeInTheDocument();
})