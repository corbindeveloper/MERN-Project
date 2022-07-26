const mongoose = require("mongoose");

const PetSchema = new mongoose.Schema({
	name: {
		type: String,
		required: [true, "Name is required."],
		minlength:[3, "Name should be atleast three characters long."]
	},
	type: {
		type: String,
		required: [true, "Pet type is required."],
		minlength: [3, "Pet type should be atleast three characters long."]
	},
	description: {
		type: String,
		required: [true, "Description is required."],
		minlength: [3, "Description should be atleast three characters long."]
	},
	skillOne: {
		type: String
	},
	skillTwo: {
		type: String
	},
	skillThree: {
		type: String
	}


}, {timestamps: true})

const Pet = mongoose.model('Pet', PetSchema);

module.exports = Pet;