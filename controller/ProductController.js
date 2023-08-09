const ProductSchema = require('../models/ProductSchema');

const fs = require('fs');

const addproduct = async (req, res) => {
	try {
		const { categoryId, subCategoryId, pname, price, qty, desc } = req.body;
		let image = "";
		if (req.file) {
			image = req.file.path;
		}
		const insertproduct = await ProductSchema.create({
			categoryId: categoryId,
			subCategoryId: subCategoryId,
			pname: pname,
			price: price,
			qty: qty,
			desc: desc,
			image: image,
		});
		if (insertproduct) {
			return res.json({ status: 1, message: 'Product Insert' });
		}
		else {
			return res.json({ status: 1, message: 'Product Not Insert' });
		}
	} catch (err) {
		console.log(err);
		return false;
	}
}

const viewProduct = async (req, res) => {
	try {
		const viewData = await ProductSchema.find({});
		if (viewData) {
			return res.json({ status: 1, message: viewData });
		}
		else {
			return res.json({ status: 0, message: 'Product Data Not Fetch' });
		}
	} catch (err) {
		console.log(err);
		return false;
	}
}

const dltProduct = async (req, res) => {
	try {
		let id = req.query.id;
		let deleteCategory = await ProductSchema.findByIdAndDelete(id);
		if (deleteCategory) {
			return res.json({ status: 1, message: 'Product Delete' });
		}
		else {
			return res.json({ status: 0, message: 'Product Not Delete' });
		}
	} catch (err) {
		console.log(err);
		return false;
	}
}

	const editProduct = async (req, res) => {
		try {
			const { id, categoryId, subCategoryId, pname, price, qty, desc } = req.body;
			if (req.file) {
				const deltimg = await ProductSchema.findById(id);
				console.log(deltimg);
				if (deltimg) {
					fs.unlinkSync(deltimg.image);
				}
				else {
					console.log('Image Not Unlink');
					return false;
				}
				let image = "";
				if (req.file) {
					image = req.file.path;
				}
				const updateProducts = await ProductSchema.findByIdAndUpdate(id, {
					categoryId: categoryId,
					subCategoryId: subCategoryId,
					pname: pname,
					price: price,
					qty: qty,
					desc: desc,
					image: image
				})
				if (updateProducts) {
					return res.json({ status: 1, message: 'Product Update' });
				}
				else {
					return res.json({ status: 0, message: 'Product Not Update' });
				}
			}
			else {
				let image = "";
				let product = await ProductSchema.findById(id);
				if (product) {
					image = product.image;
					const updateProducts = await ProductSchema.findByIdAndUpdate(id, {
						categoryId: categoryId,
						subCategoryId: subCategoryId,
						pname: pname,
						price: price,
						qty: qty,
						desc: desc,
						image: image
					});
					if (updateProducts) {
						return res.json({ status: 1, message: 'Product Update' });
					}
					else {
						return res.json({ status: 0, message: 'Product Not Update' });
					}
				}
			}
		} catch (err) {
			console.log(err);
			return false;
		}
	}

	
module.exports = {
	addproduct,
	viewProduct,
	dltProduct,
	editProduct
}