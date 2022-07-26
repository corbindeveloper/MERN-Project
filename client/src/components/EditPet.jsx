import React, { useState, useEffect} from 'react';
import { useParams } from 'react-router';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import {Link} from 'react-router-dom';

const EditPet = (props) => {

    // useState and UseParms HERE
    const {_id} = useParams();
    const [details, setDetails] = useState({});
    let [formErrors, setFormErrors] = useState({});
    const navigate = useNavigate();
    const [missing, setMissing] = useState(false)

    // useEffect
    useEffect(() => {
        axios.get(`http://localhost:8000/pets/${_id}`)
        .then(res => {
            console.log(res);
            if(res.data.results) {
                setDetails(res.data.results)
            } else  {
                setMissing(true);
            }
        })
        .catch(err => console.log(err));

    }, [_id])

    // Change Handler
    const changeHandler = e => {
        setDetails({
            ...details,
            [e.target.name]: e.target.value
        })
    }

    
    // Submit Handler 
    const submitHandler = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:8000/pets/${_id}/edit`, details)
            .then(res => {
                console.log(res)
                if(res.data.errors) {
                    setFormErrors(res.data.errors)
                } else {
                    setFormErrors({});
                    props.setFormSubmitted(!props.formSubmitted)
                    navigate("/")
                }
            })
            .catch(err=>console.log(err));
    }



    return (
        <div>
            <div className="page-top">
		    	<h1 className="title"> Pet Shelter </h1>
		    	<Link to="/" className='top-link'>Back Home</Link>
		    </div>
                {
                    missing===true?
                    <h1>Something went wrong.. This pet doesn't exist.</h1>:
                    <>
                        <h1 className='page-title'>Currently Editing: </h1>

                        <form onSubmit={submitHandler}>

                            <div className='form-group'>
                                <label>Name: {details.name}</label>
                                <p className="text-danger">{formErrors.name?.message}</p>
                                <input type="text" name="name" className="form-input" onChange={changeHandler} defaultValue={details.name} />
                            </div>

                            <div className='form-group'>
                                <label>Type: </label>
                                <p className="text-danger">{formErrors.type?.message}</p>
                                <input type="text" name="type" className="form-input" onChange={changeHandler} defaultValue={details.type} />
                            </div>

                            <div className='form-group'>
                                <label>Description: </label>
                                <p className="text-danger">{formErrors.description?.message}</p>
                                <input type="text" name="description" className="form-input" onChange={changeHandler} defaultValue={details.description} />
                            </div>

                            <div className='form-group'>
                                <label>Skill One: </label>
                                <input type="text" name="skillOne" className="form-input" onChange={changeHandler} defaultValue={details.skillOne} />
                            </div>

                            <div className='form-group'>
                                <label>Skill Two: </label>
                                <input type="text" name="skillTwo" className="form-input" onChange={changeHandler} defaultValue={details.skillTwo} />
                            </div>

                            <div className='form-group'>
                                <label>Skill Three: </label>
                                <input type="text" name="skillThree" className="form-input" onChange={changeHandler} defaultValue={details.skillThree}/>
                            </div>

                            <input type="submit" defaultValue="Submit" className='submit-btn' />

                        </form>
                    </>
                }




        </div>
    );
}

export default EditPet;
