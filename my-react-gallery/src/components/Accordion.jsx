import { useState } from 'react';

export default function Accordion({ items }) {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleItem = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div>
      {items.map((item, index) => (
        <div key={index}>
          <h3 onClick={() => toggleItem(index)}>{item.title}</h3>
          {openIndex === index && <p>{item.content}</p>}
        </div>
      ))}
    </div>
  );
}
