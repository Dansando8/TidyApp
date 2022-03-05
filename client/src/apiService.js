const BASE_URL = 'http://localhost:3030'

const apiService = { }; 

apiService.addNewReward = async (newReward) => {
  try {
    const res = await fetch(`${BASE_URL}/rewards`, {
    method: 'POST', 
    headers: {'Content-Type': 'application/json'}, 
    body: JSON.stringify(newReward) 
  });
  const data = await res.json();
  return data;
  } catch (error) {
    console.log(error)
  }
}

apiService.uploadImage = async (files) => {

  try {
    const data =  new FormData()
    data.append('file', files[0])
    data.append('upload_preset', 'tidyappimages')
    const res = await fetch('https://api.Cloudinary.com/v1_1/dqdzczpoi/image/upload', {
    method:'POST', 
    body: data 
  })
    const file = await res.json();
    return file.secure_url
  } catch (error) {
    console.log(error)
  }
}

apiService.getRewards = async () => {
  try {
    const data = await fetch(`${BASE_URL}/rewards`)
    return await data.json()
  } catch (error) {
    console.log(error)
  }
}

apiService.fetchRewardById = async (id) => {
  try {
    const data = await fetch(`http://localhost:3030/rewards/${id}`); 
    const rewardFound = await data.json();
    return rewardFound; 
  } catch (error) {
    console.log(error)
  }
}

apiService.findAndUpdateRewardByID = async(id, updatedReward) => {
try {
  const data = await fetch(`http://localhost:3030/rewards/${id}`, {
    headers:{
    Accept: 'application/json', 
    'Content-type': 'application/json'
    }, 
    method: "PATCH", 
    body: JSON.stringify(updatedReward)
  }); 
  return data.json()
} catch (error) {
  console.log(error); 
}   
}

apiService.findAndDeleteRewardByID = async(id) => {
try {
  const data = await fetch(`http://localhost:3030/rewards/${id}`, {
    headers: { 
    'Content-type': 'application/json'
    }, 
    method:'DELETE' 
  }); 
  return data.json()
} catch (error) {
  console.log(error); 
}
}

//----> TASKS <-------//

apiService.postTask = async (newTask) => {
  const res = await fetch(`${BASE_URL}/tasks`, {
    method: 'POST', 
    headers: {'Content-Type': 'application/json'}, 
    body: JSON.stringify(newTask) 
  });
  const data = await res.json();
  return data; 
}

apiService.findTasks = async() => {
  try {
    const data = await fetch(`${BASE_URL}/tasks`)
    return await data.json(); 
  } catch (error) {
    console.log(error)
  }
}

export default apiService; 