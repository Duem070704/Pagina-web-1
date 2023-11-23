const express = require('express');
const router = express.Router();

const Producto = require('../models/producto');

router.get('/', async (req, res) => {

        try{

            const ArrayProductosDB = await Producto.find()
           res.render("Productos", {
            ArrayProductos: ArrayProductosDB
            })

        } catch (error) {
            console.log(error)
        }

   
})

module.exports = router;