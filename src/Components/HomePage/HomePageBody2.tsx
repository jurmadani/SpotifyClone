import React from 'react';
import './HomePageBody2.css';
import image1 from '../../Assets/Image1.png';
import image2 from '../../Assets/Image2.png';
import image3 from '../../Assets/Image3.png';
import image4 from '../../Assets/Image4.png';

export default function HomePageBody2() {
  const items = [
    {
      title: 'Ad-free music listening',
      caption: 'Enjoy uninterrupted music.',
      image: image1,
    },
    {
      title: 'Offline playback',
      caption: 'Save your data by listening offline.',
      image: image2,
    },
    {
      title: 'Play everywhere',
      caption: 'Listen on your speakers, TV, and other favorite devices.',
      image: image3,
    },
    {
      title: 'Pay your way',
      caption: 'Prepay with Paytm, UPI, and more.',
      image: image4,
    },
  ];

  return (
    <div className="homepage2Body">
      <h1 className="title">The power of Premium</h1>
      <div className="horizontal-list">
        {items.map((item, index) => (
          <div className="list-item" key={index}>
            <img src={item.image} alt={item.title} />
            <h2>{item.title}</h2>
            <p>{item.caption}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
