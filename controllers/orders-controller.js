const models = require('../models')
const order = models.order


exports.index =(req, res) => {
    order.findAll()
    .then (order=>res.status(200).send(order))
    .catch(err => res.status(400).send(err))
}

exports.showdetail = (req, res) => {
    const id = req.params.id

    order.findOne({ where: { id } })
    .then(order => {
        if (order) {
            return res.status(200).send(order)
        } else {
            return res.status(400).send({ message: 'Catergory not found' })
        }
    })
    .catch(err => res.status(400).send(err))

}

exports.store = (req, res) => {
    
    const data = req.body
    console.log(data)
    order.create(data)
        .then(categories => res.status(201).send(categories))
        .catch(err => res.status(400).send(err))
}
