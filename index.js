//setup express framework , create app and define port
const express = require('express');
const app = express();
//Middleware for intercept incomming call and parses to json payloads
app.use(express.json());
const PORT = 3000;

//GET ROUTE : CLIENT ASK DATA AND SENDING JSON
app.get('/', (req, res) => {
  res.send('Welcome to lumina instant');
});
app.get('/api/users', (req, res) => {
  const users = [
    { id: 1, name: 'Ashi' },
    { id: 2, name: 'Ishan' },
  ];
  res.json(users);
});
//POST : Client submit new data
app.post('/api/users', (req, res) => {
  //req have body of json that client passes
  const newUser = req.body;
  if (!newUser.name) {
    //validate sent data ,
    return res.status(400).json({ error: 'Name is required' });
  }
  console.log('Receive new user : ', newUser);
  //send success response
  res.status(201).json({ message: 'User created successfully', data: newUser });
});
//start the server
app.listen(PORT, () => {
  console.log(`Server is running and listening on http://localhost:${PORT}`);
});
