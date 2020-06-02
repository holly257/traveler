import React from 'react'
import './AddActivity.css'

class AddActivity extends React.Component {

    optRange () {
        let range = [];

        for(let i=1; i<=12; i++) {
            range.push(<option key={i} value='{i}'>{i}</option>)
        }
        return range;
    }

    render () {
        return (
            <span id='day'>     
                <select>
                    {this.optRange()}
                </select>
                <select>
                    <option>AM</option>
                    <option>PM</option>
                </select>
                <textarea rows='3'  placeholder='Activity' ></textarea>
                
                <hr />
            </span>
        )
    }
}

export default AddActivity