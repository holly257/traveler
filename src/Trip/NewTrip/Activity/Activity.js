import React from 'react'
import './Activity.css'

class Activity extends React.Component {

    optRange (n) {
        let range = [];

        for(let i=1; i<=12; i++) {
            range.push(<option key={i} value='{i}' selected={i == n}>{i}</option>)
        }
        return range;
    }

    render () {
        console.log(this.props)
        return (
            <span id='day'>
                <select>
                    {this.optRange(this.props.start_time)}
                </select>
                <select>
                    <option selected={this.props.meridiem === 'am'}>AM</option>
                    <option selected={this.props.meridiem === 'pm'}>PM</option>
                </select>
                <textarea rows='3'  placeholder='Activity' value={this.props.task ? this.props.task : ''}></textarea>
                
                <hr />
            </span>
        )
    }
}

export default Activity