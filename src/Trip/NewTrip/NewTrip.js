import React from 'react';
import './NewTrip.css'
import AddActivity from './AddActivity/AddActivity'

class NewTrip extends React.Component {

    newActivity() {
         
    }

    render () {    
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
                            <button onClick={this.newActivity()}>Add Activity</button>
                            
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