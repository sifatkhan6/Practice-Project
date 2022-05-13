import React from 'react';
import background from '../../assets/images/appointment.png'
import ButtonPrimary from '../Shared/ButtonPrimary';

const Contact = () => {
    return (
        <section className='mt-28 py-20'
            style={{
                background: `url(${background}) no-repeat center`,
                backgroundSize: 'cover',
            }}>
            <div className='flex flex-col justify-center'>
                <p className='text-secondary font-bold flex justify-center'>Contact Us</p>
                <h3 className='text-4xl text-white flex justify-center'>Stay connected with us</h3>
            </div>
            <form action="" className='flex flex-col items-center justify-center'>
                <input type="email" placeholder="Email Address" className="input input-bordered w-full max-w-lg mt-12" />
                <input type="text" placeholder="Subject" className="input input-bordered w-full max-w-lg mt-6" />
                <textarea className="textarea textarea-bordered w-full max-w-lg mt-6 mb-8" placeholder="Your Meaasge"></textarea>
                <ButtonPrimary>Submit</ButtonPrimary>
            </form>
        </section>
    );
};

export default Contact;