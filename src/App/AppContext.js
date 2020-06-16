import React from 'react';

const AppContext = React.createContext({
    searchList: [],
    reviews: [],
    trips: [],
    
    setTripsState: () => {},

    serReviewsList: () => {},
    addReview: () => {},
    deleteReview: () => {},
    updateSearchResults: () => {},

    startNewTrip: () => {},
    addDay: () => {},
    addActivity: () => {},
    editActivity: () => {},
    
    updateSelectedTrip: () => {},

    //onClick in search page, not setup in App.js yet 
    SubmitSearch: () => {},
})

export default AppContext;