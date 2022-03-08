import React, { useEffect, useState } from 'react'
import apiService from '../apiService'
import { IoMdLogOut } from 'react-icons/io'

function Profile({logOut}) {



const [state, setState] = useState({}) 

useEffect(() => {
  const getProfileInfo = async () =>{
    const userId = localStorage.getItem('userId')
    const profile = await apiService.getProfile(userId) 
    await setState(profile)
    return profile
  }
  getProfileInfo()
  
}, []);

localStorage.setItem('userName', state.userName);

  return (
<div >
<img src={state.profilePictureURL} alt={state.userName} style={{borderRadius: '50%', maxWidth:'10rem', margin:'20px', padding:'5px', border:'solid 1px #cecece'}}  ></img>
<div >
<h1 id='profile-name'>Welcome to {state.userName}'s dashboard </h1>
<a href='/' onClick={logOut} style={{color:"#ffc109"}}>logout <IoMdLogOut></IoMdLogOut></a>
</div>
</div>
  )
}

export default Profile