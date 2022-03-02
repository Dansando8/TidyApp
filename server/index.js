const Express = require('express');
const  {dbConnection } = require('./models/index.js');
const app = Express(); 

(async function () {
  await dbConnection; 
})();

const PORT = 3000; 

app.get('/', (req, res) => {
  res.send('Working as hell')
})
// '10.197.45.95'

app.listen(PORT, () => {
  console.log(`Server running on 🏁 http://localhost:${PORT}`)
})
