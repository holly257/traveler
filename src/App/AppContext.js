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
    addBookmark: () => {},
    editReview: () => {},
    deleteReview: () => {},
    deleteBookmark: () => {},

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
