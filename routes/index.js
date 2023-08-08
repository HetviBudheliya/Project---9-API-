const express = require('express');
const routes = express.Router();
const passport = require('passport');
const fileupload = require('../config/fileupload');

// Controllers
const registerController = require('../controller/registerController');
const categoryController = require('../controller/categoryController');
const subcategoryController = require('../controller/subcategoryController');
const ProductController = require('../controller/ProductController');
const AddToController = require('../controller/AddToController');


// Register Routes
routes.get('/', registerController.index);
routes.post('/registerData', registerController.registerData);
routes.post('/login', registerController.login);
routes.get('/view',passport.authenticate('jwt',{session:false}), registerController.view);
routes.put('/editData', registerController.editData);
routes.delete('/deleteData', registerController.deleteData);

// Category Routes
routes.post('/addcategory', categoryController.addcategory);
routes.get('/viewcategory', categoryController.viewcategory);
routes.put('/editcategory', categoryController.editcategory);
routes.delete('/deletecategory', categoryController.deletecategory);

// Sub Category Routes
routes.post('/addsubcategory', subcategoryController.addsubcategory);
routes.get('/viewsubcategory', subcategoryController.viewsubcategory);
routes.put('/editsubcategory', subcategoryController.editsubcategory);
routes.delete('/deletesubcategory', subcategoryController.deletesubcategory);

// product

routes.post('/insertProduct', fileupload, ProductController.insertProduct);
routes.get('/viewProduct', passport.authenticate('jwt', { session: false }), ProductController.viewProduct);
routes.delete('/deleteProduct', ProductController.deleteProduct);
routes.put('/updateProduct', fileupload, ProductController.updateProduct);

// addto cart
routes.post('/addtocart', AddToController.addtocart);
routes.get('/viewaddToCart', AddToController.viewaddToCart);
routes.delete('/deleteAddToCart', AddToController.deleteAddToCart);
routes.put('/updateaddToCart', AddToController.updateaddToCart);

module.exports = routes;