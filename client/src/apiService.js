const BASE_URL = 'http://localhost:3030'

const apiService = { }; 

apiService.addNewReward = async (newReward) => {
  console.log('NEW REWARD, ADD NEW REW', newReward)
  const res = await fetch(`${BASE_URL}/rewards`, {
    method: 'POST', 
    headers: {'Content-Type': 'application/json'}, 
    body: JSON.stringify(newReward) 
  });
  return res.json(); 
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

apiService.fetchRewardById = async (id) => {
  const data = await fetch(`http://localhost:3030/rewards/${id}`); 
  const rewardFound = await data.json();
  return rewardFound; 
}

apiService.findAndUpdateRewardByID = async(id, updatedReward) => {
  const data = await fetch(`http://localhost:3030/rewards/${id}`,{
    headers:{
      Accept: 'application/json', 
      'Content-type': 'application/json'
    }, 
    method: "PATCH", 
    body: JSON.stringify(updatedReward)
  }); 
  return data.json(); 
}

//----> TASKS <-------//

apiService.postTask = async (newTask) => {
  const res = await fetch(`${BASE_URL}/tasks`, {
    method: 'POST', 
    headers: {'Content-Type': 'application/json'}, 
    body: JSON.stringify(newTask) 
  });
  return await res.json(); 
}

export default apiService; 