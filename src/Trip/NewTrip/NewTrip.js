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
        console.log(this.context.trips)

        // let value = this.context.trips;   
        return (
            <section id='main-trip'>
                <div id='container'>
                    {/* <div>{value.map(item => item.name)}</div>*/}
                    
                    <h3 id='trip-title'>Trip </h3>
                    <form>
                        <input type='text' placeholder='name' required />
                        <input type='text' placeholder='location' required />

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

//if trip_id === selected trip_id
    // then map over trip days 
    // populate days
        //map over activities
        //populate activities
//else populate empty

//navigating to new-trip creates new trip_id with one day
//add activity button pushes empty obj to day array
//add day button pushes 


//notes section for each trip
//packing list section for each trip

export default NewTrip;