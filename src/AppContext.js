import React from 'react';

const AppContext = React.createContext({
    trips: [],
    ratings: [],
    AddActivity: () => {},
    AddDay: () => {},
    SaveTrip: () => {},
    SubmitSearch: () => {},
})

export default AppContext;