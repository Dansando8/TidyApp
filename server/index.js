const Express = require('express');
const app = Express(); 

const PORT = 3000; 

app.get('/', (req, res) => {
  res.send('Working')
})
// '10.197.45.95'

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`)
})