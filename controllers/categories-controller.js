const models = require('../models')
const categories = models.categories
const menus = models.menus

exports.index =(req, res) => {
    categories.findAll({
        include:[{
            model: menus
        }]
    })
    .then (categories=>res.status(200).send(categories))
    .catch(err => res.status(400).send(err))
}

exports.showdetail = (req, res) => {
    const id = req.params.id

    categories.findOne({ where: { id } })
    .then(categories => {
        if (categories) {
            return res.status(200).send(categories)
        } else {
            return res.status(400).send({ message: 'Catergory not found' })
        }
    })
    .catch(err => res.status(400).send(err))

}

exports.store = (req, res) => {
    
    const data = req.body
    console.log(data)
    categories.create(data)
        .then(categories => res.status(201).send(categories))
        .catch(err => res.status(400).send(err))
}
