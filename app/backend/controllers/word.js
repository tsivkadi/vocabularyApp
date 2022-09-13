const Word = require('../models/Word')
const asyncWrapper = require('../middleware/async')

const getAllWords = asyncWrapper( async (req, res) => {
    const words = await Word.find({})
    res.status(200).json({words})
})
const createWord = asyncWrapper( async (req, res) => {
    const word = await Word.create(req.body)
    res.status(201).json({ word })
})
const getWord = asyncWrapper( async (req, res) => {
    const {id: wordID} = req.params;
    const word = await Word.findOne({ _id: wordID })
    if(!word){
      return res.status(404).json({msg: `No word with id ${wordID}`})
    }
    res.status(200).json({ word })
})
const updateWord = asyncWrapper( async (req, res) => {
    const {id: wordID} = req.params;
    const word = await Word.findOneAndUpdate({ _id: wordID }, req.body, {
      new: true,
      runValidators: true
    })
    if(!word){
      return res.status(404).json({msg: `No word with id ${wordID}`})
    }
    res.status(200).json({id:wordID, data:req.body})
})
const deleteWord = asyncWrapper(async (req, res) => {
    const {id: wordID} = req.params;
    const word = await Word.findOneAndDelete({ _id: wordID })
    if(!word){
      return res.status(404).json({msg: `No word with id ${wordID}`})
    }
    res.status(200).json({ word })
})

module.exports = {
  getAllWords,
  createWord,
  getWord,
  updateWord,
  deleteWord
}