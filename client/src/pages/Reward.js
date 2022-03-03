import React from 'react'


function Reward({reward}) {
  console.log(reward, "from reward comp")
  return (
    <div><h1>This is {reward}</h1></div>
  )
}

export default Reward