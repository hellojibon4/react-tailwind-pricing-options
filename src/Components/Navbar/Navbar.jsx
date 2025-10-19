import React from 'react';

import { Logs, X } from 'lucide-react'
import Link from '../Navbar/Link'
import { useState } from 'react'

const Navbar = () => {
    const NAvigstionData = [
        {
            "id": 1,
            "name": "Home",
            "path": "/",
            "url": "https://example.com/"
        },
        {
            "id": 2,
            "name": "About",
            "path": "/about",
            "url": "https://example.com/about"
        },
        {
            "id": 3,
            "name": "Services",
            "path": "/services",
            "url": "https://example.com/services"
        },
        {
            "id": 4,
            "name": "Blog",
            "path": "/blog",
            "url": "https://example.com/blog"
        },
        {
            "id": 5,
            "name": "Contact",
            "path": "/contact",
            "url": "https://example.com/contact"
        }
    ]
    const [opne, setopne] = useState(false);
    const Links = NAvigstionData.map(route => <Link key={route.id} route={route} ></Link>)
    return (
        <nav className='flex justify-between  text-black my-4'>

            <span onClick={() => setopne(!opne)} className='flex '>


                {
                    opne ?
                        <X className='md:hidden'></X> :
                        <Logs className='md:hidden'> </Logs>

                }
                <h1 className='ml-4 '>Logo</h1>
            </span>



            <ul className='md:flex hidden mx-5'>
                {
                    Links
                }

            </ul>

            <ul className={`md:hidden absolute bg-cyan-100  duration-1000
          ${opne ? 'top-14 font-semibold  ' : '-top-40 '}
          `}>
                {
                    Links
                }
            </ul>

            <button className='btn'>Sine in</button>
        </nav>
    );
};

export default Navbar;