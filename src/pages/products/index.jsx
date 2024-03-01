import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../../component/header';
import { Button, Rating } from '@material-tailwind/react';
import { Icons } from '../../assets/icons';
import { ProductInfo, ProductView } from '../../component';

const Products = () => {
  const { id } = useParams();
  const [data, setData] = useState([]);
  const [liked, setLiked] = useState(false);

  async function getData() {
    await fetch(`${import.meta.env.VITE_API_URL}products?id=${id}`)
      .then((res) => res.json())
      .then((json) => setData(json));
  }

  useEffect(() => {
    getData();
  }, [id]);

  console.log(data);
  return (
    <>
      <Header />
      <section className="mt-11 ">
        <div className="container">
          <div className="flex items-center justify-between gap-8 h-[579px]">
            {data.length ? (
              <>
               <ProductView image={data[0]?.image} price={data[0]?.price} title={data[0].title}/>
               <ProductInfo liked={liked} setLiked={setLiked} title={data[0]?.title} />
              </>
            ) : (
              <>
                <div className="w-[500px] rounded h-full bg-gray animate-pulse"></div>
                <div className="w-[500px]   rounded h-full bg-gray animate-pulse"></div>
              </>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default Products;
