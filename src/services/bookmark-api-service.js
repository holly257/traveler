import { API_URL } from '../config';
import TokenService from './token-service';

const BookmarkService = {
    add_bookmark(review_id) {
        return fetch(`${API_URL}/reviews/bookmarks`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                authorization: `bearer ${TokenService.getAuthToken()}`,
            },
            body: JSON.stringify({ id: review_id }),
        }).then(res => {
            if (!res.ok) {
                return res.json().then(error => {
                    throw error;
                });
            }
            return;
        });
    },
    // delete_bookmark(review_id) {
    //     return fetch(`${API_URL}/reviews/bookmarks`, {
    //         method: 'DELETE',
    //         headers: {
    //             'content-type': 'application/json',
    //             Authorization: `Bearer ${TokenService.getAuthToken()}`
    //         },
    //      body: JSON.stringify({ id: review_id }),
    //     }).then((res) => {
    //         if (!res.ok) {
    //             return res.json().then((error) => {
    //                 throw error;
    //             });
    //         }
    //         return;
    //     });
    // }
};

export default BookmarkService;
