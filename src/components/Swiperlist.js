import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import Moviecard from '../components/Moviecard';
import '../components/Moviecard.css';
import '../pages/Home.css';

const SwiperList = ({ apiUrl, apiKey, film}) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchItems = async () => {
      const res = await fetch(`${apiUrl}?api_key=${apiKey}&language=pt-BR`);
      const data = await res.json();
      setItems(data.results);
    };

    fetchItems();
  }, [apiUrl, apiKey]);

  return (
    <div className='swiper-container'>
      <div className='swiper-header'>
        <h2>{film}</h2>
      </div>
      <Swiper
        className='swiper'
        spaceBetween={30}
        slidesPerView={4}
        pagination={{ clickable: true }}
        navigation
        modules={[Navigation]}
        breakpoints={{
          320: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          640: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 30,
          },
          1440: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
        }}
      >
        {items && items.map((item) => (
          <SwiperSlide key={item.id}>
            <Moviecard movie={item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SwiperList;
