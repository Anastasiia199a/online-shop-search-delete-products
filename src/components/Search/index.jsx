import React from 'react'
import s from './style.module.css'
export default function Search({search_handler}) {

    
    const onChange = event => {
        search_handler(event.target.value);
    }
  return (
    <div>
        <input onChange={onChange} className={s.input} type="text" placeholder='поиск...' />
    </div>
  )
}
