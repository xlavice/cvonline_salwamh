import React from 'react';
import Image  from 'next/image'; // Import Image dari Next.js
import silat from '../assets/silat.jpeg'
import travelling from '../assets/travelling.jpeg'
import badminton from '../assets/badminton.jpeg'
import basket from '../assets/basket.jpeg'
import nari from '../assets/nari.jpeg';
import './hobbies.css'; // Import file CSS untuk styling

const MyGallery = () => {
  const Hobbies = [
    { name: "Silat", image : silat },
    { name: "Travelling", image: travelling },
    { name: "Badminton", image: badminton },
    { name: "Basket", image: basket },
    { name: "Nari", image: nari },
  ];

  return (
    <section className="gallery-container">
      <h2 className="text-2xl font-bold mb-4">My Hobbies</h2>
      <div className="gallery">
        {Hobbies.map((hobby, index) => (
          <div key={index} className="gallery-card">
            <Image src={hobby.image} alt={hobby.name} className="gallery-image" layout="responsive" width={150} height={100} />
            <div className="gallery-caption">{hobby.name}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MyGallery;