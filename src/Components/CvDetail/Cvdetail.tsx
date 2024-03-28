import React from 'react'

import CvHeader from '../CV/CvHeader/CvHeader'
import HeaderMenu from '../HeaderMenu/HeaderMenu'
import CvBtn from '../DownloadBtn/CvBtn'
import detailp from "./CvDetail.module.css"

import { detail } from './DetailData'
import span from "./CvDetail.module.css"
import span2 from "./CvDetail.module.css"
// import detail2 from "./DetailData"
const Cvdetail = () => {

  
  return (
    <div>
        {/* {detail2.map((data2)=>
        
        <div className={detailA.detailA}>
        <h4> {data2.dom}</h4>
            <p>{data2.rol}</p>
            <span className={span.span2}>{data2.des}</span>
    
        </div>
        )} */}
      <div>
        <CvHeader/>

      </div>
      <div>
        <HeaderMenu/>
        <div>
            <CvBtn cvbtnvalue='Download CV'></CvBtn>
        </div>
      </div>

 

        {detail.map((det,index)=>


       <div className={detailp.detailp}>
        <div>
          <h4>{det.domain}</h4>
          <p>{det.role}</p>
          <span className={span2.span2}>{det.date}</span>
        </div>
      <div className={span.span}>
      <h4>{det.dom}</h4>
          <p>{det.rol}</p>
          <span className={span2.span2}>{det.des}</span>
      </div>
       </div>
        
        
        )}
      
    
 

 
    </div>
  )
}

export default Cvdetail
