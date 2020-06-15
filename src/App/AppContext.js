import React from 'react';

const AppContext = React.createContext({
    trips: [],
    reviews: [],
    setTripsState: () => {},
    addReview: () => {},
    deleteReview: () => {},
    startNewTrip: () => {},
    addDay: () => {},
    addActivity: () => {},
    editActivity: () => {},
    
    updateSelectedTrip: () => {},

    //onClick in search page, not setup in App.js yet 
    SubmitSearch: () => {},
})

export default AppContext;