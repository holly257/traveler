import React from 'react';

const AppContext = React.createContext({
    searchList: [],
    reviews: [],
    bookmarked: [],
    trips: [],
    updateSearchResults: () => {},
    setReviewsList: () => {},
    setBookmarkedList: () => {},
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
