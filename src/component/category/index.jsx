import React, { useContext } from 'react';
import { category } from '~/data';
import { Link } from 'react-router-dom';
import { UseMainContext } from '../../context/useMainContext';

const Category = () => {

  const { theme} = useContext(UseMainContext)

  console.log(theme, "category theme");
  return (
    <section className="my-20">
      <div className="container">
        <div className="grid grid-cols-3 gap-8">
          {category.map((el) => (
            <div
              key={el.id}
              className="rounded border-gray border-2 p-5 flex justify-between hover:shadow-lg group transition-all ">
              <div className="flex flex-col justify-between">
                <h2 className="text-2xl font-bold text-dark-300 group-hover:text-primary ">
                  {el.title}
                </h2>
                <Link
                  className="text-dark-100 text-sm font-normal transition-colors hover:text-dark-200"
                  to={`/info/${el.category}`}>
                  Подробее
                </Link>
              </div>

              <div className="max-w-[200px] w-full h-[100px]">
                <img
                  src={el.image}
                  alt={el.title}
                  className="w-full h-full  object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Category;
