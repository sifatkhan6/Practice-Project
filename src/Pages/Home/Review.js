import React from 'react';

const Review = ({ review }) => {
    return (
        <div className="card lg:max-w-lg bg-base-100 shadow-xl py-4">
            <div className="card-body">
                <p>{review.description}</p>
            </div>
            <div className='flex items-center'>
                <div className="avatar">
                    <div className="w-20 rounded-full ring ring-secondary ring-offset-base-100 ml-8">
                        <img src={review.img} alt='' />
                    </div>
                </div>
                <div className='ml-6'>
                    <h3 className='font-bold'>{review.name}</h3>
                    <p>{review.location}</p>
                </div>
            </div>
        </div>
    );
};

export default Review;