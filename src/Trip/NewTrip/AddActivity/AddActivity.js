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

                {/*not pulling start time  */}
                <select value={this.props.start_time ? this.props.start_time : this.optRange()}>
                    {this.props.start_time ? this.props.start_time : this.optRange()}
                </select>
                <select>
                    {/*not sure how to use set am/pm and select */}
                    <option>AM</option>
                    <option>PM</option>
                </select>
                <textarea rows='3'  placeholder='Activity' value={this.props.activity ? this.props.activity : ''}></textarea>
                
                <hr />
            </span>
        )
    }
}

export default AddActivity