import React from 'react';

const Servicesdata = () => {
  const serviceData = [
    {
      title: 'Oil Change',
      description: 'Provide options for different types of oil changes.',
      imageUrl: 'https://images.pexels.com/photos/13065690/pexels-photo-13065690.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      title: 'Brake Services',
      description: 'Include brake inspections, brake pad replacements, and more.',
      imageUrl: 'https://images.pexels.com/photos/3642618/pexels-photo-3642618.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
      title: 'Tire Services',
      description: 'Offer tire rotations, tire balancing, and tire replacements.',
      imageUrl: 'https://images.pexels.com/photos/3806249/pexels-photo-3806249.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
      title: 'Battery Services',
      description: 'Provide battery testing, battery replacement, and more.',
      imageUrl: 'https://images.pexels.com/photos/4517073/pexels-photo-4517073.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
      title: 'Engine Diagnostics',
      description: 'Include services to identify and diagnose engine-related issues.',
      imageUrl: 'https://images.pexels.com/photos/5184987/pexels-photo-5184987.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
      title: 'Electrical System Repairs',
      description: 'Offer services for troubleshooting and repairing electrical systems.',
      imageUrl: 'https://images.pexels.com/photos/6720532/pexels-photo-6720532.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      title: 'Heating and Cooling System',
      description: 'Provide services for radiator flushes, AC recharge, and more.',
      imageUrl: 'https://media.istockphoto.com/id/1415260440/photo/car-engine-overheating-close-up.jpg?b=1&s=612x612&w=0&k=20&c=SOZ9DQQlZk1glGrDESU372hJm2NRtJsUAJXiGLV_Ps8=',
    },
    {
      title: 'Suspension and Steering Repairs',
      description: 'Include services for shock absorber replacements, wheel alignment, and more.',
      imageUrl: 'https://www.minit-tune.com/wp-content/uploads/2018/12/steering2.jpg',
    },
    {
      title: 'Transmission Services',
      description: 'Offer transmission fluid flushes, filter replacements, and more.',
      imageUrl: 'https://i.pinimg.com/originals/ff/ae/ee/ffaeee5e2ef144597beda97b8bf41ca3.jpg',
    },
    {
      title: 'Exhaust System Repairs',
      description: 'Provide services for muffler replacements, exhaust pipe repairs, and more.',
      imageUrl: 'https://macdonaldsauto.com/ckuploads/images/exhaust.jpg',
    },
    // Add more service objects here
  ];

  return (
    <div className="services-container">
      <h1>Our Services</h1>
      <div className="services">
        {serviceData.map((service, index) => (

          <div className="service" key={index}>
            <img src={service.imageUrl} alt={service.title} />
            <h2>{service.title}</h2>
            <p>{service.description}</p>
          </div>

          
        ))}
      </div>
    </div>
  );
};

export default Servicesdata;
