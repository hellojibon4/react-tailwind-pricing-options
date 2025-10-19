import React, { use } from 'react';
import PricingCard from '../PricingCard/PricingCard';
import DaisyPricingCard from '../../DaisyPricingCard/DaisyPricingCard';

const PricingOptions = ({ pricingPromise }) => {
    const pricingData = use(pricingPromise);
    // console.log(pricingData);

    return (
        <div>
            <h1 className='text-5xl'>Get Your Prodcak Price</h1>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-2 mt-8  '>
                {/* {
                    pricingData.map(pricing => <PricingCard 
                        key={pricing.id}
                        pricing={pricing} ></PricingCard>)
                } */}
                {
                    pricingData.map(prices => <DaisyPricingCard
                    key={prices.id}
                    prices={prices}
                    ></DaisyPricingCard>)
                }
            </div>
        </div>
    );
};

export default PricingOptions;