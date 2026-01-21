"use client";

import Image from "next/image";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { useState, useEffect, useRef } from "react";

const items = [
  { id: 1, title: "Indonesia To Offer Infrastructure Projects At IMF-World Bank Meeting", image: "https://jnews.io/citynews/wp-content/uploads/sites/47/2018/06/demo-14-1-75x75.jpg" },
  { id: 2, title: "Global Markets React to New Trade Policies", image: "https://jnews.io/citynews/wp-content/uploads/sites/47/2018/06/demo-25-75x75.jpg" },
  { id: 3, title: "Technology Startups See Record Growth", image: "https://jnews.io/citynews/wp-content/uploads/sites/47/2018/06/demo-30-75x75.jpg" },
  { id: 4, title: "Climate Talks Resume With New Commitments", image: "https://jnews.io/citynews/wp-content/uploads/sites/47/2018/06/demo-32-75x75.jpg" },
  { id: 5, title: "Education Reform Gains Public Support", image: "https://jnews.io/citynews/wp-content/uploads/sites/47/2018/06/demo-48-75x75.jpg" },
  { id: 6, title: "Healthcare Innovation Accelerates Worldwide", image: "https://jnews.io/citynews/wp-content/uploads/sites/47/2018/06/demo-14-1-75x75.jpg" },
];

const VISIBLE_COUNT = 6;

const TitleCarosel = () => {
  const [index, setIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const prev = () => setIndex((prev) => (prev - 1 + items.length) % items.length);
  const next = () => setIndex((prev) => (prev + 1) % items.length);

  useEffect(() => {
    const interval = setInterval(next, 3000);
    return () => clearInterval(interval);
  }, []);

  const translateX = `-${(index * 100) / VISIBLE_COUNT}%`;

  return (
    <div className="bg-white flex items-center p-4 shadow relative overflow-hidden">
      <div onClick={prev} className="h-16 flex px-1 items-center justify-center cursor-pointer border border-neutral-300 z-10">
        <MdKeyboardArrowLeft className="text-neutral-400" />
      </div>

      <div className="flex-1 overflow-hidden">
        <div
          ref={containerRef}
          className="flex transition-transform duration-700 ease-in-out"
          style={{ width: `${(items.length / VISIBLE_COUNT) * 100}%`, transform: `translateX(${translateX})` }}
        >
          {items.map((item) => (
            <div key={item.id} className="flex gap-2 w-1/3 flex-shrink-0">
              <Image src={item.image} alt={item.title} width={60} height={50} className="w-14 h-14" />
              <p className="text-xs">{item.title}</p>
            </div>
          ))}
        </div>
      </div>

      <div onClick={next} className="h-16 flex px-1 items-center justify-center cursor-pointer border border-neutral-300 z-10">
        <MdKeyboardArrowRight className="text-neutral-400" />
      </div>
    </div>
  );
};

export default TitleCarosel;
