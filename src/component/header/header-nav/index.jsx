import React from 'react';
import { Link } from 'react-router-dom';
import { generateId } from '../../../utils';

const HeaderNav = () => {
  const linkArr = [
    {
      id: generateId(),
      text: 'Квадроциклы',
      path: 'quad-bikes',
    },
    {
      id: generateId(),
      text: 'Катера',
      path: 'boat',
    },
    {
      id: generateId(),
      text: 'Гидроциклы',
      path: 'hydro-cycles',
    },
    {
      id: generateId(),
      text: 'Лодки',
      path: 'boat',
    },
    {
      id: generateId(),
      text: 'Вездеходы',
      path: 'off-roads',
    },
    {
      id: generateId(),
      text: 'Двигатели',
      path: 'engines',
    },
    {
      id: generateId(),
      text: 'Запчасти',
      path: 'engines',
    },
  ];
  return (
    <nav className="py-4 bg-gray flex items-center justify-between mt-5 ">
      {linkArr.map((el) => (
        <Link
          to={`/info/${el.path}`}
          className="text-xl font-normal text-dark-300 transition-all hover:font-semibold"
          key={el.id}>
          {el.text}
        </Link>
      ))}
    </nav>
  );
};

export default HeaderNav;
