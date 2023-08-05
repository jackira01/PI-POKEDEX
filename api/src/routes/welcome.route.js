const { Router } = require('express')

const router = Router()

router.get('/', (req, res) => {
    try {
        res.send('Welcome To The Server :]')
    } catch (error) {
        res.status(400).send(error.message)
    }
})

module.exports = router