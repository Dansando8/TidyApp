import React from 'react'
import { useParams } from 'react-router-dom'

function ExecTask({findRemainingPoints}) {

  const { points } = useParams()
  console.log(points)

  findRemainingPoints(points)

  return (
    <div>
    
    
    </div>
  )
}

export default ExecTask