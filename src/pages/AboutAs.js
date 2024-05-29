import React from 'react'
import { Map, YMaps } from '@pbe/react-yandex-maps'


const AboutAs = () => {
  return (
    <div  className=" margin-right: 20px"
     style={{height: window.innerHeight -54 }}>
      <YMaps >
    <h1> Мы находимся здесь!</h1>
    <Map defaultState={{ center: [54.3513, 48.38885], zoom: 14 }} />
    <p> Адрес: ул. Северный Венец, 32, Ульяновск, Ульяновская обл., 432027 </p>
    <p> Контактный номер: 8 (842) 243-06-43</p>

     </YMaps>

    </div>
  )
}

export default AboutAs
