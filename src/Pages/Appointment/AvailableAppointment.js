import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import BookingModal from './BookingModal';
import Service from './Service';

const AvailableAppointment = ({date}) => {

    // const [services, setServices] = useState([]);
    const [treatment, setTreatment] = useState(null);

    const formettedDate = format(date, 'PP');

    const {data: services, isLoading, refetch} = useQuery(['available', formettedDate], () => fetch(`http://localhost:5000/available?date=${formettedDate}`)
        .then(res => res.json())
        )

        if(isLoading){
            return <Loading></Loading>
        }

    // useEffect( () => {
    //     fetch(`http://localhost:5000/available?date=${formettedDate}`)
    //     .then(res => res.json())
    //     .then(data => setServices(data))
    // }, [formettedDate])

    return (
        <div className='px-12'>
            <p className='text-center text-secondary'>Available Services On <strong>{format(date, 'PP')}</strong></p>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 py-16'>
                {
                    services.map(service => <Service
                    key={service._id}
                    service={service}
                    setTreatment={setTreatment}></Service>)
                }
            </div>
            {
                treatment && <BookingModal date={date} treatment={treatment} setTreatment={setTreatment}
                refetch={refetch}></BookingModal>
            }
        </div>
    );
};

export default AvailableAppointment;