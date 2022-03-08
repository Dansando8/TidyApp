import React, { useEffect, useState } from 'react'
import apiService from '../apiService'

function Profile() {

const [userInfo, setUserInfo] = useState({})

 

useEffect(() => {
  const getProfileInfo = async () =>{
    const userId = localStorage.getProfile('userId')
    console.log(userId, 'from use effect')

    const profile = await apiService.getProfile(userId) 
    console.log(profile, 'this is the profile use Effect')
    if(profile){
      setUserInfo(profile)
    }else{
      console.log('No user info found')
    }
  }
  getProfileInfo()
}, []);

console.log(userInfo) 

  return (
    <div>Profile</div>
  )
}

export default Profile