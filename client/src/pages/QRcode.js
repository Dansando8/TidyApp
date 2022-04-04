import React, { useEffect, useState, useRef } from 'react'
import apiService from '../apiService'
import { useParams } from 'react-router-dom'
import QrCode from 'react.qrcode.generator'
import logo from '../assets/logo.png'


function QRcode() {
  
  const { id } = useParams()

 
  const [task, setTask]= useState('')
  const [testUrl, setTestUrl] = useState(null)

  useEffect(() => {
    apiService.findTaskById(id)
    .then(taskFound => {setTask(taskFound)
      setTestUrl(parseInt(taskFound.taskPoints))
    })
  }, [id]);

  console.log(testUrl, 'test Url')

  // let URLpoints = task.taskPoints; 

  // console.log(URLpoints, " points from the QR")
  // console.log(typeof task.taskPoints)
  // console.log(typeof URLpoints)
  // const URL = `https://49a4-213-86-144-42.ngrok.io/tasks/exectask/${testUrl}`
  // console.log(URLpoints, "those are points")
  // console.log(typeof URLpoints)

  return (
    <div className="qr-container"> 
    <p>Use ctr+p to print</p>
    <div>
      <h1 id='qr-task-title' style={{width:"30rem"}}>{task.taskName}</h1>
    </div>

    {console.log(`http://localhost:3000/tasks/exectask/${testUrl}`, 'From rendering')}
    {testUrl?
    (<QrCode value={`http://localhost:3000/tasks/exectask/?${testUrl}`} size='300'/>) :
    (<h1>Loading...</h1>)
    }
    <img src={logo} style={{width:"10rem"}} alt="Logo"></img>
    <p style={{fontSize:"2rem"}}>This task worth {task.taskPoints} points</p>

    </div>
  )
}

export default QRcode