require('dotenv').config()
const router = require('express').Router()
const User = require('../db').import('../models/user')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

//! SIGNUP
router.post('/signup', (req, res) => {
  User.create({
    name: req.body.name,
    email: req.body.email,
    password: bcrypt.hashSync(req.body.password, 13),
    confirmpassword: bcrypt.hashSync(req.body.password, 13),
    terms: req.body.terms,
    remember: req.body.remember,
  })
    .then(function createSuccess(user) {
      let token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
        expiresIn: 60 * 60 * 24,
      })

      res.json({
        user: user,
        message: 'User Registered!',
        sessionToken: token,
      })
    })
    .catch((err) => res.status(500).json({ error: err })) // changed the errorr to 500
})

//User Login
router.post('/login', function (req, res) {
  User.findOne({
    where: {
      email: req.body.email,
    },
  })
    .then(function loginSuccess(user) {
      if (user) {
        bcrypt.compare(req.body.password, user.password, function (
          err,
          matches
        ) {
          if (matches) {
            let token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
              expiresIn: 60 * 60 * 24,
            })
            res.status(200).json({
              user: user,
              message: 'User succesfully logged in!',
              sessionToken: token,
            })
          } else {
            res.status(502).send({ error: 'Login Failed' })
          }
        })
      } else {
        res.status(500).json({ error: 'User does not exist.' })
      }
    })
    .catch((err) => res.status(500).json({ error: err }))
})

module.exports = router
