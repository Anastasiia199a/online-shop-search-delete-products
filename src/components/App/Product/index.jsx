import React from 'react'
//import { useState } from 'react';
import s from './style.module.css'

export default function Product({id, title, image, delete_product, price}) {

    
  return (
     <div className={s.card}>
        <p>{title}</p>
        <p> {price} $ </p>
        <img src= {image} alt="product"/>
        <button onClick={()=>delete_product(id)}>Delete</button>
     </div>
  )
}
