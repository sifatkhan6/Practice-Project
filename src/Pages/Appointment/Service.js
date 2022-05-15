import React from 'react';

const Service = ({ service, setTreatment }) => {

    const { name, slots } = service;

    return (
        <div class="card lg:max-w-lg bg-base-100 shadow-xl">
            <div class="card-body text-center">
                <h2 class="card-title text-secondary justify-center">{name}</h2>
                <p>
                    {
                        slots.length > 0
                            ? <span>{slots[0]}</span>
                            : <span className='text-red-500'>Try Another date</span>
                    }
                </p>
                <p>{slots.length} {slots.length > 0 ? 'Spaces' : 'Space'} Available</p>

                <div class="card-actions justify-center">
                    <label for="booking-modal"
                        disabled={slots.length === 0}
                        onClick={() => setTreatment(service)}
                        className="btn btn-primarybtn btn-primary text-white font-bold bg-gradient-to-r from-secondary to-primary">Book Appointment</label>
                </div>
            </div>
        </div>
    );
};

export default Service;