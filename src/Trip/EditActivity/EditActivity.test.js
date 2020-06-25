import React from 'react';
import { render } from '@testing-library/react';
import EditActivity from './EditActivity';
import AppContext from '../../App/AppContext';
import { BrowserRouter } from 'react-router-dom';

const data = [
    {
        city: 'Bangkok',
        country: 'Thailand',
        days: [
            {
                days_id: 1,
                trip_id: 1,
                activities: [
                    {
                        activity: 'breakfast at cafe',
                        day_id: 1,
                        id: 2,
                        meridiem: 'am',
                        start_time: 9,
                    },
                ],
            },
        ],
        id: 1,
        name: 'Weekend Trip',
        user_id: 1,
    },
];

const contextValue = {
    trips: data,
};

const match = {
    params: {
        tripId: '1',
        dayId: '1',
        activityId: '2',
    },
};

it('renders without crashing', () => {
    render(
        <AppContext.Provider value={contextValue}>
            <BrowserRouter>
                <EditActivity match={match} />
            </BrowserRouter>
        </AppContext.Provider>
    );
});

it('renders button text', () => {
    const { getByText } = render(
        <AppContext.Provider value={contextValue}>
            <BrowserRouter>
                <EditActivity match={match} />
            </BrowserRouter>
        </AppContext.Provider>
    );
    const linkElement = getByText(/Save Edit/i);
    expect(linkElement).toBeInTheDocument();
});
