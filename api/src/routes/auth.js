const server = require('express').Router();
const passport = require('passport');
const { User } = require('../db.js');

const {isAdmin, isAuthenticated} =require('../middleware/helper')

server.post('/promote/:id',isAuthenticated, isAdmin, (req, res) => {
  const { id } = req.params;
  let {status} = req.query
  User.update(
        {
        isAdmin: status
        },
        {
          where: 
          { 
            id: id
          }
        }    
  ).then((r) => {
    res.status(200).json({message: 'Usuario Promovido'})
  })
    .catch((err) => {
    res.status(400).json({err})
  })
})

server.get('/me',isAuthenticated,(req,res) => {
  res.status(200).json(req.user)
})

server.get('/google', passport.authenticate('google', {
  scope:['email', 'profile']
}));

server.get('/google/callback',
  passport.authenticate('google', { successRedirect: 'http://localhost:3000'})
);

module.exports = server;