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
routes.post('/insertData', registerController.insertData);
routes.get('/viewrecord',passport.authenticate('jwt',{session:false}), registerController.viewrecord);
routes.delete('/deletedata', registerController.deletedata);
routes.put('/editdata', registerController.editdata);
routes.post('/login', registerController.login);

// Category Routes
routes.post('/addcategory', categoryController.addcategory);
routes.get('/viewcategory', categoryController.viewcategory);
routes.put('/editcategory', categoryController.editcategory);
routes.delete('/dltcategory', categoryController.dltcategory);

// Sub Category Routes
routes.post('/addsubcategory', subcategoryController.addsubcategory);
routes.get('/viewsubcategory', subcategoryController.viewsubcategory);
routes.put('/editsubcategory', subcategoryController.editsubcategory);
routes.delete('/dltsubcategory', subcategoryController.dltsubcategory);

// product

routes.post('/addproduct', fileupload, ProductController.addproduct);
routes.get('/viewProduct', passport.authenticate('jwt', { session: false }), ProductController.viewProduct);
routes.delete('/dltProduct', ProductController.dltProduct);
routes.put('/editProduct', fileupload, ProductController.editProduct);

// addto cart
routes.post('/addtocart', AddToController.addtocart);
routes.get('/viewToCart', AddToController.viewToCart);
routes.delete('/dltToCart', AddToController.dltToCart);
routes.put('/editToCart', AddToController.editToCart);

module.exports = routes;