import React from 'react'

import des from "./Describtion.module.css"
import btn from"./Describtion.module.css"
import {Button } from '@mui/material'
const Describtion = () => {
  return (
    <div>
      <div className={des.des}>
      <div className={btn.grbtn}>
  
      <Button variant='outlined' style={{textTransform: 'none'}} color='success'>short</Button>
      <Button variant='outlined' style={{textTransform: 'none'}} color='success'>long</Button>
      </div>
      <br />
 <div>
 <p>My full name is Roman Datsiuk. I'm UI / Javascript Engineer at <a href="">Newfire Global Partners</a>. I'm interested in technology and photography. I like photography nature, city life, and portraits. I'm into riding a cross-country bike, running, board games, reading, watching Youtube, and scrolling social networks.</p>
 </div>
      </div>
    </div>
  )
}

export default Describtion
