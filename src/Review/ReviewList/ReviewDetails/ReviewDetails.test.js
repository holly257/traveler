import React from "react"; 
import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import ReviewDetails from "./ReviewDetails";

it('renders without crashing', () => {
    render(
        <BrowserRouter>
            <ReviewDetails >
                
            </ReviewDetails>
        </BrowserRouter>
    )
})