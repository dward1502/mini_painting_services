import React from 'react'
import Image from 'next/image';

import style from './slides.module.scss'


const HomeSlides = () => {
  return (
    <div className={style.threeImgBox}>
        <div className={style.imgCont}>
            <Image src={'/images/tzeench_army.jpg'} layout='fill' className={style.img} />
        </div>
        <div className={style.imgCont}>
            <Image src={'/images/tzeench_army.jpg'} layout='fill' className={style.img} />
        </div>
        <div className={style.imgCont}>
            <Image src={'/images/tzeench_army.jpg'} layout='fill' className={style.img} />
        </div>
    </div>
  )
}




export default HomeSlides