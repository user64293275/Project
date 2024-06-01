import './App.css';
import { useState, useEffect, useCallback, useRef  } from 'react';
import img_1 from './images/News 1.jpg'
import img_2 from './images/News 2.jpg'
import img_3 from './images/News 3.jpg'
import img_4 from './images/News 4.jpg'
import img_5 from './images/News 5.jpg'
import img_6 from './images/News 6.jpg'
import img_7 from './images/News 7.jpg'
import { SlArrowRightCircle, SlArrowLeftCircle } from "react-icons/sl";

function debounce(func, delay) {
  let timeoutId;
  return function (...args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => func.apply(this, args), delay);
  };
}

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isInformation, setIsInformation] = useState(false);
  const [lastScrollTime, setLastScrollTime] = useState(0);
  const slidesRef = useRef([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const HandleScroll = useCallback(
    debounce(() => {
      slidesRef.current.forEach((slide, index) => {
        const rect = slide.getBoundingClientRect();
        if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
          setCurrentSlide(index);
        }
      });
    }, 100),
    []
  );
 
  const close = () => {
    setIsOpen(false)
  }

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  }

  const Information = () => {
    setIsInformation(!isInformation);
  }

  const InfoChange = useCallback((event) => {
    const currentTime = new Date().getTime();
    const timeDiff = currentTime - lastScrollTime;
    if (timeDiff < 500) return;
    const { deltaY } = event;
    if (deltaY > 0 && currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
      setLastScrollTime(currentTime);
    } else if (deltaY < 0 && currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
      setLastScrollTime(currentTime);
    }
  },[currentSlide, lastScrollTime]);
 

  useEffect(() => {
    window.addEventListener('wheel', InfoChange);
    return () => {
      window.removeEventListener('wheel', InfoChange);
    };
  }, [currentSlide]);

  const slideHeaders = [
     'Компания',
     'Деятельность',
     'Экосистема',
     'Ответственность',
     'Миссия',
     'Новости',
  ]

  const flexItems = [
    {
      img: img_6,
      date: '24 мая 2024',
      title: '«3D печать» и Telegram Бот «Согласование договоров»: новые проекты ЗАО «Серволюкс Технолоджис» для оптимизации бизнес-процессов в современных условиях',
    },
    {
      img: img_7,
      date: '10 апреля 2024',
      title: '«ЧАТ-БОТ «КОНТРОЛЬ КАЧЕСТВА ТОВАРА»: ИСКУССТВЕННЫЙ ИНТЕЛЛЕКТ НА ЗАЩИТЕ ПОТРЕБИТЕЛЯ И БИЗНЕСА',
    },
    {
      img: img_5,
      date: '31 декабря 2023',
      title: 'ГК «СЕРВОЛЮКС» СОХРАНЯЕТ УСТОЙЧИВОСТЬ И НАЦЕЛЕННОСТЬ НА КАЧЕСТВЕННУЮ ТРАНСФОРМАЦИЮ',
    },
    {
      img: img_7,
      date: '08 августа 2023',
      title: 'ПОНИМАНИЕ КАК ОСНОВА УСПЕХА: МАРКЕТИНГОВОЕ ИССЛЕДОВАНИЕ ПО ИЗУЧЕНИЮ ПОКУПАТЕЛЬСКОГО ВОСПРИЯТИЯ БРЕНДА',
    },
  ]

  const newsItems = [
    {
      img: img_1,
      headline: 1,
      title: 'Создаем качественный безопасный продукт',
    },
    {
      img: img_2,
      headline: 2,
      title: 'Создаем качественный безопасный продукт',
    },
    {
      img: img_3,
      headline: 3,
      title: 'Создаем качественный безопасный продукт',
    },
  ];

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? newsItems.length - 1 : prevIndex - 1));
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex === newsItems.length - 1 ? 0 : prevIndex + 1));
  };

  useEffect(() => {
    window.addEventListener('scroll', InfoChange);
    return () => window.removeEventListener('scroll', InfoChange);
  }, [HandleScroll]);

  const slides = [
    <div key='slide-1' className='relative slidebar Slide-1 h-[100vh] flex flex-col justify-center items-center' ref={(el) => (slidesRef.current[0] = el)}>
      <div className=''>
        <h2 className='absolute top-9  right-64 '>АГРОПРОМЫШЛЕННЫЙ <br />ХОЛДИНГ ПОЛНОГО <br />ЦИКЛА</h2>
        <h1 className='text-9xl font-bold animate-slide-in-from-right'>
          <span className='block leading-11'>АГРО</span>
          <span className='block ml-32'> ПРОМ</span>
          <span className='block ml-64 leading-11'> ХОЛДИНГ</span>
        </h1>
        <button className='absolute bottom-10 right-32  w-auto rounded-3xl border px-4 py-2 font-bold'>О компании</button>
      </div>
    </div>,

    <div key='slide-2' className='Slide-2 h-[100vh] flex flex-col justify-center items-center' ref={(el) => (slidesRef.current[1] = el)}>
      Activity
    </div>,

    <div key='slide-3' className='Slide-3 relative h-[100vh] flex flex-col justify-center' ref={(el) => (slidesRef.current[2] = el)}>
      <h2 className='absolute top-32 left-2 font-semibold text-[#42567A] ml-16 text-6xl '>Контекст контроль <br /> бизнеса</h2>
      <div className='flex items-center mt-20'>
        <div className='px-14 h-100vh' >
          <h2 className='text-5xl font-semibold py-8 text-[#3877EE]'>01</h2>
          <h4 className='py-4 text-xl text-[#42567A]'>Управление</h4>
          <div className='w-[350px] h-[1px] bg-green-500 rounded-2xl mb-4'></div>
          <h2 className='text-[#42567a] font-bold text-2xl'>ОПЕРАЦИОННАЯ <br />ДЕЯТЕЛЬНОСТЬ</h2>
          {/* <p className='mt-56'>Эффективная система корпоративного управления и цифровизация бизнес-процессов</p> */} 
         
        </div>
        <div className='p-14 mb-8'>
          <h2 className='text-5xl font-semibold py-8 text-[#3877EE]'>02</h2>
          <h4 className='py-4 text-xl text-[#42567A]'>Технологии</h4>
          <div className='w-[350px] h-[1px] bg-green-500 rounded-2xl mb-4'></div>
          <h2 className='text-[#42567a] font-bold text-2xl'>ПРОИЗВОДСТВО </h2>
          {/* <p>Непрерывная модернизация и внедрение инновационных разработок и технологий</p> */}
        </div>
        <div className='p-14'>
          <h2 className='text-5xl font-semibold py-8 text-[#3877EE]'>03</h2>
          <h4 className='py-4 text-xl text-[#42567A]'>Ассортимент</h4>
          <div className='w-[350px] h-[1px] bg-green-500 rounded-2xl mb-4'></div>
          <h2 className='text-[#42567a] font-bold text-2xl'>ПОТРЕБИТЕЛЬСКИЕ <br />ПРЕДПОЧТЕНИЯ</h2>
          {/* <p>Исследование моделей покупательского поведения и формирование новых сценариев и рынков потребления</p> */}
        </div>
      </div>
    </div>,

    <div key='slide-4' className='Slide-4 h-[100vh] py-20 flex flex-col' ref={(el) => (slidesRef.current[3] = el)}>
      <div className='flex justify-between items-center py-60 mx-16'>
        <h2 className='text-6xl font-bold mb-8'>Устойчивое <br />развитие</h2>
        <div>
          <p className='w-[550px]'>
            Являемся ответственным глобальным бизнесом, обеспечиваем устойчивое равновесие между охраной окружающей среды, социальной
            ответственностью и доходностью во всех аспектах, где ведем бизнес
          </p>
          <button className='border my-4 px-3 py-2 rounded-3xl hover:bg-blue-500'>Подробнее</button>
        </div>
      </div>
      <div className='flex items-center w-full'>
        <div className='flex border py-8 px-10'>
          <h2 className='font-semibold text-xl px-8'>01</h2>
          <h2 className='text-2xl'>Ответственное <br />ведение <br />бизнеса </h2>
        </div>
        <div className='flex border py-12 px-10'>
          <h2 className='font-semibold text-xl px-8'>02</h2>
          <h2 className='text-2xl'>Экологическая  <br />ответственность </h2>
        </div>
        <div className='flex py-12 border px-14'>
          <h2 className='font-semibold text-xl px-8'>03</h2>
          <h2 className='text-2xl'>Безопасность  <br />продукции </h2>
        </div>
        <div className='flex py-12 px-14 border'>
          <h2 className='font-semibold text-xl px-8'>04</h2>
          <h2 className='text-2xl'>Современные  <br />технологии </h2>
        </div>
      </div>
    </div>,

    <div key='slide-5' className='h-[100vh] py-20' ref={(el) => (slidesRef.current[4] = el)}>
      <h2 className='text-[#42567A] pt-9 px-9 text-5xl'>Миссия <br />компании</h2>
      <div className="relative mt-20 w-full h- overflow-hidden">
        <div
          className="flex transition-transform duration-1000"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {newsItems.map((item, index) => (
            <div key={index} className="w-full flex-shrink-0 flex items-center">
              <img src={item.img} alt={item.headline} className="w-[600px] ml-36 cover" />
              <div className="p-4 ml-36">
                <h2 className="text-2xl w-76 mb-5">{item.headline}</h2>
                <p className='text-5xl text-[#42567A] w-36 font-semibold'>{item.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className='flex items-center py-12 relative'>
        <p className='w-72 ml-36'>В компании сформирована высокая производственная культура. Мы четко осознаем ответственность за деятельность, принятые решения и свое воздействие на внешнюю среду.</p>
        <div className='absolute bottom-15 right-10 flex'>
          <SlArrowLeftCircle onClick={handlePrevClick} className='cursor-pointer transform -translate-y-1/2 w-10 h-10'/>
          <SlArrowRightCircle onClick={handleNextClick} className='cursor-pointer ml-3 transform -translate-y-1/2 w-10 h-10'/>
        </div>
      </div>
    </div>,

    <div className='h-full py-20' ref={(el) => (slidesRef.current[5] = el)} >
      <h2 className='text-5xl text-[#42567A] pt-16 px-12 font-bold'>Новости</h2> 
      <div id='slides' className='flex items-center justify-center flex-wrap py-10 '>
        {
          flexItems.map((item, index) => (
            <div key={index} className='ml-5 w-[45%]'>
              <img className='w-[550px] h-[300px]' src={item.img} alt="" />
              <h3>{item.date}</h3>
              <p>{item.title}</p>
            </div>
          ))
        }
        {
          flexItems.length 
        }
      </div>
      <button className='rounded-2xl border '>Пресс-центр</button>
    </div>,
  ] 

  return (
    <section ref={slidesRef} className="min-h-screen bg-cover bg-center transition-all duration-500"
    >
      <div className='nonchange carusel  h-full relative grid'>
        <div className={`Left border h-full ${isOpen ? 'bg-[#89a7df] text-white' : ''}`}>
          <h2 className='text-2xl py-8 px-20'>Серволюкс</h2>
          <div className='mt-[250px] text-left'>
            {
              slideHeaders.map((slideHeader, index) => (
                <span key={index} className={`${isOpen ? 'hidden' : `flex items-center cursor-pointer`}  ${currentSlide === index ? 'px-0' : 'px-14'}`}>
                  <div  className={`mr-5 h-[1px] bg-black mr-3 font-normal ${currentSlide === index ? 'w-20' : 'w-6'}`}></div>
                  {slideHeader}
                </span>
              ))
            }
          </div>

        </div>
        <div className={`Right relative border h-full flex flex-col items-center ${isOpen ? 'bg-[#89a7df] text-white' : ''}`}>
          <div className='p-12 relative cursor-pointer' onClick={toggleMenu}>
            <div className={`w-8 h-[1px] bg-black ${isOpen ? 'bg-white' : ''}`}></div>
            <div className={`w-8 h-[1px] bg-black mt-2  ${isOpen ? 'bg-white' : ''}`}></div>
          </div>
          {isOpen ? <div className='flex flex-col mt-[280px] rotate-90 cursor-pointer' onClick={close}>Закрыть</div> : <div className='flex flex-col mt-[280px] cursor-pointer rotate-90' onClick={toggleMenu}>МЕНЮ</div>}
        </div>
        <div className='Main h-screen overflow-hidden relative '>
          <div className='p-9'>
            <div>
              <span className='relative cursor-pointer underline-from-left'>RU</span>
              <span className='relative cursor-pointer mx-3 underline-from-left'>EN</span>
              <span className='relative cursor-pointer underline-from-left '>CN</span>
            </div>
          </div>
          <div className='absolute inset-0 flex flex-col transform transition-transform ease-in-out duration-200' style={{ transform: `translateY(-${currentSlide * 100}vh)` }}>
            {slides.map((slide, index) => (
              <div key={index} className='h-screen'>
                {slide}
              </div>
            ))}
          </div>


          {
            isOpen === true ?
              (
                <div className={` Menu absolute top-0 right-0 w-full bg-[#89a7df] text-white h-[100vh] overflow-hidden ${isOpen ? 'h-screen transition-transform duration-100 Main Left Right' : 'max-h-0'}`}>
                  <div className='p-9 relative'>
                    <span className='relative underline-from-left'>RU</span>
                    <span className='relative mx-3 underline-from-left'>EN</span>
                    <span className='relative underline-from-left '>CN</span>
                  </div>
                  <div className='scrollable-section h-[650px] w-full overflow-y-auto px-16 py-16 flex justify-between'>
                    <div id='parts' className={`flex flex-col justify-cneter items-left font-bold text-5xl leading-relaxed`} >
                      <h2 className='cursor-pointer'>О компании</h2>
                      <h2 className='cursor-pointer' onMouseOver={Information}>Деятельность
                        {
                          isInformation === true ?
                            <span>  -</span> : <span>  +</span>
                        }</h2>
                      <h2 className='cursor-pointer'>Бренды</h2>
                      <h2 className='cursor-pointer'>Устойчивое развитие</h2>
                      <h2 className='cursor-pointer'>Пресс-центр</h2>
                      <h2 className='cursor-pointer'>Карьера</h2>
                      <h2 className='cursor-pointer'>Партнерство </h2>
                      <h2 className='cursor-pointer'>Контакты </h2>
                      <h2 className='cursor-pointer'>Документы </h2>
                    </div>
                    <div className='flex flex-col justify-between items-center'>
                      <h4>
                        feedback@servolux.com
                        <h4>+375 29 747 37 00</h4>
                      </h4>
                      {
                        isInformation === true ?
                          <p className='block text-xl w-[400px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, explicabo ipsam magni mollitia quaerat modi delectus, tempore porro pariatur alias vero vitae error
                            distinctio optio itaque ipsa sit soluta qui.</p> : null
                      }
                      <h4> © 1999–2024 ГК «Серволюкс»</h4>
                    </div>
                  </div>
                </div>
              ) : null 
          }
        </div>
      </div>
    </section>
  );
}

export default App;
