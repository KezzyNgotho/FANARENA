// src/components/GridSection.tsx
import { Link } from 'react-router-dom';
import React from 'react';
import '../index.css';

interface GridItem {
  title: string;
  description: string;
  imageUrl: string;
}

interface GridSectionProps {
  items: GridItem[];
}

const GridSection: React.FC<GridSectionProps> = ({ items }) => {
  return (
    <section className="grid-section">
      <div className="grid-container">
        {items.map((item, index) => (
          
          <div className="grid-item" key={index}>
            <img src={item.imageUrl} alt={item.title} className="grid-image" />
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default GridSection;
