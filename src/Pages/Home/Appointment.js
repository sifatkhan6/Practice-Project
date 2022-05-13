import React from 'react';
import doctorSmall from '../../assets/images/doctor-small.png'
import background from '../../assets/images/appointment.png'
import ButtonPrimary from '../Shared/ButtonPrimary';

const Appointment = () => {
    return (
        <section style={{
            background: `url(${background}) no-repeat center`,
            backgroundSize: 'cover',
        }}
            className='flex justify-center items-center px-4 mt-52 py-16 lg:py-0'>
            <div className='flex1'>
                <img className='mt-[-100px] hidden lg:block' src={doctorSmall} alt="" />
            </div>
            <div className='flex-1 pr-16'>
                <h2 className='text-xl text-secondary font-bold'>Appointment</h2>
                <h3 className='text-4xl font-bold text-white mt-6'>Make an appointment Today</h3>
                <p className='text-white mt-6'>If you need appointment then please visit our online appintment section and book a day. Our system will help you in further process.</p>
                <div className='mt-8'>
                    <ButtonPrimary>Get Started</ButtonPrimary>
                </div>
            </div>
        </section>
    );
};

export default Appointment;