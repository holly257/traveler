import React from "react"; 
import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import NewReview from "./NewReview";

it('renders without crashing', () => {
    render(
        <BrowserRouter>
            <NewReview >
                
            </NewReview>
        </BrowserRouter>
    )
})