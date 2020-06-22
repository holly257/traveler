import React from "react"; 
import { render } from "@testing-library/react";
import ReactDOM from "react-dom"; 
import { BrowserRouter, MemoryRouter } from "react-router-dom";
import TripDetails from "./TripDetails";
import AppContext from '../../../App/AppContext'

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

const match = {
    params: {
        tripId: '1',
        dayId: '1',
        activityId: '2'
    }
}

const contextValue = {
    trips: data, 
} 

it('renders button text', () => {
    const { getByText } = render(
        <AppContext.Provider value={contextValue}>
            <MemoryRouter initialEntries={["/trip/1"]}>
                <TripDetails match={match}/>
            </MemoryRouter>
        </AppContext.Provider>);
    const linkElement = getByText('Add Day'); 
    expect(linkElement).toBeInTheDocument();
})
 
it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(
        <AppContext.Provider value={contextValue}>
            <BrowserRouter>
                <TripDetails match={match}/>
            </BrowserRouter>
        </AppContext.Provider>
        , div)
    ReactDOM.unmountComponentAtNode(div)
})
