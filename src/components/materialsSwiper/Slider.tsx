import { FreeMode, Mousewheel, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import cn from 'classnames';

import SliderNavigation from './SliderNavigation';
import data from '../../data/mockData';
import Slide from './Slide';

enum Wrappers {
  circle = 'circle',
  petalLeft = 'petalLeft',
  petalRight = 'petalRight',
}

let prevWrapper: string;

export const Slider = () => {
  function getRandomWrapper(): string {
    const index = Math.floor(Math.random() * Object.keys(Wrappers).length);
    const value = Wrappers[Object.values(Wrappers)[index]];

    if (value === 'circle' && prevWrapper === 'circle') {
      return getRandomWrapper();
    } else {
      prevWrapper = value;
      return value;
    }
  }

  return (
    <>
      <Swiper
        className='materials__slider'
        slidesPerView={'auto'}
        spaceBetween={0}
        freeMode={true}
        mousewheel={true}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        modules={[FreeMode, Mousewheel, Navigation]}>
        {data.map((item) => (
          <SwiperSlide
            key={item.id}
            className={cn(
              'materials__post',
              item.title.length > 35 && 'materials__post--large',
            )}>
            <Slide data={item} wrapper={getRandomWrapper()} />
          </SwiperSlide>
        ))}
      </Swiper>
      <SliderNavigation />
    </>
  );
};
