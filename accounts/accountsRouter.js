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

router.get('/:id', validatePostId(), async (req, res, next) => {
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
            name: req.body.name,
            budget: req.body.budget
        }
        const [id] = await db('posts').insert(payload)
        res.json(await db('posts')
            .where('id', id)
            .first())
    }
    catch (error) {
        next(error)
    }
})

router.put('/:id', validatePostId(), async (req, res, next) => {
    try {
        const payload = {
            name: req.body.name,
            budget: req.body.budget
        }
        await db('posts')
                .where("id", req.params.id)
                .update(payload)
        res.json(await db('posts')
                        .where('id', req.params.id)
                        .first())
    }
    catch (error) {
        next(error)
    }
})

router.delete('/:id', validatePostId(), async (req, res, next) => {
    try {

    }
    catch (error) {
        next(error)
    }
})


async const validatePostId = (req, res, next) => {
    try {
        const post = await db('posts').where('id', req.params.id).first()
        if(post) {
            next()
        }
    }
    catch (error) {
        next(error)
    }
}