import cn from 'classnames';
import { IData } from '../../data/mockData';

interface slideProps {
  data: IData;
  wrapper: string;
}
const Slide = ({ data, wrapper }: slideProps) => {
  return (
    <>
      <div className={cn('materials__img', wrapper)}>
        <img src={data.img} alt='' />
      </div>
      <h3 className='materials__subtitle'>{data.title}</h3>
      <div className='materials__date'> {data.date}</div>
    </>
  );
};

export default Slide;
