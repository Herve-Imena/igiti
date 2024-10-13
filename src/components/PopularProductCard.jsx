import React from 'react'
import { star } from '../assets/icons'

const PopularProductCard = ( {imgURL, name, price}) => {
  return (
    <div className="flex flex-1 shadow-lg p-10 rounded-3xl flex-col w-full max-sm:w-full gap-10 justify-between items-center">
      <img src={imgURL} alt={name} className='w-[282px] h-[282px] rounded-xl' />
      <div className="mt-8 flex justify-start gap-2.5 ">
        {/* <img src={star} alt="rating" width={24} height={24} />
        <p className='font-montserrat text-xl 
        leading-normal text-slate-gray'>(4.5)</p> */}
        </div>
        <h3 className=' mt-2 text-2xl leading-normal font-semibold font-palanquin'>{name}</h3>
        {/* <p className=' mt-2 font-semibold font-montserrat text-orange-500 text-2xl leading-normal'>{price}</p> */}
    </div>
  )
}

export default PopularProductCard