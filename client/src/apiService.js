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

export default apiService; 