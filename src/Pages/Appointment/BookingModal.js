import React from 'react';
import { format } from 'date-fns';
import auth from '../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';

const BookingModal = ({ treatment, date, setTreatment, refetch }) => {

    const { _id, name, slots } = treatment;
    const [user] = useAuthState(auth);
    const formettedDate = format(date, 'PP');

    const handleBooking = event => {
        event.preventDefault();

        const slot = event.target.slot.value;

        const booking = {
            treatmentId: _id,
            treatment: name,
            date: formettedDate,
            slot,
            patient: user.email,
            patientName: user.displayName,
            phone: event.target.number.value
        }

        fetch('http://localhost:5000/booking', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                if (data.success) {
                    toast(`Appointment is set in ${formettedDate} at ${slot}`)
                }
                else {
                    toast.error(`You already have an Appointmrnt in ${data.booking?.date} at ${data.booking?.slot}`)
                }
                refetch();
                // for cleaning the modal 
                setTreatment(null);
            });
    }

    return (
        <div>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="font-bold text-lg text-secondary">{name}</h3>

                    <form className='grid grid-cols-1 gap-3 mt-6 justify-items-center' onSubmit={handleBooking}>
                        <input type="text" value={format(date, 'PP')} className="input input-bordered input-secondary w-full max-w-xs" disabled />

                        <select name='slot' className="input input-bordered input-secondary w-full max-w-xs">
                            {
                                slots.map((slot, index) => <option
                                    key={index}
                                    value={slot}
                                >{slot}</option>)
                            }
                        </select>

                        <input type="text" name='name' disabled value={user?.displayName || ''} className="input input-bordered input-secondary w-full max-w-xs" />

                        <input type="email" name='email' disabled value={user?.email || ''} className="input input-bordered input-secondary w-full max-w-xs" />

                        <input type="text" name='number' placeholder="Phone Number" className="input input-bordered input-secondary w-full max-w-xs" />

                        <input type="submit" value="Submit" className="btn btn-primarybtn btn-primary text-white font-bold bg-gradient-to-r from-secondary to-primary w-full max-w-xs" />
                    </form>

                </div>
            </div>
        </div>
    );
};

export default BookingModal;