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