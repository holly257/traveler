import React from 'react';
import './NewTrip.css'
import AddActivity from './AddActivity/AddActivity'
import AppContext from '../../AppContext'

class NewTrip extends React.Component {
    static contextType = AppContext;

    render () { 
        console.log(this.context.trips)   
        return (
            <section id='main-trip'>
                <div id='container'>       
                    <h3>Itinerary</h3>
                    <form>
                        <input type='text' placeholder='name' required />
                        <input type='text' placeholder='location' required />

                        <div id='day-cont'>
                            <AddActivity />
                            {/* adds more activity blocks */}
                            <button >Add Activity</button>
                            
                        </div>
                        <br />
                        <button>Add Day</button>
                        <button id='search-btn'>Save</button>
                    </form>
                </div>
            </section>
        )
    }
}

//notes section for each trip
//packing list section for each trip

export default NewTrip;