import React from 'react';
import Info from '../Info/Info';
import Appointment from './Appointment';
import Banner from './Banner';
import Contact from './Contact';
import Exceptional from './Exceptional';
import Footer from '../Shared/Footer';
import Services from './Services';
import Testimonial from './Testimonial';

const Home = () => {
    return (
        <div>
            <div className='px-4 lg:px-8'>
                <Banner></Banner>
                <Info></Info>
                <Services></Services>
                <Exceptional></Exceptional>
            </div>
            <Appointment></Appointment>
            <div className='px-4 lg:px-8'>
                <Testimonial></Testimonial>
            </div>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Home;