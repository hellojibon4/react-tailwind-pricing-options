import React from 'react';

const Link = ({ route }) => {
    return (
        <li className='mr-6 broder-2 border-r-orange-950'>
            <a href={route.path}>{route.name}</a>
        </li>
    );
};

export default Link;

