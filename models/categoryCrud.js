const mongoose = require('mongoose');

const categorySchema = mongoose.Schema({
	category: {
		type: String,
		require:true
	}
})

const crud = mongoose.model('categoryCrud', categorySchema);
module.exports = crud;