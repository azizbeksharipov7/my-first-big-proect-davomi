import React from 'react';
import { Carousel } from '@material-tailwind/react';
import { carouselData } from '~/data';
import img from '~/assets/image/engine.png';

const Banner = () => {
  return (
    <section className="mt-20">
      <div className="container">
        <div className="flex items-center gap-9">
          <div className="w-4/5">
            <Carousel className="rounded-xl h-[400px]">
              {carouselData.map((el) => (
                <img
                  src={el.src}
                  key={el.id}
                  alt={el.alt}
                  className="h-full w-full object-cover"
                />
              ))}
            </Carousel>
          </div>
          <div className="w-1/5 h-[400px] border-2 border-gray rounded-sm relative flex items-center justify-center flex-col">
            <span className="absolute top-0 left-0 py-2 px-5 bg-primary text-white uppercase text-xs font-bold">
              акция
            </span>
            <span className="absolute top-0 right-1 text-[27px] text-primary font-bold">
              190 000{' '}
            </span>
            <span className="absolute top-11 right-2 text-dark-100 line-through">
              250000
            </span>

            <img
              src={img}
              alt=""
              className="relative right-3"
            />
            <h2 className="text-dark-300 text-lg font-bold text-center w-[180px]">
              Лодочный мотор Suzuki DF9.9BRS
            </h2>

            <div className="bg-gray py-3 px-5 absolute bottom-0 left-0 right-0">
              <h3 className='text-lg text-dark-300 font-normal text-center'>Акция действует до</h3>
              <span className='text-primary font-lg font-bold text-center block'>31.08.2020</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
