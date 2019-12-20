const express = require('express')
const db = require('../data/dbConfig')
const { validatePostId } = require('../middleware/validation')

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
            name: req.body.name,
            budget: req.body.budget
        }
        const [id] = await db('accounts').insert(payload)
        res.json(await db('accounts')
            .where('id', id)
            .first())
    }
    catch (error) {
        next(error)
    }
})

router.put('/:id', async (req, res, next) => {
    try {
        const payload = {
            name: req.body.name,
            budget: req.body.budget
        }
        await db('accounts')
                .where("id", req.params.id)
                .update(payload)
        res.json(await db('accounts')
                        .where('id', req.params.id)
                        .first())
    }
    catch (error) {
        next(error)
    }
})

router.delete('/:id', async (req, res, next) => {
    try {
        await db('accounts').where('id', req.params.id).del()
        res.status(204).end()
    }
    catch (error) {
        next(error)
    }
})

// async function validateAccountId(req, res, next) {
// 	try {
// 		const post = await db("accounts").where("id", req.params.id).first()
// 		if (post) {
// 			next()
// 		} else {
// 			res.status(404).json({ message: "Account not found." })
// 		}
// 	} catch (err) {
// 		next(err)
// 	}
// }


module.exports = router