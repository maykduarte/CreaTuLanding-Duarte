import React from 'react'
import Carwidget from '../Carwidget/Carwidget'


const NavBar = ({ valor }) => {
    return (
        <div>
            <h1>Mi tienda de café</h1>
            <Carwidget valor={valor}/>
        </div>
    )
}

export default NavBar
