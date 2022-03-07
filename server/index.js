const Express = require('express');
const  {dbConnection } = require('./models/index.js');
const cors = require('cors');
const app = Express(); 
const session = require('express-session')
const SECRET = process.env.SECRET || 'This is not very secure...'

const router = require('./router/router.js'); 
(async function () {
  await dbConnection; 
})();

const corsConfig = {
  origin: 'http://localhost:3000',
  credentials: true, 
}

const PORT = 3030; 
app.use(cors(corsConfig)); 
app.use(Express.json())

app.use(
  session({
    name: 'sid', 
    saveUninitialized: false, 
    resave: false, 
    secret: SECRET, 
    cookie: {
      maxAge: 1000 * 60 * 60, 
      sameSite: true, 
      httpOnly: false, 
      secure: false
    },
  })
)


app.use(router);

app.listen(PORT, () => {
  console.log(`Server running on 🏁 http://localhost:${PORT}`)
})
