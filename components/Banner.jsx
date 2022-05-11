import Link from 'next/link';
import React from 'react';

const Banner = () => {
    return (
        <div className='banner' style={{backgroundImage: "-moz-initial./banner.jpg"}}>
            <p className='banner-title'>Escucha nuestro podcast</p>
            <Link href={"/podcasts"} className="">
                <div className='h-14 bg-gradient-to-r from-sky-500 to-indigo-500 btn'>
                  Quiero ser Cool y escuchar su podcast  
                </div> 
                </Link>
        </div>
    );
};

export default Banner;