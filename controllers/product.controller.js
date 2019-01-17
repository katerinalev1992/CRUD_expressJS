const Product = require('../models/product.model');

exports.test = function (req, res) {
    res.send('Greetings from the Test controller');

};

exports.save = function (req, res) {
    res.header("Access-Control-Allow-Origin", "*");
    const product = req.body;
    const newProduct = new Product(product);
    let query = {title: product.title};

    Product.findOne(query, function (call, data) {
        if (data) {
            res.send(JSON.stringify({response: '200', message: 'true'}));
            console.log("Overwrite: " + product.title);
        } else {
            newProduct.save(function (err) {
                if (err) return res.send(err);
                console.log("Create new product: " + product.title);

                res.send(JSON.stringify({response: '200', message: 'Product saved successfully!'}));

            });
        }
    });
};

exports.update = function (req, res) {
    res.header("Access-Control-Allow-Origin", "*");
    const product = req.body;
    let query = {'id': product.id};

    Product.findOneAndUpdate(query, product, {upsert: true}, function (err) {
        if (err) return res.send({error: err});
        console.log("Update: " + product.title);
        return res.send(JSON.stringify({response: '200'}));
    });
};

exports.delete = function (req, res) {
    let query = {id: req.params.id};
console.log(query)
    Product.find(query).deleteOne().exec(function () {
        console.log("Product was removed");
        res.send(JSON.stringify({response: '200'}));
    });
};

exports.getById = function (req, res) {
};
exports.getByTitle = function (req, res) {
};
exports.getByCallory = function (req, res) {
};
exports.getAll = function (req, res) {
    Product.find({}, function(err, products) {
        res.send({products: products});
    });
};
