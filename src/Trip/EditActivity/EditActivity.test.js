import React from "react"; 
import { render } from "@testing-library/react";
import EditActivity from "./EditActivity";
import AppContext from '../../App/AppContext'

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

it.skip('renders without crashing', () => {
    render(
        <AppContext.Provider value={contextValue}>
            <EditActivity />
        </AppContext.Provider>
    )
})

it.skip('renders button text', () => {
    const { getByText } = render(
        <AppContext.Provider value={contextValue}>
            <EditActivity />
        </AppContext.Provider>);
    const linkElement = getByText(/Save Edit/i);
    expect(linkElement).toBeInTheDocument();
})