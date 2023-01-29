import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Product from "../App/Product";
import Search from "../Search";
import s from './style.module.css'

export default function App() {
  const default_products = [
    {id: 1, title: 'love, sex and robots', image: 'https://robohash.org/hicveldicta.png'},
    {id: 2, title: 'love, sex and robots', image: 'https://robohash.org/hicveldicta.png'},
    {id: 3, title: 'love, sex and robots', image: 'https://robohash.org/hicveldicta.png'},
    {id: 4 , title: 'love, sex and robots', image: 'https://robohash.org/hicveldicta.png'},
    {id: 5, title: 'love, sex and robots', image: 'https://robohash.org/hicveldicta.png'},
    {id: 6, title: 'love, sex and robots', image: 'https://robohash.org/hicveldicta.png'},
];



// добавить компонент Search с полем ввода и при вводе 
// значения оно должно выводиться в консоль

useEffect(()=>{
(async () => {
const resp = await fetch('https://fakestoreapi.com/products')
const data = await resp.json();
setProducts(data.map(({id, title, image, price}) => ({id, title, image, price, show: true})));
})()
}, []);
const [products, setProducts] = useState([]);

const delete_product = (id)=> {
  setProducts(products.filter(product => product.id !== id));
};

// написать ф, которая получает substring и если у товара название начинается
// на указанное значение, то в show указываем true, в ином сллучае false

const search_handler = (substring) => {
  substring = substring.toLowerCase();

   const new_products = products.map(product => {
    product.show = product.title.toLowerCase().startsWith(substring);
    return product
  })
  setProducts(new_products);
}

//  применить функцию поиска в компоненте search

// создать ф, которая принимает id продукта и удаляяет его (задает новый state без данного продукта)
// передать через промисы метод elete_product и вызывать его по нажатию на кнопку в компоненте

// реализовать процесс загрузки данных с API


  return (
    <div>
      <Search search_handler={search_handler}/>
    <div className={s.product_container}>
    {
        products
        .filter(({show}) => show)
        .map(product => <Product key = {product.id} {...product} delete_product={delete_product} />)
    }
    </div>
    </div>
  );
}

// добавить цену
//export default App;
