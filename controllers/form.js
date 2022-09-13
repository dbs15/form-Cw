const {formModel}= require('../models')

const getForm = async(req, res) => {
    const data = await formModel.find({})

    res.send({data})
};

const postForm = async(req, res) => {
    const {body} = req
    console.log(body);
    const data = await formModel.create(body)
    res.send({data})
};

const updateForm = (req, res) => {};
const deleteForm = (req, res) => {};

module.exports = {getForm, postForm, updateForm, deleteForm}