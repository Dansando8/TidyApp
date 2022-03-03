const BASE_URL = 'http://localhost:3030'

const apiService = { }; 

apiService.addNewReward = async (newReward) => {
  const res = await fetch(`${BASE_URL}/rewards`, {
    method: 'POST', 
    headers: {'Content-Type': 'application/json'}, 
    body: JSON.stringify(newReward) 
  });
  return await res.json(); 
}

apiService.uploadImage = async (files) => {
  const data =  new FormData()
  data.append('file', files[0])
  data.append('upload_preset', 'tiddyappimages')
  const res = await fetch('https://api.Cloudinary.com/v1_1/dqdzczpoi/image/upload', {
    method:'POST', 
    body: data 
  })
  const file = await res.json();
  return file.secure_url
}

apiService.getRewards = async () => {
  const data = await fetch(`${BASE_URL}/rewards`)
  return await data.json()
}

export default apiService; 