// const catcrud = require('../models/categoryCrud');
const crud = require('../models/subcategoryCrud');

const addsubcategory = async (req, res) => {
	try {
		let subcate = await crud.create({
			categoryId:req.body.category,
			subcategory: req.body.subcategory
		});
		if (subcate) {
			return res.json({ status: 1, message: "Sub-Category Successfully add" });
		} else {
			return res.json({ status: 0, message: "Sub-Category not add" });
		}
	} catch (err) {
		console.log(err);
		return false;
	}
}

const viewsubcategory = async (req, res) => {
	try {
		let subcate = await crud.find({});
		if (subcate) {
			return res.json({ status: 1, message: subcate });
		} else {
			return res.json({ status: 0, message: "Sub-Category not add" });
		}
	} catch (err) {
		console.log(err);
		return false;
	}
}

const editsubcategory = async (req, res) => {
	try {
		let subcate = await crud.findByIdAndUpdate(req.body.id, {
			subcategory : req.body.subcategory
		});
		if (subcate) {
			return res.json({ status: 1, message: "Subcategory edited" });
		} else {
			return res.json({ status: 0, message: "Subcategory not edit" });
		}
	} catch (err) {
		console.log(err);
		return false;
	}
}

const deletesubcategory = async (req, res) => {
	try {
		let id = req.query.id;
		let subcate = await crud.findByIdAndDelete(id);
		if (subcate) {
			return res.json({ status: 1, message: "Sub Category Delete" });
		} else {
			return res.json({ status: 0, message: "Sub-Category not Delete" });
		}
	} catch (err) {
		console.log(err);
		return false;
	}
}

module.exports = {
	addsubcategory,
	viewsubcategory,
	editsubcategory,
	deletesubcategory
}