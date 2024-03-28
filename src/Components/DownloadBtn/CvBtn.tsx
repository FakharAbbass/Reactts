import { Button } from '@mui/material'
import React from 'react'
import cvbtn from "./CvBtn.module.css"
const CvBtn = (props:{cvbtnvalue:string}) => {
  return (
    <div className={cvbtn.cvbtn}>
        <Button variant='outlined' style={{textTransform: 'none'}} color='primary'>{props.cvbtnvalue}</Button>
    </div>
  )
}

export default CvBtn
