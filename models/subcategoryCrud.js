const mongoose = require('mongoose');

const subcatSchema = mongoose.Schema({
	categoryId: {
		type: mongoose.Types.ObjectId,
		ref:'categoryCrud'
	},
	subcategory: {
		type: String,
		require:true
	}
})
const crud = mongoose.model('subcategoryCrud', subcatSchema);
module.exports = crud;
