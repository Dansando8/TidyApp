import React, { useEffect, useState } from 'react'
import apiService from '../apiService'

function Profile() {
 

const [state, setState] = useState({}) 

useEffect(() => {
  const getProfileInfo = async () =>{
    const userId = localStorage.getItem('userId')
    console.log(userId, "this userId from Profile")
    console.log(typeof userId, "TYPE OF USERID")
    
    const profile = await apiService.getProfile(userId) 
    await setState(profile)
    return profile
  }
  getProfileInfo()
  
}, []);

  return (
<div >
<img src={state.profilePictureURL} alt={state.userName} style={{borderRadius: '50%', maxWidth:'6rem', margin:'20px'}}  ></img>
<div >
<h1 id='profile-name'>{state.userName} </h1>
<p>{state.email}</p>
</div>
</div>
  )
}

export default Profile