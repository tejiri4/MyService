// react libraries
import React from 'react';

// component
import CustomizeText from '../CustomizeText';
import ServiceCard from '../ServiceCard';

// fixtures
import { ServiceCardDetails } from './fixtures';

// styles
import './Services.scss';


const Services = () => {
  return (
    <div className='service-component'>
      <div className='service-component__content'>
        <div className='service-component__content--header'>What <CustomizeText text='Service' color='#ff5fa4' /> i offer</div>
        <div className='service-component__content--service-cards'>
          {
            ServiceCardDetails.map(({ img, title, description }, index) =>
              <ServiceCard
                img={img}
                title={title}
                description={description}
                key={index}
              />
            )
          }
        </div>
      </div>
    </div>
  );
}

export default Services;
