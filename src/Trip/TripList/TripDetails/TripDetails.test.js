import React from "react"; 
import { render } from "@testing-library/react";
import ReactDOM from "react-dom"; 
import { BrowserRouter } from "react-router-dom";
import TripDetails from "./TripDetails";
import AppContext from '../../../App/AppContext'

it('renders without crashing', () => {
    render(
        <BrowserRouter>
            <TripDetails >
                
            </TripDetails>
        </BrowserRouter>
    )
})

const data = [
    {
        city: "Bangkok",
        country: "Thailand",
        days: [
            {
                days_id: 1,
                trip_id: 1,
                activities: [
                    {
                        activity: "breakfast at cafe",
                        day_id: 1,
                        id: 2,
                        meridiem: "am",
                        start_time: 9,
                    }, 
                ],
            },
        ],
        id: 1,
        name: "Weekend Trip",
        user_id: 1,
    }
]

it.skip('renders button text', () => {
    const { getByText } = render(
        <AppContext.Provider value={contextValue}>
            <TripDetails />
        </AppContext.Provider>);
    const linkElement = getByText(/Back/i);
    expect(linkElement).toBeInTheDocument();
})

const contextValue = {
    trips: data, 
} 
 
it.skip('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(
 
        <AppContext.Provider value={contextValue}>
            <TripDetails />
        </AppContext.Provider>
        , div)
    ReactDOM.unmountComponentAtNode(div)
})
