import React from 'react';
import './NewReview.css'
import AppContext from '../AppContext'


// https://images.unsplash.com/photo-1591076232271-e80adf362a13?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1083&q=80

class NewReview extends React.Component {
    static contextType = AppContext;

    SubmitReview = e => {
        e.preventDefault()
        const { name, rating, city, country, address, 
            category, comments, image, altText } = e.target

        const review = {
            // review_id: '',
            // user_id: '',
            name: name.value, 
            images: {
                image: image.value,
                altText: altText.value,
            },
            location: {
                city: city.value, 
                country: country.value,
                address: address.value,
            },
             
            rating: rating.value,
            category: category.value, 
            comments: comments.value,
            date: new Date().toISOString()

            
        }

        this.context.addReview(review)
        console.log(review)
    }

    render() { 
        return (
            <section id='main-review'>
                <div id='container'>       
                    <h3 id='review-title'>Review</h3>
                    <form onSubmit={(e) => this.SubmitReview(e)}>
                        <h6>Name:</h6>
                        <input 
                            className='allReview' 
                            type='text' 
                            placeholder='name' 
                            name='name' 
                            required />
                        
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
                            <input 
                                type='text' 
                                placeholder='City' 
                                name='city' 
                                required />
                            <input 
                                type='text' 
                                placeholder='Country' 
                                name='country' 
                                required />
                            <input 
                                type='text' 
                                placeholder='Address' 
                                name='address' 
                                required />
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

                        <h6>Pictures:</h6>
                        <input 
                            className='allReview' 
                            type='url' 
                            placeholder='link to image' 
                            name='image' />
                        <input 
                            className='allReview' 
                            type='text' 
                            placeholder='briefly describe the image' 
                            name='altText' />


                        <br />
                        <h6>Comments:</h6>
                        <textarea 
                            className='allReview' 
                            rows='5' 
                            name='comments' 
                            required >
                        </textarea>
                        
                        <button 
                            type='submit' 
                            className='allReview' 
                            id='search-btn'>
                            Submit
                        </button>
                    </form>
                </div>
            </section>
        )
    }
}

export default NewReview;