import React from 'react'
import './jindex.css'; 
import Lazagn from './laza.jpg';
import {useNavigate} from 'react-router-dom';

const Home = () => {

    const navigate = useNavigate();

  return (
    <div className='Home'>
        <img src={Lazagn} alt="imageCOuverture" />
        <div className="container1">
            <h1>
                Find the perfect recipes <span>everyday</span>
            </h1>
            <p>More than 20 thousand recipes of healthy and healthy food</p>
            <button 
                onClick={()=>{navigate('/login')}}
            >
                Discover Recipes &nbsp; <i className='fa-solid fa-arrow-right'></i>
            </button>
        </div>
    </div>
  )
}

export default Home