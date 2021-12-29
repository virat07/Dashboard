const express = require('express'); // Include ExpressJS
const app = express(); // Create an ExpressJS app
const bodyParser = require('body-parser'); // Middleware 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Route to Login Page
app.post('/login', verifyUser, (req, res) => {
  //Mock user
  const user = {
    id: Math.random(),
    username: req.body.username,
    email: req.body.email,
  }
  res.json({
    user
  })
});


function verifyUser(req, res, next) {
  const user = {
    username: req.body.username,
    email: req.body.email,
  }
  if (user.username !== undefined || user.email !== undefined) {
    next();
  }
  else {
    //Forbidden
    if (user.username == undefined) {
      res.send(
        'Please provide username'
      );
    }
    else if (user.email == undefined) {
      res.send(
        'Please provide email'
      );
    }
    else {
      res.sendStatus(403);
    }
  }
}

const port = 3100 // Port we will listen on

// Function to listen on the port
app.listen(port, () => console.log(`This app is listening on port ${port}`));