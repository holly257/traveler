import React from 'react';
import './NewTrip.css'
import AddActivity from './AddActivity/AddActivity'
import AppContext from '../../AppContext'

class NewTrip extends React.Component {
    static contextType = AppContext;

    state = {
        anotherActivity: [],
        anotherDay: [],
    }

    anotherActivity() {
        this.setState({ anotherActivity: [...this.state.anotherActivity, '']})
    }

    anotherDay() {
        this.setState({ anotherDay: [...this.state.anotherDay, '']})
    }

    render () { 
        const selectedTrip = this.context.trips.find(trip => 
            trip.trip_id == this.props.match.params.tripId
        )
        // let value = this.context.trips;  
        
        if(selectedTrip){
            return (
                <section id='main-trip'>
                    <div id='container'>
                        {/* <div>{value.map(item => item.name)}</div>*/}
                        
                        <h3 id='trip-title'>Trip </h3>
                        <form>
                            <input type='text' value={selectedTrip.name} required />
                            <input type='text' value={selectedTrip.location.city} placeholder='location' required />
                            <input type='text' value={selectedTrip.location.country} placeholder='location' required />

                            {selectedTrip.days.map((day, index) => {
                                return (
                                    <>
                                        <div key={day.day_id} id='day-cont'>
                                        <p>Day {day.day_id}</p>
                                            {day.activity.map((day, index) => {
                                                return (
                                                    <AddActivity {...day} key={day.activity_id}/>
                                                )
                                            })}
                                            <button onClick={(e) => this.anotherActivity(e)} className='new-trip-btns'>Add Activity</button>
                                        </div>
                                        <br />
                                    </>
                                    )
                            })}

                            <button onClick={(e) => this.anotherDay(e)} className='new-trip-btns'>Add Day</button>
                            <button className='new-trip-btns' id='search-btn'>Save</button>
                        </form>
                    </div>
                </section>
            )
        } else {
            return (
                <section id='main-trip'>
                    <div id='container'>
                        {/* <div>{value.map(item => item.name)}</div>*/}
                        
                        <h3 id='trip-title'>Trip </h3>
                        <form>
                            <input type='text' placeholder='name' required />
                            <input type='text' placeholder='city' required />
                            <input type='text' placeholder='country' required />

                            {this.state.anotherDay.map((day, index) => {
                                return (
                                    <>
                                        <div id='day-cont'>
                                        <p>Day {index+1}</p>
                                            {this.state.anotherActivity.map((thing, index) => {
                                                return (
                                                    <AddActivity />
                                                )
                                            })}
                                            <button onClick={(e) => this.anotherActivity(e)} className='new-trip-btns'>Add Activity</button>
                                        </div>
                                        <br />
                                    </>
                                    )
                            })}

                            <button onClick={(e) => this.anotherDay(e)} className='new-trip-btns'>Add Day</button>
                            <button className='new-trip-btns' id='search-btn'>Save</button>
                        </form>
                    </div>
                </section>
            )
        }
    }
}

//add activity button pushes empty obj to day array
//add day button pushes 

//notes section for each trip
//packing list section for each trip

export default NewTrip;