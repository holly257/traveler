import React from 'react';

const AppContext = React.createContext({
    searchList: [],
    reviews: [],
    trips: [],
    updateSearchResults: () => {},
    setReviewsList: () => {},
    addReview: () => {},
    deleteReview: () => {},
    
    setTripsState: () => {},
    startNewTrip: () => {},
    updateSelectedTrip: () => {},
    addDay: () => {},
    addActivity: () => {},
    editActivity: () => {},
    deleteActivity: () => {},
})

export default AppContext;