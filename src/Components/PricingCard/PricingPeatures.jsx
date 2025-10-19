import { CircleCheckBig } from 'lucide-react';
import React from 'react';

const PricingPeatures = ({ feature }) => {
    console.log(feature)

    return (
        <p className='flex gap-2 mt-2'>< CircleCheckBig className='text-lime-500'></CircleCheckBig>{feature}</p>

    );
};

export default PricingPeatures;