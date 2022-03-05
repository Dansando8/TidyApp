const Express = require('express');
const  {dbConnection } = require('./models/index.js');
const cors = require('cors');

const app = Express(); 
const router = require('./router/router.js'); 
(async function () {
  await dbConnection; 
})();

const PORT = 3030; 
app.use(cors()); 
app.use(Express.json())
app.use(router);

app.listen(PORT, () => {
  console.log(`Server running on 🏁 http://localhost:${PORT}`)
})
