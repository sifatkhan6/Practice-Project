import React from 'react';
import treatment from '../../assets/images/treatment.png'
import ButtonPrimary from '../Shared/ButtonPrimary';

const Exceptional = () => {
    return (
        <div className="hero min-h-screen bg-base-100 lg:px-28">
            <div className="hero-content flex-col lg:flex-row">
                <img src={treatment} className="max-w-sm rounded-lg shadow-2xl" alt=''/>
                <div className='lg:px-24'>
                    <h1 className="text-4xl font-bold">Exceptional Dental Care, on Your Terms</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <ButtonPrimary>Get Started</ButtonPrimary>
                </div>
            </div>
        </div>
    );
};

export default Exceptional;