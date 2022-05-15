import React from 'react';
import { format } from 'date-fns';

const BookingModal = ({ treatment, date, setTreatment}) => {

    const { name, slots } = treatment;

    const handleBooking = event => {
        event.preventDefault();

        const slot = event.target.slot.value;
        setTreatment(null);
    }

    return (
        <div>
            <input type="checkbox" id="booking-modal" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                    <label for="booking-modal" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 class="font-bold text-lg text-secondary">{name}</h3>

                    <form className='grid grid-cols-1 gap-3 mt-6 justify-items-center' onSubmit={handleBooking}>
                        <input type="text" value={format(date, 'PP')} className="input input-bordered input-secondary w-full max-w-xs" disabled />

                        <select name='slot' className="input input-bordered input-secondary w-full max-w-xs">
                            {
                                slots.map(slot => <option value={slot}>{slot}</option>)
                            }
                        </select>

                        <input type="text" name='name' placeholder="Your Name" className="input input-bordered input-secondary w-full max-w-xs" />

                        <input type="email" name='email' placeholder="Email Address" className="input input-bordered input-secondary w-full max-w-xs" />

                        <input type="text" name='number' placeholder="Phone Number" className="input input-bordered input-secondary w-full max-w-xs" />

                        <input type="submit" value="Submit" className="btn btn-primarybtn btn-primary text-white font-bold bg-gradient-to-r from-secondary to-primary w-full max-w-xs" />
                    </form>

                </div>
            </div>
        </div>
    );
};

export default BookingModal;