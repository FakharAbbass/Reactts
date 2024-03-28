import React from 'react'
import {Button } from '@mui/material'
import BlogBtn1 from "./Blogbtn1.module.css"
const Blog1Btn = (props: {btnValue : string}) => {
  return (
    <div className={BlogBtn1.blogbtn1}>


      <Button variant='outlined' style={{textTransform: 'none'}} color='success'>{props.btnValue}</Button>
      {/* <Button variant='outlined' style={{textTransform: 'none'}} color='success'>{props.btnValue}</Button>
      <Button variant='outlined' style={{textTransform: 'none'}} color='success'>{props.btnValue}</Button>
      <Button variant='outlined' style={{textTransform: 'none'}} color='success'>{props.btnValue}</Button> */}
      
    </div>
  )
}

export default Blog1Btn
