import React from 'react';
import './NewTrip.css'
import AddActivity from './AddActivity/AddActivity'
import AppContext from '../../AppContext'

class NewTrip extends React.Component {
    static contextType = AppContext;

    render () { 
        console.log(this.context.trips[0])   
        return (
            <section id='main-trip'>
                <div id='container'>       
                    <h3 id='trip-title'>Trip</h3>
                    <form>
                        <input type='text' placeholder='name' required />
                        <input type='text' placeholder='location' required />

                        <div id='day-cont'>
                            <AddActivity />
                            <button className='new-trip-btns'>Add Activity</button>
                        </div>

                        <br />
                        <button className='new-trip-btns'>Add Day</button>
                        <button className='new-trip-btns' id='search-btn'>Save</button>
                    </form>
                </div>
            </section>
        )
    }
}

//notes section for each trip
//packing list section for each trip

export default NewTrip;