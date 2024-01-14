import ArrowLeft from '../../assets/svg/arrow-left.svg?react';
import ArrowLeftMob from '../../assets/svg/arrow-left-mobile.svg?react';
import ArrowRight from '../../assets/svg/arrow-right.svg?react';
import ArrowRightMob from '../../assets/svg/arrow-right-mobile.svg?react';

import useWindowSize from '../../utils/useWindowSize';
const SliderNavigation = () => {
  const { width } = useWindowSize();

  return (
    <div className='container materials__arrows'>
      <div className='swiper-button-prev'>
        {width < 600 ? <ArrowLeftMob /> : <ArrowLeft />}
      </div>
      <div className='swiper-button-next'>
        {width < 600 ? <ArrowRightMob /> : <ArrowRight />}
      </div>
    </div>
  );
};

export default SliderNavigation;
