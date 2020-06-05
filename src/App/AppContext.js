import React from 'react';

const AppContext = React.createContext({
    trips: [],
    reviews: [],
    addReview: () => {},
    startNewTrip: () => {},
    addDay: () => {},
    addActivity: () => {},
    
    //onClick in search page, not setup in App.js yet 
    SubmitSearch: () => {},
})

export default AppContext;