import React from 'react';

const AppContext = React.createContext({
    searchList: [],
    reviews: [],
    trips: [],
    updateSearchResults: () => {},
    setReviewsList: () => {},
    addReview: () => {},
    editReview: () => {},
    deleteReview: () => {},

    setTripsState: () => {},
    startNewTrip: () => {},
    updateSelectedTrip: () => {},
    addDay: () => {},
    deleteDay: () => {},
    addActivity: () => {},
    editActivity: () => {},
    deleteActivity: () => {},
});

export default AppContext;
