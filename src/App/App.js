import React from 'react';
import './App.css';
import AppContext from './AppContext';
import { API_URL } from '../config';
import AppRoute from '../AppRoute/AppRoute';

class App extends React.Component {
    state = {
        searchList: [],
        reviews: [],
        bookmarked: [],
        trips: [],
        error: false,
    };

    componentDidMount() {
        fetch(`${API_URL}/search`)
            .then(res => {
                if (!res.ok) {
                    throw new Error('Something went wrong, please try again soon.');
                }
                return res;
            })
            .then(res => res.json())
            .then(reviewData => {
                this.setState({
                    searchList: reviewData,
                });
            })
            .catch(error => {
                this.setState({
                    error: 'Something went wrong. Please try again later.',
                });
            });
    }

    handleSetTripsState = allTrips => {
        this.setState({
            trips: allTrips,
        });
    };

    handleSetReviewsList = reviewsData => {
        this.setState({
            reviews: reviewsData,
        });
    };

    handleSetBookmarkedList = bookmarkedData => {
        this.setState({
            bookmarked: bookmarkedData,
        });
    };

    handleAddReview = reviewToAdd => {
        this.setState({
            reviews: [...this.state.reviews, reviewToAdd],
            searchList: [...this.state.searchList, reviewToAdd],
        });
    };

    handleBookmarkReview = reviewToAdd => {
        this.setState({
            bookmarked: [...this.state.bookmarked, reviewToAdd],
        });
    };

    handleEditReview = (updatedReview, reviewId) => {
        const selectedReviewIndex = this.state.reviews.findIndex(
            review => review.id.toString() === reviewId
        );

        const newReviews = this.state.reviews;
        newReviews[selectedReviewIndex] = updatedReview;

        this.setState({
            reviews: newReviews,
        });
    };

    handleDeleteReview = reviewToDelete => {
        const newReviewsList = this.state.reviews.filter(
            review => review.id.toString() !== reviewToDelete
        );

        this.setState({
            reviews: newReviewsList,
        });
    };

    handleDeleteBookmark = bookmarkId => {
        const newBookmarkedList = this.state.bookmarked.filter(
            review => review.id.toString() !== bookmarkId
        );

        this.setState({
            bookmarked: newBookmarkedList,
        });
    };

    handleUpdateSearchResults = searchResults => {
        this.setState({
            searchList: searchResults,
        });
    };

    handleUpdateSelectedTrip = (allTripInfo, trip_id) => {
        const chosenTripIndex = this.state.trips.findIndex(trips => trips.id === trip_id);

        let newTrips = this.state.trips;
        newTrips[chosenTripIndex] = allTripInfo;

        this.setState({
            trips: newTrips,
        });
    };

    handleStartNewTrip = newTrip => {
        this.setState({
            trips: [...this.state.trips, newTrip],
        });
    };

    handleAddDay = (newDay, tripId) => {
        const selectedTrip = this.state.trips.find(trip => trip.id.toString() === tripId);

        if (!selectedTrip.days) {
            selectedTrip['days'] = [newDay];
        } else {
            selectedTrip.days = [...selectedTrip.days, newDay];
        }

        let newTripsArr = [...this.state.trips];

        this.setState({
            trips: newTripsArr,
        });
    };

    handleDeleteDay = (dayId, tripId) => {
        const selectedTrip = this.state.trips.find(trip => trip.id.toString() === tripId);

        const newDays = selectedTrip.days.filter(day => day.days_id.toString() !== dayId);

        selectedTrip.days = newDays;

        this.setState({
            trips: [...this.state.trips],
        });
    };

    handleAddActivity = (newActivity, tripId, dayId) => {
        const selectedTrip = this.state.trips.find(trip => trip.id.toString() === tripId);

        const selectedDay = selectedTrip.days.find(day => day.days_id.toString() === dayId);

        if (!selectedDay.activities) {
            selectedDay['activities'] = [newActivity];
        } else {
            selectedDay.activities = [...selectedDay.activities, newActivity];
        }

        this.setState({
            trips: [...this.state.trips],
        });
    };

    handleEditActivity = (editedActivity, tripId, dayId, activityId) => {
        const selectedTrip = this.state.trips.find(trip => trip.id.toString() === tripId);

        const selectedDay = selectedTrip.days.find(day => day.days_id.toString() === dayId);

        const selectedActivityIndex = selectedDay.activities.findIndex(
            activity => activity.id.toString() === activityId
        );

        selectedDay.activities[selectedActivityIndex] = editedActivity;

        this.setState({
            trips: [...this.state.trips],
        });
    };

    handleDeleteActivity = (activityId, dayId, tripId) => {
        const selectedTrip = this.state.trips.find(trip => trip.id.toString() === tripId);

        const selectedDay = selectedTrip.days.find(day => day.days_id.toString() === dayId);

        const newActivitiesList = selectedDay.activities.filter(
            activity => activity.id.toString() !== activityId
        );

        selectedDay.activities = newActivitiesList;

        this.setState({
            trips: [...this.state.trips],
        });
    };

    render() {
        const value = {
            searchList: this.state.searchList,
            reviews: this.state.reviews,
            bookmarked: this.state.bookmarked,
            trips: this.state.trips,

            updateSearchResults: this.handleUpdateSearchResults,
            setReviewsList: this.handleSetReviewsList,
            setBookmarkedList: this.handleSetBookmarkedList,
            addReview: this.handleAddReview,
            addBookmark: this.handleBookmarkReview,
            editReview: this.handleEditReview,
            deleteReview: this.handleDeleteReview,
            deleteBookmark: this.handleDeleteBookmark,

            setTripsState: this.handleSetTripsState,
            startNewTrip: this.handleStartNewTrip,
            updateSelectedTrip: this.handleUpdateSelectedTrip,
            addDay: this.handleAddDay,
            deleteDay: this.handleDeleteDay,
            addActivity: this.handleAddActivity,
            editActivity: this.handleEditActivity,
            deleteActivity: this.handleDeleteActivity,
        };
        return (
            <AppContext.Provider value={value}>
                <AppRoute />
            </AppContext.Provider>
        );
    }
}

export default App;
