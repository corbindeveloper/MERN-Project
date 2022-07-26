import React, {useState} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const CreatePet = (props) => {

    // useState
    let [formInfo, setFormInfo] = useState({});
    let [formErrors, setFormErrors] = useState({});
    const navigate = useNavigate();


    // Change Handler
    const changeHandler = e => {
        setFormInfo({
            ...formInfo,
            [e.target.name]: e.target.value
        })
    }


    // Submit Handler
    const submitHandler = e => {
        e.preventDefault();
        axios.post("http://localhost:8000/pets/new", formInfo)
            .then(res => {
                console.log("***** RESPONSE:", res)
                console.log(res.data.errors);
                if(res.data.errors) {
                    setFormErrors(res.data.errors)
                } else {
                    setFormErrors({});
                    props.setFormSubmitted(!props.formSubmitted)
                    navigate("/")
                }
            })
            .catch(err => console.log(err))
    }



    return (
        <div>
            <div className="page-top">
		    	<h1 className="title"> Pet Shelter </h1>
		    	<Link to="/" className='top-link'>Back Home</Link>
		    </div>

			<h1 className='page-title'>Know a pet needing a home?</h1>

            <form onSubmit={submitHandler}>

                <div className='form-group'>
                    <label>Name: </label>
                    <input type="text" name="name" className="form-input" onChange={changeHandler} />
                    <p className="text-danger">{formErrors.name?.message}</p>
                </div>

                <div className='form-group'>
                    <label>Type: </label>
                    <input type="text" name="type" className="form-input" onChange={changeHandler} />
                    <p className="text-danger">{formErrors.type?.message}</p>
                </div>

                <div className='form-group'>
                    <label>Description: </label>
                    <input type="text" name="description" className="form-input" onChange={changeHandler} />
                    <p className="text-danger">{formErrors.description?.message}</p>
                </div>

                <div className='form-group'>
                    <label>Skill One: </label>
                    <input type="text" name="skillOne" className="form-input" onChange={changeHandler} />
                    <p className="text-danger">{formErrors.skillOne?.message}</p>
                </div>

                <div className='form-group'>
                    <label>Skill Two: </label>
                    <input type="text" name="skillTwo" className="form-input" onChange={changeHandler} />
                    <p className="text-danger">{formErrors.skillTwo?.message}</p>
                </div>

                <div className='form-group'>
                    <label>Skill Three: </label>
                    <input type="text" name="skillThree" className="form-input" onChange={changeHandler} />
                    <p className="text-danger">{formErrors.skillThree?.message}</p>
                </div>

                <input type="submit" defaultValue="Submit" className='submit-btn' />

            </form>
            
        </div>
    );
}

export default CreatePet;
