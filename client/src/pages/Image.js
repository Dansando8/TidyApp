import React,{ useState } from 'react'

function Image() {
  
  const [loading, setLoading] = useState(false)
  const [image, setImage] = useState('')

  const uploadImage = async (e) => {
    const files = e.target.files
    const data =  new FormData()
    data.append('file', files[0])
    data.append('upload_preset', 'tiddyappimages')
    setLoading(true)

    const res = await fetch('https://api.Cloudinary.com/v1_1/dqdzczpoi/image/upload', {
      method:'POST', 
      body: data 
    })
    const file = await res.json();
    console.log(file); 

    setImage(file.secure_url)
    setLoading(false)

  }

  return (
  <div>
    <input type='file' 
    name = 'file'
    onChange={uploadImage}>
    </input>

    {
      loading ? (
        <h1>...loading</h1>
      ) : (
        <img src={image} alt="Reward" style ={{width:'300px'}}></img> 
      )

    }

  </div>
  )
}

export default Image