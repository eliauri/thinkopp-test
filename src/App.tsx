import { Slider } from './components/materialsSwiper';

import './App.scss';
import 'swiper/css';

function App() {
  return (
    <section className='materials'>
      <div className='container'>
        <h2 className='materials__title'>Полезные материалы</h2>
        <p className='materials__description'>
          Собрали для вас полезные исследования схемы кормления и другие
          материалы, которые пригодятся для лучших результатов на вашем
          хозяйстве
        </p>
      </div>
      <Slider />
    </section>
  );
}

export default App;
