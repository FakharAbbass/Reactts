import React from 'react'
import ToggleBtn from '../ToggleBtn/ToggleBtn'
import SwitchBtn from '../SwitchBtn/SwitchBtn'
import { Button } from '@mui/material'
import HeaderCss from"./Header.module.css"
import mainheader from "./Header.module.css"
import title from "./Header.module.css"
function MainHeader(props:{Headervalue:string}) {
  return (
    <div className={mainheader.mainheader}>
      <span className={title.title}>{props.Headervalue}</span>
     <div >
      <div className={HeaderCss.child}>
        <div>
          <Button variant='contained'> Subscribe</Button>
        </div>
     <div>   <ToggleBtn/></div>

     <div>
      <SwitchBtn></SwitchBtn>
     </div>
      </div>
     </div>
    </div>
  )
}

export default MainHeader