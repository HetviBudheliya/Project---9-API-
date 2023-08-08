const crud = require('../models/categoryCrud');

const addcategory = async (req, res) => {
	try {
		const categorydata = await crud.create({
			category : req.body.category
		})
		if (categorydata) {
			return res.json({ status: 1, messege: 'Category successfully insert' })
		} else {
			return res.json({ status: 0, messege: 'Category not insert' })
		}
	} catch (err) {
		console.log(err);
		return false;
	}
}

const viewcategory = async (req, res) => {
	try {
		let categorydata = await crud.find({});
		if (categorydata) {
			console.log(categorydata);
			return res.json({ status: 1, messege: categorydata });
		} else {
			return res.json({ status: 0, messege: 'Record not fetch' });
		}
	} catch (err) {
		console.log(err);
		return false
	}
}

const editcategory = async (req, res) => {
	try {
		const { id, category } = req.body;
		let editData = await crud.findByIdAndUpdate(id, {			
			category: category
		});
		if (editData) {
 			return res.json({ status: 1, messege: "Category edited" });
		} else {
			return res.json({ status: 0, messege: 'Category not edit' });
		}
	} catch (err) {
		console.log(err);
		return false
	}
}

deletecategory = async (req, res) => {
	try {
		let id = req.query.id;
		let deleteData = await crud.findByIdAndDelete(id);
		if (deleteData) {
			return res.json({ status: 1, messege: "Record Delete" });
		} else {
			console.log(err);
			return res.json({ status: 0, messege: 'Record not Delete' });
		}
	} catch (err) {
		console.log(err);
		return false
	}
}

module.exports = {
	addcategory,
	viewcategory,
	editcategory,
	deletecategory

}