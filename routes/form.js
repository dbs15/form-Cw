const express = require('express')
const router = express.Router()
const {getForm, postForm, updateForm} = require('../controllers/form.js')
const athMiddleware = require('../middleware/session.js')


router.get("/form", getForm)

router.post("/form",postForm)

router.put("/form", updateForm)



module.exports = router
