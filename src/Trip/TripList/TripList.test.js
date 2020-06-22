import React from "react"; 
import { render } from "@testing-library/react";
import ReactDOM from "react-dom"; 
import { BrowserRouter } from "react-router-dom";
import TripList from "./TripList";
import AppContext from '../../App/AppContext'

it('renders title', () => {
    const { getByText } = render(
        <BrowserRouter>
            <TripList />
        </BrowserRouter>);
    const linkElement = getByText(/My Trip's/i);
    expect(linkElement).toBeInTheDocument();
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

const contextValue = {
    trips: data, 
} 
 
it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(
        <AppContext.Provider value={contextValue}>
            <BrowserRouter>
                <TripList />
            </BrowserRouter>
        </AppContext.Provider>
        , div)
    ReactDOM.unmountComponentAtNode(div)
})
