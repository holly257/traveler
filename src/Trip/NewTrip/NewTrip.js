import React from 'react';
import './NewTrip.css'
import Activity from './Activity/Activity'
import AppContext from '../../AppContext'

class NewTrip extends React.Component {
    static contextType = AppContext;
    
    state = {
        trips: this.context.trips,
    }


    //work in progress
    AddActivity = e => {
        
        console.log(e.target.value)

        const selectedTripId = this.context.trips.find(trip => 
            trip.trip_id == this.props.match.params.tripId
        )

        const selectedDay = selectedTripId.days.find(day => 
            day.trip_id == e.target.value
        )

        if(selectedDay){
            this.setState({ trips: [...this.state.trips, '']})
        }
        console.log(selectedDay)

    }

    SaveTrip = e => {
        e.preventDefault()
        const { name, city, country  } = e.target
        const trip = {
            // trip_id: 1,
            // user_id: 1,
            name: name.value,
            location: {
                city: city.value,
                country: country.value,
            },
            // days: [
            //     {
            //         // day_id: 1,
            //         activity: [
            //             {
            //                 // activity_id: 1,
            //                 start_time: start_time.value,
            //                 meridiem: meridiem.value,
            //                 task: task.value,
            //             },
            //         ] 
            //     },
            // ]
        }

        // console.log(trip)
    }

    render () { 
        const selectedTrip = this.context.trips.find(trip => 
            trip.trip_id == this.props.match.params.tripId
        )
        
        if(selectedTrip){
            return (
                <section id='main-trip'>
                    <div id='container'>
                        <h3 id='trip-title'>Trip </h3>
                        <form onSubmit={(e) => this.SaveTrip(e)}>
                            <input type='text' name='name' value={selectedTrip.name} required />
                            <input type='text' name='city' value={selectedTrip.location.city} placeholder='location' required />
                            <input type='text' name='country' value={selectedTrip.location.country} placeholder='location' required />

                            {selectedTrip.days.map((day, index) => {
                                return (
                                    <>
                                        <div key={day.day_id} id='day-cont'>
                                        <p>Day {day.day_id}</p>
                                            {day.activity.map((day, index) => {
                                                return (
                                                    <Activity {...day} key={day.activity_id}/>
                                                )
                                            })}
                                            <button onClick={(e) => this.AddActivity(e)} value={day.day_id} className='new-trip-btns'>Add Activity</button>
                                        </div>
                                        <br />
                                    </>
                                    )
                            })}

                            <button onClick={(e) => this.AddDay(e)} className='new-trip-btns'>Add Day</button>
                            <button type='submit' className='new-trip-btns' id='search-btn'>Save</button>
                        </form>
                    </div>
                </section>
            )
        } else {
            return (
                <section id='main-trip'>
                    <div id='container'>
                        <h3 id='trip-title'>Trip </h3>
                        <form onSubmit={(e) => this.SaveTrip(e)}>
                            <input type='text' name='name' placeholder='name' required />
                            <input type='text' name='city' placeholder='city' required />
                            <input type='text' name='country' placeholder='country' required />
                            
                            <div id='day-cont'>
                            <p>Day 1</p>
                                <Activity key={1}/>
                                <button onClick={(e) => this.AddActivity(e)} className='new-trip-btns'>Add Activity</button>
                            </div>
                            <br />
                                           
                            <button onClick={(e) => this.AddDay(e)} className='new-trip-btns'>Add Day</button>
                            <button type='submit' className='new-trip-btns' id='search-btn'>Save</button>
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


//onClick get day block id
//push new obj to that day array

                            {/* {this.state.EachDay.map((day, index) => {
                                return (
                                    <>
                                        <div id='day-cont'>
                                        <p>Day {index+1}</p>
                                            {this.state.EachActivity.map((activity, index) => {
                                                return (
                                                    <Activity key={index}/>
                                                )
                                            })}
                                            <button onClick={(e) => this.AddActivity(e)} className='new-trip-btns'>Add Activity</button>
                                        </div>
                                        <br />
                                    </>
                                    )
                            })} */}