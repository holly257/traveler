import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PrivateRoute from '../SignIn/AuthRouting/PrivateRoute';
import Nav from '../Nav/Nav';
import LandingPage from '../LandingPage/LandingPage';
import SearchPage from '../SearchPage/SearchPage';
import NewReview from '../Review/NewReview';
import ReviewList from '../Review/ReviewList/ReviewList';
import TripList from '../Trip/TripList/TripList';
import NewTrip from '../Trip/NewTrip/NewTrip';
import LogInPage from '../SignIn/LogIn/LogInPage';
import SignUp from '../SignIn/SignUp';
import NotFound from '../NotFound/NotFound';

class AppRoute extends React.Component {
    render() {
        return (
            <div className="App">
                <Nav />
                <Switch>
                    <Route exact path="/" component={LandingPage} />
                    <Route exact path="/search" component={SearchPage} />

                    <Route exact path="/login" component={LogInPage} />
                    <Route exact path="/signup" component={SignUp} />

                    <PrivateRoute path="/review" component={ReviewList} />
                    <PrivateRoute exact path="/new-review" component={NewReview} />

                    <PrivateRoute exact path="/new-trip" component={NewTrip} />
                    <PrivateRoute path="/trip" component={TripList} />

                    <Route component={NotFound} />
                </Switch>
            </div>
        );
    }
}

export default AppRoute;
