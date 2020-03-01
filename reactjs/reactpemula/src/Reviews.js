import React from 'react';
import './App.css';

function ReviewItems() {
    // mempersiapkan data dummy json
    const users = [
        {
            "id": 1,
            "name": "Yuki Kato",
            "photo": "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
            "review": "Wow, harganya murah, bahan kualitas terbaik. Pas untuk suami aku."
        },
        {
            "id": 2,
            "name": "Jason Statham",
            "photo": "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
            "review": "Wow, harganya murah, bahan kualitas terbaik. Pas untuk suami aku."
        },
        {
            "id": 3,
            "name": "The Rock",
            "photo": "https://images.pexels.com/photos/428364/pexels-photo-428364.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
            "review": "Wow, harganya murah, bahan kualitas terbaik. Pas untuk suami aku."
        }
    ];
    const listReviews = users.map((itemReview) =>
        <div className="Item">
            <img src={itemReview.photo} />
            <div className="User">
                <h3>{itemReview.name}</h3>
                <p>{itemReview.review}.</p>
            </div>
        </div>
    );
    return (
        <div className="Review-box">
            <h2>Reviews</h2>
            {listReviews}
        </div>
    );
}

export default ReviewItems;