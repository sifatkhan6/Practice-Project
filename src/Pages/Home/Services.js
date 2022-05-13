import React from 'react';
import Service from './Service';
import fluoride from '../../assets/images/fluoride.png'
import cavity from '../../assets/images/cavity.png'
import whitening from '../../assets/images/whitening.png'

const Services = () => {

    const services = [
        {
            _id: 1,
            title: 'Fluoride Treatment',
            description: '',
            img: fluoride,
        },
        {
            _id: 2,
            title: 'Cavity Filling',
            description: '',
            img: cavity,
        },
        {
            _id: 3,
            title: 'Teeth Whitening',
            description: '',
            img: whitening,
        },
    ];

    return (
        <div className='text-center py-32'>
            <h1 className='text-primary font-bold'>OUR SERVICES</h1>
            <h1 className='text-3xl my-4'>Services We Provide</h1>

            <div className='my-8 grid grid-cols-1 lg:grid-cols-3 gap-6'>
                {
                    services.map(service => <Service
                    key={service._id}
                    service={service}
                    ></Service>)
                }
            </div>
        </div>
    );
};

export default Services;