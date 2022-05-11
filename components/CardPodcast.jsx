import React from 'react';
import Link from 'next/link';
const CardPodcast = (props) => {
    console.log(props)
    return (
        <div className='card'>
            <img src={props.img} />
            <div className="card-content">
                <p>{props.title}</p>
                <Link href={`/podcasts/${props.url}`}>
                <div className='h-14 bg-gradient-to-r from-sky-500 to-indigo-500 btn'>
                    Escuchar
                </div>
                </Link>
            </div>
        </div>
    );
};

export default CardPodcast;