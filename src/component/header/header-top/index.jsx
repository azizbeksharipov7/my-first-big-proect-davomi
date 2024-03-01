import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@material-tailwind/react'
import { Icons } from '~/assets/icons'
import { LikeModal } from '~/component/like-modal'
import { CartModal } from '../../cart-modal'
import { UseMainContext } from '../../../context/useMainContext'

const HeaderTop = () => {
    const [likeModalOpen, setLikeModalOpen] = useState(false)
    const [cartModal, setCartModal] = useState(false)

    const {theme, setTheme} = useContext(UseMainContext)
    console.log(theme, "header theme");
    function handleLikeModal() {
        setLikeModalOpen(!likeModalOpen)
    }

    function handleTheme() {
        if(theme == "light") {
            setTheme("dark")
        } else {
            setTheme("light")
        }
    }

    function handleCart() {
        setCartModal(!cartModal)
    }

  return (
    <div className='flex items-center justify-between'>
        <div className='flex items-center gap-x-12'>
            <a className='text-dark-300 text-xl font-bold' href="#!">Магазины</a>
            <a className='text-dark-300 text-xl font-bold' href="#!">Акции</a>
            <a className='text-dark-300 text-xl font-bold' href="#!">Доставка и оплата</a>
        </div>
        <div>
            <Link to='/'>
                <Icons.logoIcon/>
            </Link>
        </div>
        <div className='flex items-center justify-between w-[436px]'>
            <a href="#!" className='text-dark-300 text-xl font-bold flex gap-x-2'>
                <Icons.locationIcon/>
                Москва,  ул. Науки  25
            </a>

            <div className='flex items-center gap-x-[10px]'>
                <Button onClick={handleTheme} variant='text' className='p-1'>
                    <Icons.likeIcon/>
                </Button>
                <Button onClick={handleLikeModal} variant='text' className='p-1'>
                    <Icons.userIcon/>
                </Button>
                <Button onClick={handleCart} variant='text' className='p-1'>
                    <Icons.shoppingCartIcon/>
                </Button>
            </div>

            <LikeModal open={likeModalOpen} handleModal={handleLikeModal}/>
            <CartModal open={cartModal} handleModal={handleCart}/>
        </div>
    </div>
  )
}

export default HeaderTop