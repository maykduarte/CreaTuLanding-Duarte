import React from 'react'
import Carwidget from '../Carwidget/Carwidget'



const NavBar = ({ valor }) => {
    return (
        <div className='NavBar'>
            <h1>Mi tienda de cafe</h1>
            <Carwidget valor={valor}/>
        </div>
    )
}

export default NavBar
