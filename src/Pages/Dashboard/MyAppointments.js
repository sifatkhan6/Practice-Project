import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import { signOut } from 'firebase/auth';

const MyAppointments = () => {

    const [appointments, setAppointments] = useState([]);
    console.log(appointments);
    const [user] = useAuthState(auth);
    const navigate = useNavigate();

    useEffect(() => {
        if (user) {
            fetch(`http://localhost:5000/booking?patient=${user.email}`, {
                method: 'GET',
                headers: {
                    'authorization': `bearer ${localStorage.getItem('accessToken')}`
                }
            })
                .then(res => {
                    if (res.status === 401 || res.status === 403) {
                        signOut(auth);
                        localStorage.removeItem('accessToken');
                        navigate('/home');
                    }
                    return res.json()
                })
                .then(data => {
                    setAppointments(data)
                })
        }
    }, [user])

    return (
        <div class="overflow-x-auto mt-10">
            <table class="table w-full">
                <thead>
                    <tr>
                        <th></th>
                        <th>Name</th>
                        <th>Treatment</th>
                        <th>Date</th>
                        <th>Time</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        appointments.map((appointment, index) => <tr>
                            <td>{index + 1}</td>
                            <td>{appointment.patientName}</td>
                            <td>{appointment.treatment}</td>
                            <td>{appointment.date}</td>
                            <td>{appointment.slot}</td>
                        </tr>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default MyAppointments;