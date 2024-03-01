import { generateId } from '../utils';

import img_1 from '../assets/image/img-1.png';
import img_2 from '../assets/image/img-2.png';
import img_3 from '../assets/image/img-3.png';
import img_4 from '../assets/image/img-4.png';
import img_5 from '../assets/image/img-5.png';
import img_6 from '../assets/image/img-6.png';

import product_1 from '../assets/image/product-1.png';
import product_2 from '../assets/image/product-2.png';
import product_3 from '../assets/image/product-3.png';
import product_4 from '../assets/image/product-4.png';
import product_5 from '../assets/image/product-5.png';

export const carouselData = [
  {
    id: generateId(),
    src: 'https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80',
    alt: 'image 1',
  },
  {
    id: generateId(),
    src: 'https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80',
    alt: 'image 2',
  },
  {
    id: generateId(),
    src: 'https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80',
    alt: 'image 3',
  },
];

export const btns = [
  {
    id: generateId(),
    text: 'Поиск по номеру',
    value: 'номеру',
  },
  {
    id: generateId(),
    text: ' Поиск по марке',
    value: 'марке',
  },
  {
    id: generateId(),
    text: 'Поиск по названию товара',
    value: 'названию товара',
  },
];

export const category = [
  {
    id: generateId(),
    title: 'Квадроциклы',
    image: img_1,
    category: 'quad-bikes',
  },
  {
    id: generateId(),
    title: 'Гидроциклы',
    image: img_2,
    category: 'hydro-cycles',
  },
  {
    id: generateId(),
    title: 'Катера',
    image: img_3,
    category: 'boat',
  },
  {
    id: generateId(),
    title: 'Снегоходы',
    image: img_4,
    category: 'snowbike',
  },
  {
    id: generateId(),
    title: 'Вездеходы',
    image: img_5,
    category: 'off-roads',
  },
  {
    id: generateId(),
    title: 'Двигатели',
    image: img_6,
    category: 'engines',
  },
];

export const tabsData = [
  {
    label: 'Характеристики',
    value: 'Характеристики',
    desc: (
      <div className="flex flex-col gap-3">
        <div className="flex justify-between items-center border-b-[1px] border-gray p-2">
          <span>Производитель</span>
          <span>Канада</span>
        </div>
        <div className="flex justify-between items-center border-b-[1px] border-gray p-2">
          <span>Количество мест, шт: </span>
          <span>3</span>
        </div>
        <div className="flex justify-between items-center border-b-[1px] border-gray p-2">
          <span>Мощность, л.с.</span>
          <span>155</span>
        </div>
        <div className="flex justify-between items-center border-b-[1px] border-gray p-2">
          <span>Тип двигателя</span>
          <span>Бензиновыйi</span>
        </div>
        <div className="flex justify-between items-center border-b-[1px] border-gray p-2">
          <span>Год выпуска</span>
          <span> 2018</span>
        </div>
      </div>
    ),
  },
  {
    label: 'Наличие в магазине',
    value: 'Наличие в магазине',
    desc: (
      <div className="flex flex-col gap-3">
        <div className="flex justify-between items-center border-b-[1px] border-gray p-2">
          <span>Адрес</span>
          <span>Москва, ул. Науки 25</span>
        </div>
        <div className="flex justify-between items-center border-b-[1px] border-gray p-2">
          <span>Режим работы</span>
          <span>08:00-19:00</span>
        </div>
        <div className="flex justify-between items-center border-b-[1px] border-gray p-2">
          <span>Доступно</span>
          <span>В наличие</span>
        </div>
        <div className="flex justify-between items-center border-b-[1px] border-gray p-2">
          <span>hii</span>
          <span>hii</span>
        </div>
      </div>
    ),
  },
];

export const productsData = [
  {
    id: generateId(),
    image: product_1,
    title: 'Водонепроницаемый Рюкзак',
    price: '9 800 ₽',
  },
  {
    id: generateId(),
    image: product_2,
    title: "Спасательный жилет BRP Men's Airflow PFD",
    price: '6 900 ₽',
  },
  {
    id: generateId(),
    image: product_3,
    title: 'BRP Audio-Premium System',
    price: '68 000 ₽',
  },
  {
    id: generateId(),
    image: product_4,
    title: 'Спасательное снаряжение',
    price: 'нет в наличии',
  },
  {
    id: generateId(),
    image: product_5,
    title: 'BRP Audio-портативная система',
    price: 'нет в наличии',
  },
];
