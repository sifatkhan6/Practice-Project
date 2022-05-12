import React from 'react';

const InfoCard = ({ img, cardTitle, cardInfo, bgClass }) => {
    return (
        <div class={`card card-side bg-base-100 shadow-xl ${bgClass}`}>
            <figure className='pl-4'>
                <img src={img} alt="Movie" />
            </figure>
            <div class="card-body">
                <h2 class="card-title text-white">{cardTitle}</h2>
                <p className='text-white'>{cardInfo}</p>
            </div>
        </div>
    );
};

export default InfoCard;