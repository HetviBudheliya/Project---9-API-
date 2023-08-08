const crud = require('../models/registerCrud');
const jwtData = require('jsonwebtoken');

const index = (req, res) => {
	return res.json({ message: 'Welcome' });
}

const registerData = async (req, res) => {
	try {
		if (req.body.password == req.body.cpassword) {
			const add = await crud.create({
				name: req.body.name,
				email: req.body.email,
				password:req.body.password
			})
			if (add) {
				return res.json({ status: 1, message: "Record Successfully add" })
			} else {
				return res.json({ status: 0, message: "Record not add" })
			}
		} else {
			return res.json({status : 0, message : "Password not match"})
		}
	} catch (err) {
		console.log(err);
		return false;
	}
}

const view = async (req, res) => {
	try {
		let viewData = await crud.find({});
		if (viewData) {
			return res.json({ status: 1, messege: viewData});
		} else {
			return res.json({ status: 0, messege: "Record not fetch" });
		}
	} catch (err) {
		console.log(err);
		return false;
	}
}

const editData = async (req, res) => {
	try {
		let editData = await crud.findByIdAndUpdate(req.body.id, {
			name: req.body.name,
			email: req.body.email,
			password: req.body.password
		});
		if (editData) {
			return res.json({ status: 1, messege: "Record successfully Edit" });
		} else {
			return res.json({ status: 0, messege: "Record not Edit" });
		}
	} catch (err) {
		console.log(err);
		return false;
	}
}

const deleteData = async (req, res) => {
	try {
		let id = req.query.id;
		let deleteData = await crud.findByIdAndDelete(id);
		if (deleteData) {
			return res.json({ status: 1, messege: "Record successfully Delete" });
		} else {
			return res.json({ status: 0, messege: "Record not Delete" });
		}
	} catch (err) {
		console.log(err);
		return false;
	}
}

const login = async (req, res) => {
	try {
		let userLogin = await crud.findOne({ email: req.body.email });
		if (!userLogin || userLogin.password != req.body.password) {
			return res.json({ status: 0, message: "Email & Password not match" });
		}
		let token = jwtData.sign({ payload: userLogin }, 'api',{ expiresIn: '1h' });
		return res.json({ token: token });
	} catch (err) {
		console.log(err);
		return false;
	}
}

module.exports = {
	index,
	registerData,
	view,
	editData,
	deleteData,
	login
}