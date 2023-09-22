import React from 'react'
import {useNavigate} from 'react-router-dom';

const NotFound = () => {

  const navigate=useNavigate();

  return (
    <div>
        404 | Page Not Found
        <br /><br />
        <button
          onClick={()=>{navigate('/profile')}}
        >
          Go Back Home
        </button>
    </div>
  )
}

export default NotFound