import React from 'react'
import './jindex.css';
import { useNavigate } from 'react-router-dom';

const Login = () => {

    const navigate=useNavigate();


    return (
    <div className='Login'>
        <div className="k">
            <div className="itemInpu">
                <input type="text" placeholder='Username' />
            </div>
            <div className="itemInpu">
                <input type="password" placeholder='Password'  />
            </div>
            <button
            onClick={()=>{navigate("/profile/89421")}}
            >
            Sign In
        </button>
        </div>
    </div>
  )
}

export default Login