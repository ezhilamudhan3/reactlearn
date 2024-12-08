import React from 'react';
import img1 from './img1.jpeg';
import img2 from './img2.jpeg';
import img3 from './img3.jpeg';
import img4 from './img4.jpeg';

const TourCards = () => {
  const tours = [
    {
      title: 'LOGO DESIGN',
      description: 'MAKE YOUR LOGO PROFFESIONAL',
      image: img1,
    },
    {
      title: 'PACKAGE DESIGN',
      description: 'DESIGN YOUR PACKAGES WITH US',
      image: img2,
    },
    {
      title: 'WEB DESIGN',
      description: 'ENHANCE YOUR WEBSITE FOR BETTER EXPERIENCE',
      image: img3,
    },
    {
      title: 'BRANDING',
      description: 'GOOD BRANDING IS GOOD BUSINESS',
      image: img4,
    },
  ];

  return (
    <div className="container my-5">
      <div className="row">
        {tours.map((tour, index) => (
          <div className="col-md-3" key={index}>
            <div className="card">
              <img src={tour.image} className="card-img-top" alt={tour.title} />
              <div className="card-body bg-dark">
                <h5 className="card-title text-warning">{tour.title}</h5>
                <p className="card-text text-white">{tour.description}</p>
                <a href="/" className="btn btn-light">Info</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TourCards;