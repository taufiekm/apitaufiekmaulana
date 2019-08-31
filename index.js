const express = require ('express')
const bodyParser = require('body-parser')
require('express-group-routes')

const app = express()
const port = 3000

app.use(bodyParser.json())

//controllers
const categoryController = require('./controllers/categories-controller')
const menuController = require('./controllers/menus-controller')
const transactionController = require('./controllers/transactions-controller')
const orderController = require('./controllers/orders-controller')

app.group("/api/v1", (router) => {

    //api categories
    router.get('/categories',categoryController.index)
    router.get('/category/:id',categoryController.showdetail)
    router.post('/category',categoryController.store)

    //api menus
    router.get('/menus',menuController.index)
    router.get('/menu/:id',menuController.showdetail)
    router.post('/menu',menuController.store)

    //transactions
    router.get('/transactions',transactionController.index)
    router.get('/transaction/:id',transactionController.showdetail)
    router.post('/transaction',transactionController.store)

    //orders
    router.get('/orders',orderController.index)
    router.get('/order/:id',orderController.showdetail)
    router.post('/order',orderController.store)



})

app.get('/', (req, res) => res.send('API TAUFIEKMAULANA'))
app.listen(port,() => console.log(`listening on port ${port}`))