import React, { useEffect } from 'react';
const PostsContiner = ({children}) => {

    return (
        <div className='postContainer'>
          {children}
        </div>
    );
};

export default PostsContiner;