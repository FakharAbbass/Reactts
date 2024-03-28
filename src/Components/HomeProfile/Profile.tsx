import React from 'react'
import Profilecss from "./Profile.module.css"
import shadow from "./Profile.module.css"
import MainHeader from '../Header/MainHeader'
import HeaderMenu from '../HeaderMenu/HeaderMenu'
import Describtion from '../ProfileDesc/Describtion'
const Profile = () => {
  return (
    <div className="pr-1">
 
    <MainHeader Headervalue=''></MainHeader>
        <div className={Profilecss.ch1}>

           <div>
           <p>Hi there ! <span className={shadow.colr}>My name Roman.</span> <br></br>

This is my place on the <br></br> Internet.
</p>
           </div>
           <div>
            <img src="./images/download.png" alt="" />
           </div>
        </div>
        <HeaderMenu></HeaderMenu>
        <Describtion></Describtion>
    </div>
  )
}

export default Profile
