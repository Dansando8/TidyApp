import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'

function ExecTask({findRemainingPoints}) {

  const { points } = useParams()
  // const pointsNumber = parseInt(points)
  const pointsNumber = parseInt(points)
  // console.log(typeof pointsNumber, 'these are the points');
  
  
  useEffect( ()  => {
    try {
     if(pointsNumber){
       findRemainingPoints(pointsNumber)
      } else console.log('loading'); 
    } catch (error) {
      console.log(error)
    }
  },[])

  return (
    <div>
    
    <h1>This task has been updated</h1>
    
    </div>
  )
}

export default ExecTask