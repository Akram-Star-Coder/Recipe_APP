import React from 'react'
import './jindex.css';
import { useNavigate } from 'react-router-dom';

const Login = () => {

    const navigate=useNavigate();


    return (
    <div className='Login'>
        <div className="k">
           
            <button
            onClick={()=>{navigate("/profile/89421")}}
            >
            Click Here
        </button>
        </div>
    </div>
  )
}

export default Login
