const jwt = require('jsonwebtoken');
const Recipe = require('../db').import('../models/collection');

const Recipe = (req, res, next) => {
    if(req.method === 'OPTIONS') {
        next()
    } else {
        const token = req.headers.authorization

        jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
            if(!err && decoded) {
                Collection.findOne({
                    where: {
                        id: decoded.id
                    }
                }, console.log(decoded))
                .then(collection => {
                    if(!collection) throw 'err'
                    req.collection = collection
                    return next()
                })
                .catch(err => next(err))
            } else {
                req.errors = err
                return res.status(500).send('Not Authorized')
            }
        })
    }
}

module.exports = Recipe;