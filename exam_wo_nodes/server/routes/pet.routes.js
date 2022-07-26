const PetController = require('../controllers/pet.controller');

module.exports = app => {
	app.get('/', PetController.findAllPets);
	app.post('/pets/new', PetController.createNewPet);
	app.get('/pets/:_id', PetController.findOnePet);
	app.put('/pets/:_id/edit', PetController.updateOnePet);
	app.delete('/pets/:_id', PetController.deletePet);
}