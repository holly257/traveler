import React from "react"; 
import ReactDOM from "react-dom"; 
import { rest } from "msw";
import { setupServer } from "msw/node";
import { screen, fireEvent, render, waitFor } from "@testing-library/react";
import renderer from "react-test-renderer";
import AppContext from "../App/AppContext";
import SearchPage from "./SearchPage";

const data = [{
    name: 'test name', 
    image: 'image.value',
    image_alt: 'altText',
    city: 'city.value', 
    country: 'country.value',
    address: 'address.value',
    rating: 5,
    category: 'shopping', 
    comments: 'comments.value',}]

const contextValue = {
    reviews: data, 
    updateSearchResults: jest.fn(() => {}),
    searchList: []
} 
 
it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(
 
        <AppContext.Provider value={contextValue}>
            <SearchPage />
        </AppContext.Provider>
        , div)
    ReactDOM.unmountComponentAtNode(div)
})

test('renders search reviews title', () => {
    const { getByText } = render(
        <AppContext.Provider value={contextValue}>
            <SearchPage />
        </AppContext.Provider>);
    const linkElement = getByText(/Search Reviews/i);
    expect(linkElement).toBeInTheDocument();
});

// const server = setupServer(
//     rest.get('/search/term?', (req, res, ctx) => {
//         return res(ctx.json( data ))
//     })
// )

// beforeAll(() => server.listen())
// afterEach(() => server.resetHandlers())
// afterAll(() => server.close())
 
// it('searches on click', async () => {
//     render(
//         <AppContext.Provider value={contextValue}>
//             <SearchPage />
//         </AppContext.Provider>
//     )
    
//     fireEvent.submit(screen.getByRole('form'), {target: {searchTerm: {value: 'city'}, category: {value: 'shopping'}}})

//     // await waitFor(() => screen.getByText('test name')) 

//     expect(contextValue.updateSearchResults).toHaveBeenCalled()
// })