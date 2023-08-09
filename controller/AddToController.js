const ProductSchema = require('../models/ProductSchema');

const addToCartSchema = require('../models/addToCartSchema');

const addtocart = async (req, res) => {
	try {
		const id = req.body.id;
		let product = await ProductSchema.findById(id);
		let addTocart = await addToCartSchema.create({
			categoryId: product.categoryId,
			subCategoryId: product.subCategoryId,
			pname: product.pname,
			price: product.price,
			qty: product.qty,
			desc: product.desc,
			image: product.image
		});
		if (addTocart) {
			return res.json({ status: 1, message: 'Add To Cart Successfully' });
		} else {
			return res.json({ status: 1, message: 'Add To Cart Not Successfully' });
		}
	} catch (err) {
		console.log(err);
		return false;
	}
}

const viewToCart = async (req, res) => {
	try {
		const viewData = await addToCartSchema.find({});
		if (viewData) {
			return res.json({ status: 1, message: viewData });
		}
		else {
			return res.json({ status: 0, message: 'Add To Cart Data Not Fetch' });
		}
	} catch (err) {
		console.log(err);
		return false;
	}
}

const dltToCart = async (req, res) => {
	try {
		let id = req.query.id;
		let deleteCategory = await addToCartSchema.findByIdAndDelete(id);
		if (deleteCategory) {
			return res.json({ status: 1, message: 'Add To Cart Delete' });
		}
		else {
			return res.json({ status: 0, message: 'Add To Cart Not Delete' });
		}
	} catch (err) {
		console.log(err);
		return false;
	}
}

const editToCart = async (req, res) => {
	try {
		const { id, qty } = req.body;
		const updateCart = await addToCartSchema.findByIdAndUpdate(id, {
			qty: qty
		});
		if (updateCart) {
			return res.json({ status: 1, message: 'Cart Update' });
		}
		else {
			return res.json({ status: 0, message: 'Cart Not Update' });
		}
	} catch (err) {
		console.log(err);
		return false;
	}
}

module.exports = {
	addtocart,
	viewToCart,
	dltToCart,
	editToCart
}