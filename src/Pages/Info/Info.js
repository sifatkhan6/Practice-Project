import React from 'react';
import clock from '../../assets/icons/clock.svg'
import marker from '../../assets/icons/marker.svg'
import phone from '../../assets/icons/phone.svg'
import InfoCard from './InfoCard';

const Info = () => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-4 px-6'>
            <InfoCard img={clock} bgClass="bg-gradient-to-r from-secondary to-primary" cardTitle="Opening Hours" cardInfo="You have to contact with us for this info."></InfoCard>
            <InfoCard img={marker} bgClass="bg-accent" cardTitle="Visit our location" cardInfo="Brooklyn, NY 10036, United States"></InfoCard>
            <InfoCard img={phone} bgClass="bg-gradient-to-r from-secondary to-primary" cardTitle="Contact us now" cardInfo="+000 123 456789"></InfoCard>
        </div>
    );
};

export default Info;