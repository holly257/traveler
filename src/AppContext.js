import React from 'react';

const AppContext = React.createContext({
    trips: [],
    reviews: [],
    AddActivity: () => {},
    AddDay: () => {},
    SaveTrip: () => {},
    SubmitSearch: () => {},
    addReview: () => {},
    startNewTrip: () => {},
})

export default AppContext;