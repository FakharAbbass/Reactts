import React from 'react'
import menu from "./HeaderMenu.module.css"
import {rout} from "./MenuList"

import { Link } from 'react-router-dom'
const HeaderMenu = () => {
   
  return (
    <div className={menu.list}>
        <ul color='primary'>
            {
                rout.map((anchor,index)=>
                <li key={index}>
                    <Link to={anchor.hrf}>{anchor.a}</Link>
                </li>
                )
            } <br />
             
        </ul>
   
        <div>

    </div>
    </div>
  )
}

export default HeaderMenu
