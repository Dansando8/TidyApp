import React, { useEffect, useState, useRef } from 'react'
import apiService from '../apiService'
import { useParams } from 'react-router-dom'
import QrCode from 'react.qrcode.generator'


function QRcode() {
  
  const { id } = useParams()

 
  const [task, setTask]= useState({})
  const [points, setPoints] = useState()

  useEffect(() => {
    apiService.findTaskById(id)
    .then(taskFound => setTask(taskFound))
  }, [id]);

  // const setPointsURL = async() => {
  //   await setPoints(task.taskPoints)
  // }

  // setPointsURL()

  let URLpoints = task.taskPoints; 

  console.log(URLpoints, " points from the QR")
  console.log(typeof task.taskPoints)
  console.log(typeof URLpoints)
  const URL = `https://776b-213-86-144-42.ngrok.io/exectask/${URLpoints}`
  console.log(URLpoints, "those are points")
  console.log(typeof URLpoints)

  return (
    <div> 
    <div>
      <h1>{task.taskName}</h1>
      <h2>{task.taskPoints}</h2>
    </div>
    {console.log(URL, 'From rendering')}
    {URLpoints?
    (<QrCode value={URL} size='300'/>) :
    (<h1>Loading...</h1>)
    }
    
    </div>
  )
}

export default QRcode