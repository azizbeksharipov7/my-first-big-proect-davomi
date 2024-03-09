import React, { useContext } from 'react'
import { UseMainContext } from '../../context/useMainContext'
import { Rating } from '@material-tailwind/react'
import { Icons } from '../../assets/icons'
import clsx from 'clsx'

const LikeItems = ({title, price ,image,cart, id}) => {
    const {likeItems, removeFromLike, addToLike}=useContext(UseMainContext)

  return (
    <div className='flex flex-col justify-between '>
        <div className='flex '>
        <div className="w-[136px] h-[120px]">
            <img src={image} alt={title} className='w-full h-full object-contain' />
        </div>
       <div className='flex justify-between '>
       <div className='flex flex-col justify-center gap-1 '>
            <h2 className='text-center'>{title}</h2>
            <Rating className='' value={4} unratedColor="grey"  ratedColor="yellow"/>
            <span className='flex text-center'>{price.toLocaleString()} $</span>
        </div>
        <button className='mr-0' onClick={()=>removeFromLike(id)}><Icons.deleteIcon/></button>
        <button onClick={()=>(cart ? removeFromCart(data.id):addToCart(data))} 
      className={clsx(
        `${cart? "border border-primary": "border-none bg-primary" }  `
      )}><Icons.shoppingCartIcon/></button>
       </div>
        </div>
    </div>
  )
}

export default LikeItems