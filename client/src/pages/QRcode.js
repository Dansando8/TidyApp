import React, { useEffect, useState, useRef } from 'react'
import apiService from '../apiService'
import { useParams } from 'react-router-dom'
import QrCode from 'react.qrcode.generator'


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
    <div> 
    <div>
      <h1>{task.taskName}</h1>
      <h2>{task.taskPoints}</h2>
    </div>
    {console.log(`http://c62d-213-86-144-42.ngrok.io/tasks/exectask/${testUrl}`, 'From rendering')}
    {testUrl?
    (<QrCode value={`http://c62d-213-86-144-42.ngrok.io/tasks/exectask/?${testUrl}`} size='300'/>) :
    (<h1>Loading...</h1>)
    }
  
    <h1>dash</h1>
    </div>
  )
}

export default QRcode