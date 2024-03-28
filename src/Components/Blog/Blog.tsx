import React from 'react'
import MainHeader from '../Header/MainHeader'
import h1 from "./Blog.module.css"
import detail1 from "./Blog.module.css"
import HeaderMenu from '../HeaderMenu/HeaderMenu'

import abort from "./Blog.module.css"
import { BlogDetail } from './BlogDetail'
import btnstyle from "./Blog.module.css"
import Blog1Btn from '../Blogbtn/Blog1Btn'
const Blog = () => {

  return (
    <div>
      <div>
      <div>
     
     <MainHeader Headervalue='Blog'></MainHeader>
     <div className={h1.h1}>
        {/* <h1>Blog</h1> */}
       
      </div>
    
   </div>
      </div>
      
      
      <div >
        <HeaderMenu></HeaderMenu>
        <div className={detail1.detail1}>
       
          {/* <h1>Abort HTTP requests using fetch, <br />
          React and Redux-Saga
          </h1>
          <div>
            <p>April 6, 2021 4 min read</p>
          </div>

          <div>

          </div>
          <div>
          <p className={abort.abort}>Abort HTTP requests using fetch,React,Redux,Saga and AbortController.</p>
          </div> */}
          
     
          {
            BlogDetail.map((cont:any,index:any)=>

             
             <>
              
              <h1 key={index}>{cont.h1}</h1>
            
                            <p> {cont.p}</p>
             

               <div className={btnstyle.btnstyle}>

               {cont.blogbtn.map((btn:string)=>
       
       <Blog1Btn btnValue={btn}/>

     
     )}

               </div>
              
          
                  <p className={abort.abort}>{cont.p2}</p>
             </>
               
           
              
             )
          }
        
        </div>
      </div>
    </div>
  )
}

export default Blog
