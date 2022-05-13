import React from 'react';
import qoute from '../../assets/icons/quote.svg'
import people1 from '../../assets/images/people1.png'
import people2 from '../../assets/images/people2.png'
import people3 from '../../assets/images/people3.png'
import Review from './Review';

const Testimonial = () => {
    const reviews = [
        {
            _id: 1,
            name: 'Winson Herry',
            location: 'California',
            description: 'This is the dynamic review part. This reviews will load from batabse, not from hard code.',
            img: people1,
        },
        {
            _id: 2,
            name: 'Winson Herry',
            location: 'California',
            description: 'This is the dynamic review part. This reviews will load from batabse, not from hard code.',
            img: people2,
        },
        {
            _id: 3,
            name: 'Winson Herry',
            location: 'California',
            description: 'This is the dynamic review part. This reviews will load from batabse, not from hard code.',
            img: people3,
        },
    ];
    return (
        <div className='mt-28'>
            <div className='flex justify-between'>
                <div>
                    <p className='text-xl text-secondary font-bold'>Testimonial</p>
                    <h3 className='text-4xl'>What Our Patients Says</h3>
                </div>
                <img className='w-24 lg:w-48' src={qoute} alt="" />
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-4 mb-4'>
                {
                    reviews.map(review => <Review
                        key={review._id}
                        review={review}
                    ></Review>)
                }
        </div>
        </div >
    );
};

export default Testimonial;