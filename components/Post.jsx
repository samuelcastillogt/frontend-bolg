import React from 'react';
import Link from 'next/link';
const Post = (props) => {
    return (
        <div className='card'>
            <img src={props.imgDesc} alt="" />
            <div className='card-content'>
                {props.title}
            </div>
            <Link  href={`/blog/${props.link}`}>
              <div className='h-14 bg-gradient-to-r from-sky-500 to-indigo-500 btn'>
                  Leer mas... 
              </div>
               
            </Link>
        </div>
    );
};

export default Post;