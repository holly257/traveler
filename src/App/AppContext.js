import React from 'react';

const AppContext = React.createContext({
    trips: [],
    reviews: [],
    AddActivity: () => {},
    addDay: () => {},
    SaveTrip: () => {},
    SubmitSearch: () => {},
    addReview: () => {},
    startNewTrip: () => {},
})

export default AppContext;