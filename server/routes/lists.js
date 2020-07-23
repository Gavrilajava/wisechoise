const express = require('express')

const router = express.Router()

router.get('/lists', (req, res) => res.send('success!'))

module.exports = router