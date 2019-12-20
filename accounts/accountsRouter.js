const express = require('express')
const db = require('../data/dbConfig')

const router = express.Router()

router.get('/', async (req, res, next) => {
    try {
        res.json(await db('accounts').select())
    }
    catch (error) {
        next(error)
    }
})

router.get('/:id', async (req, res, next) => {
    try {
        res.json(await db('accounts').where('id', req.params.id).first())
    }
    catch (error) {
        next(error)
    }
})

router.post('/', async (req, res, next) => {
    try {
        const payload = {
            
        }
    }
    catch (error) {
        next(error)
    }
})

router.put('/', async (req, res, next) => {
    try {

    }
    catch (error) {
        next(error)
    }
})