import { API_URL } from '../config';
import TokenService from './token-service';

const BookmarkService = {
    get_bookmarks(review_id) {
        return fetch(`${API_URL}/bookmarks`, {
            method: 'GET',
            headers: {
                'content-type': 'application/json',
                authorization: `bearer ${TokenService.getAuthToken()}`,
            },
        }).then(res => (!res.ok ? res.json().then(e => Promise.reject(e)) : res.json()));
    },
    add_bookmark(review_id) {
        return fetch(`${API_URL}/bookmarks`, {
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
    delete_bookmark(bookmark_id) {
        return fetch(`${API_URL}/bookmarks/${bookmark_id}`, {
            method: 'DELETE',
            headers: {
                'content-type': 'application/json',
                Authorization: `Bearer ${TokenService.getAuthToken()}`,
            },
        }).then(res => {
            if (!res.ok) {
                return res.json().then(error => {
                    throw error;
                });
            }
            return;
        });
    },
};

export default BookmarkService;
