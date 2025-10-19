import React from 'react';
import PricingPeatures from './PricingPeatures';

const PricingCard = ({ pricing }) => {
    console.log(pricing)

    const { name, price, description, features } = pricing
    return (

        <div className='bg-[#2a1148] flex flex-col text-white rounded-2xl p-5'>
            {/* Card haser */}
            <div>
                <h1 className='text-3xl text-center font-bold'>{name}</h1>
                <h3 className='text-xl'>{price}</h3>
            </div>
            {/* Card body */}
            <div className='bg-[#d97f26] rounded-2xl p-2 mt-2 flex-1 '>
                <p>{description}</p>
                {
                    features?.map((feature, index) => <PricingPeatures
                        key={index}
                        feature={feature} ></PricingPeatures>)
                }
                <button className="btn w-full rounded-xl bg-amber-400 mt-2 hover:bg-amber-700 hover:text-white">BUY NOW</button>
            </div>
        </div>
    );
};

export default PricingCard;