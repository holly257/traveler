import React from "react"; 
import ReactDOM from "react-dom"; 
import renderer from "react-test-renderer";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

global.fetch = jest.fn(() =>
    Promise.resolve({
        json: () => Promise.resolve({
            name: 'test name', 
            image: 'image.value',
            image_alt: 'altText',
            city: 'city.value', 
            country: 'country.value',
            address: 'address.value',
            rating: 5,
            category: 'shopping', 
            comments: 'comments.value',
        }),
        ok: true
    })
)

beforeEach(() => {
    fetch.mockClear();
})
 
it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(

        <BrowserRouter>
            <App />
        </BrowserRouter>
        , div)
    ReactDOM.unmountComponentAtNode(div)
})
