const db = require('../data/dbConfig')

const validatePostId = async (req, res, next) => {
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

module.exports = {
    validatePostId
}