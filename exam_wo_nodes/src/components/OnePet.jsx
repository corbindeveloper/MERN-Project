import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { useParams } from 'react-router';
import { useNavigate } from 'react-router-dom';

const OnePet = () => {

    const {_id} = useParams();
    const [details, setDetails] = useState({})
    const[missing, setMissing] = useState(false)
    const navigate = useNavigate();
    const [count, setCount] =  useState(0);


    useEffect(() => {
        axios.get(`http://localhost:8000/pets/${_id}`)
            .then(res => {
                console.log(res);
                if(res.data.results) {
                    setDetails(res.data.results)
                } else {
                    setMissing(true)
                }
            })
            .catch(err => console.log(err));

    }, [])

    // DELETE
    const deletePet = () => {
        axios.delete(`http://localhost:8000/pets/${_id}`)
            .then(res => {
                console.log(res)
                navigate("/")
            })
            .catch(err=>console.log(err))
    }


    return (
        
        <div>
            {
                missing===true?
                <h1>NO NO NO NO NO NO NO NO <br /> They  not here.</h1>:
                <>
                    <h1>Details about {details.name}!!</h1>
                    <p>Type: {details.type}</p>
                    <p>Description: {details.description}</p>
                    <p>Skill One: {details.skillOne}</p>
                    <p>Skill Two: {details.skillTwo}</p>
                    <p>Skill Three: {details.skillThree}</p>
                    <br />
                    <button onClick={deletePet} className='btn-danger'>Delete {details.name}</button>
                    <br/>
                    <br/>
                    <button onClick={() => setCount(count + 1)}>Like</button>
                    <p>{count}</p>
                </>
            }
        </div>
    );
}

export default OnePet;