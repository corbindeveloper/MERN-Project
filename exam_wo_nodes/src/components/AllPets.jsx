import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

const AllPets = () => {

	// useState
	let [pets, setPets] = useState([]);


	// useEffect
	useEffect(() => {
		axios.get('http://localhost:8000/')
			.then((res) => {
				console.log("****** RESPONSE", res)
				setPets(res.data.results)
			})
			.catch(err => console.log(err));
	}, [])

	

	return (
		<div>
			<div className="page-top">
		    	<h1 className="title"> Pet Shelter </h1>
		    	<Link to="/pets/new" className='top-link'>Add a Pet</Link>
		    </div>

			<h1> These pets are looking for a good home</h1>

			<div className='table-container'>
				<div className='pet-table'>
					
					<div className="top-row">
						<h4>Name</h4>
						<h4>Type</h4>
						<h4>Actions</h4>
					</div>


					{
						pets.map((pet)  => {
							return (
								<div key={pet._id} className="top-row">
									<p>{pet.name}</p>
									<p>{pet.type}</p>
									<div className='actions'>
										<Link to={`/pets/${pet._id}`}>Details</Link>
										<Link to={`/pets/${pet._id}/edit`}>Edit</Link>
									</div>
								</div>
							)
						})
					}

				</div>
			</div>

		</div>
	)
};


export default AllPets;