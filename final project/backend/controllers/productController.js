const Product = require('../models/product')

// create product --admin
exports.createProduct = async (req, res, next) => {
    try {
        const product = await Product.create(req.body)
        res.json(product)
    } catch (err) {
        res.status(500).json(err)
    }
}

//get products
exports.getAllProducts = async (req, res) => {
    try {
        const products = await Product.find()
        res.json(products)
    } catch (err) {
        res.status(500).json(err)
    }
}

//get product details --admin
exports.getProductDetails = async (req, res) => {
    try {
        let product = await Product.findById(req.params.id)
        if (!product) {
            res.status(500).json({ message: "product not found" })
        }
        res.json(product)
    } catch (err) {
        res.status(500).json(err)
    }
}

//update product --admin
exports.updateProduct = async (req, res) => {
    try {
        let product = await Product.findById(req.params.id)
        if (!product) {
            res.status(500).json({ message: "product not found" })
        }

        product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true })
        res.json(product)
    } catch (err) {
        res.status(500).json(err)
    }
}

//delete product --admin
exports.deleteProduct = async (req, res) => {
    try {
        let product = await Product.findById(req.params.id)
        if (!product) {
            res.status(500).json({ message: "product not found" })
        }

        product.remove()
        res.json({ message: 'product deleted' })
    } catch (err) {
        res.status(500).json(err)
    }
}

