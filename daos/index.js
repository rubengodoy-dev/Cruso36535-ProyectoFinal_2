const dotenv = require("dotenv")
dotenv.config()

const CarritosDaoFirebase = require("./carritos/carritoDaoFirebase")
const CarritosDaoMongoDB = require("./carritos/carritoDaoMongo")
const ProductosDaoFirebase = require('./productos/productoDaoFirebase')
const ProductosDaoMongoDB = require("./productos/productoDaoMongo")

let productoSelected
let carritoSelected

if (process.env.ENGINE == 'MONGODB') {
    console.log('ENGINE::MongoDB')
    productoSelected = ProductosDaoMongoDB
    carritoSelected = CarritosDaoMongoDB
}

if (process.env.ENGINE == 'FIREBASE') {
    console.log('ENGINE::Firebase')
    productoSelected = ProductosDaoFirebase
    carritoSelected = CarritosDaoFirebase
}

module.exports ={
    productoSelected  ,
    carritoSelected 
}