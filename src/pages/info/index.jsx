import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Header from '../../component/header';
import { Icons } from '../../assets/icons';
import { Button } from '@material-tailwind/react';

const Info = () => {
  const { category } = useParams();
  console.log(category);
  const [data, setData] = useState([]);

  async function fetchData() {
    return await fetch(
      `${import.meta.env.VITE_API_URL}/products?category=${category}`
    )
      .then((res) => res.json())
      .then((json) => setData(json));
  }

  useEffect(() => {
    fetchData();
  }, [category]);

  console.log(Array.from({ length: 4 }));
  return (
    <section>
      <Header />
      <div className="container mt-10">
        <div className="grid grid-cols-4 ga-5">
          {data.length
            ? data.map((el) => (
              <div className="relative w-[271px] h-[403px] border-gray border">
                <div className="w-[250px] h-[190px] mt-12 mx-auto">
                  <Link to={`/products/${el.id}`}>
                    <img
                      src={el.image}
                      alt={el.title}
                      className="w-full h-full object-contain"
                    />
                  </Link>
                </div>
                <h2 className="mt-6 w-[223px] mx-auto text-center text-lg font-normal leading-5">
                  {el.title}
                </h2>
                <span className="mt-6 block text-center text-3xl font-bold leading-9">
                  {el.price.toLocaleString()} ₽
                </span>

                <button variant="text" className="px-2 absolute right-[19px]  top-[14px]" onClick={() => setLiked(!liked)}> <Icons.likeIcon /> </button>
                <button variant='text' className="absolute bottom-0 right-0 py-2 px-4 bg-primary rounded-tl-[10px]"  ><Icons.shoppingCartIcon color="#fff"/></button>
              </div>
            ))
            : Array.from({ length: 4 }).map((el) => (
              <div
                key={el}
                className="w-[271px] h-[403px] animate-pulse bg-gray"></div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Info;
