const BASE_URL = 'http://localhost:3030/'

const apiService = { }; 

apiService.addNewReward = async (newReward) => {
  try {
    const res = await fetch(`${BASE_URL}rewards`, {
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

apiService.getRewards = async (id) => {
  try {
    const res = await fetch(`${BASE_URL}getrewards`, {
      method: 'POST', 
      credentials: 'include', 
      mode: 'cors', 
      headers: {'Content-Type':'application/json'}, 
      body: JSON.stringify({id}),
    })
    const data = await res.json();
    return data; 
  } catch (error) {
    console.log(error); 
  }
}

apiService.fetchRewardById = async (id) => {
  try {
    const data = await fetch(`${BASE_URL}rewards/${id}`); 
    const rewardFound = await data.json();
    return rewardFound; 
  } catch (error) {
    console.log(error)
  }
}

apiService.findAndUpdateRewardByID = async(id, updatedReward) => {
try {
  const data = await fetch(`${BASE_URL}rewards/${id}`, {
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
  const data = await fetch(`${BASE_URL}rewards/${id}`, {
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
  const res = await fetch(`${BASE_URL}tasks`, {
    method: 'POST', 
    headers: {'Content-Type': 'application/json'}, 
    body: JSON.stringify(newTask) 
  });
  const data = await res.json();
  return data; 
}

//Find all tasks
apiService.findTasks = async(id) => {
  try {
    const data = await fetch(`${BASE_URL}tasks`)
    
    return await data.json(); 
  } catch (error) {
    console.log(error)
  }
}

//Find Task using ID

apiService.findTaskById = async(id) => {
  try {
    const data = await fetch(`${BASE_URL}tasks/${id}`); 
    const taskFound = await data.json();
    return taskFound; 
  } catch (error) {
    console.log(error)
  }
}

//Delete task using ID

apiService.findAndDeleteTaskByID = async(id) => {
  try {
    
    const data = await fetch(`${BASE_URL}tasks/${id}`, {
      headers: { 
      'Content-type': 'application/json'
      }, 
      method:'DELETE' 
    }); 
    console.log(id, "data found")
    return data.json()
  } catch (error) {
    console.log(error); 
  }
  }

// USERS

//Add new user 

apiService.addNewUser = async (newUser) => {
  try {
    const res = await fetch(`${BASE_URL}users`, {
    method: 'POST',
    credentials: 'include',
    mode: 'cors',   
    headers: {'Content-Type': 'application/json'}, 
    body: JSON.stringify(newUser) 
  });
  const data = await res.json();
  return data;
  } catch (error) {
    console.log(error);
  }
}

//Login

apiService.userLogin = async (user) =>{
  try {
    const res = await fetch(`${BASE_URL}login`, {
      method: 'POST', 
      credentials: 'include', 
      mode: 'cors', 
      headers: {'Content-Type':'application/json'}, 
      body: JSON.stringify(user),
    })
    const data = await res.json();
    return data; 
  } catch (error) {
    console.log(error); 
  }
}

//Profile 

apiService.getProfile = async (id) => {
  try {
    const res = await fetch(`${BASE_URL}profile`, {
      method: 'POST', 
      credentials: 'include', 
      mode: 'cors', 
      headers: {'Content-Type':'application/json'}, 
      body: JSON.stringify({id}),
    })
    const data = await res.json();
    return data; 
  } catch (error) {
    console.log(error); 
  }
};

export default apiService; 