import React from 'react';
import './NewReview.css'

class NewReview extends React.Component {
    SubmitReview = e => {
        e.preventDefault()
        const { name, rating, city, country, category, comments }= e.target
        const review = {
            name: name.value, 
            rating: rating.value, 
            location: {
                city: city.value, 
                country: country.value,
            }, 
            category: category.value, 
            comments: comments.value,
        }
        console.log(review)
    }

    render() { 
        return (
            <section id='main-review'>
                <div id='container'>       
                    <h3 id='review-title'>Review</h3>
                    <form onSubmit={(e) => this.SubmitReview(e)}>
                        <h6>Name:</h6>
                        <input className='allReview' type='text' placeholder='name' name='name' required />
                        
                        <h6>Rating:</h6>
                        <select className='allReview' name='rating' required>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>  
                        </select>
                        
                        <h6>Location:</h6>
                        <div className='allReview'>
                            <input type='text' placeholder='City' name='city' required />
                            <input type='text' placeholder='Country' name='country' required />
                        </div>
                        
                        <div>
                            <h6>Category:</h6>
                            <select className='allReview' name='category'  required>
                                <option>restaurant</option>
                                <option>bar/coffee</option>
                                <option>shopping</option>
                                <option>activity</option>
                                <option>lodging</option>  
                            </select>
                        </div>

                        <br />
                        <h6>Comments:</h6>
                        <textarea className='allReview' rows='5' name='comments' required ></textarea>
                        
                        <button type='submit' className='allReview' id='search-btn'>Submit</button>
                    </form>
                </div>
            </section>
        )
    }
}

export default NewReview;