import React from 'react';

const AppContext = React.createContext({
    trips: [],
    reviews: [],
    addReview: () => {},
    startNewTrip: () => {},
    addDay: () => {},
    addActivity: () => {},
    
    //are these connected to anything? 
    SaveTrip: () => {},
    SubmitSearch: () => {},
})

export default AppContext;