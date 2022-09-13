const express = require('express')
const router = express.Router()
const {getAllWords, createWord, getWord, updateWord, deleteWord} = require('../controllers/word')

router.route('/').get(getAllWords).post(createWord)
router.route('/:id').get(getWord).patch(updateWord).delete(deleteWord)

module.exports = router