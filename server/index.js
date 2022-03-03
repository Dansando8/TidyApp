const Express = require('express');
const  {dbConnection } = require('./models/index.js');

const app = Express(); 
const router = require('./router/router.js'); 
(async function () {
  await dbConnection; 
})();

const PORT = 3030; 

app.use(Express.json())
app.use(router);

app.get('/', (req, res) => {
  res.send('Working as hell')
})

app.listen(PORT, () => {
  console.log(`Server running on 🏁 http://localhost:${PORT}`)
})
