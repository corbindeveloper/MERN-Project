const Pet = require('../models/pet.model');


// GET ALL
// **********************************************************
module.exports.findAllPets = (req, res) => {
	Pet.find().collation({locale: 'en'}).sort({type: 1})
		.then(allPets => {
			res.json({results: allPets})
		})
		.catch(err => {
			res.json(err);
		})
}


//  CREATE
// **********************************************************
module.exports.createNewPet = (req, res) => {
	Pet.create(req.body)
		.then(newlyCreatedPet => {
			res.json({results: newlyCreatedPet})
		})
		.catch(err => {
			res.json(err);
		})
}


//  FIND ONE
// **********************************************************
module.exports.findOnePet = (req, res) => {
	Pet.findOne({_id: req.params._id})
		.then(pet => {
			res.json({results: pet})
		})
		.catch(err => {
			res.json(err);
		})
}


//  UPDATE ONE
// **********************************************************
module.exports.updateOnePet = (req, res) => {
	Pet.findOneAndUpdate(
		{_id: req.params._id},
		req.body,
		{ new: true, runValidators: true }
	)
		.then(updatedPet => {
			res.json({results: updatedPet})
		})
		.catch(err => {
			res.json(err);
		})
}

//  DELETE
// **********************************************************
module.exports.deletePet = (req, res) => {
	Pet.deleteOne({_id: req.params._id})
		.then(pet => {
			res.json({results: pet})
		})
		.catch(err => {
			res.json(err);
		})
}

