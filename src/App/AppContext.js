import React from 'react';

const AppContext = React.createContext({
    trips: [],
    reviews: [],
    addReview: () => {},
    deleteReview: () => {},
    startNewTrip: () => {},
    addDay: () => {},
    addActivity: () => {},
    editActivity: () => {},
    setTripsState: () => {},
    updateSelectedTrip: () => {},

    
    //onClick in search page, not setup in App.js yet 
    SubmitSearch: () => {},
})

export default AppContext;