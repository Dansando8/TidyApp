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
  const URL = `http://50c3-213-86-144-42.ngrok.io/tasks/exectask/${URLpoints}`
  console.log(URLpoints, "those are points")
  console.log(typeof URLpoints)

  return (
    <div> 
    <div>
      <h1>{task.taskName}</h1>
      <h2>{task.taskPoints}</h2>
    </div>
    {console.log(URL, 'From rendering')}
    <QrCode await value={URL} size='300'/>
    </div>
  )
}

export default QRcode