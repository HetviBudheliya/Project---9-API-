const mongoose = require('mongoose');

const registerSchema = mongoose.Schema({
	name: {
		type: String,
		require:true
	},
	email: {
		type: String,
		require:true
	},
	password: {
		type: String,
		require:true
	}
})
const crud = mongoose.model('registerCrud', registerSchema);
module.exports = crud;