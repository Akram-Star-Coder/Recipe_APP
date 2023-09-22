import React from 'react'
import "./jindex.css";  
import {useNavigate} from 'react-router-dom';

const MessageArea = () => {
  
  const navigatorX = useNavigate();

  return (
    <div className='MessageArea'>
      <div className="caseMsg1">
        <button
          onClick={()=>{navigatorX('/profile/89421')}}
        >
          <i className='fa-solid fa-arrow-left'></i>
        </button>
        <img  onClick={()=>{navigatorX('/profile/main/89421')}} src="https://media.istockphoto.com/id/639583954/photo/making-a-healthy-meal-from-scratch.jpg?s=612x612&w=0&k=20&c=5QgRRTia0WRXpKF_7RqvpfLvxLw8MLlR0ltaIWfsGHI=" alt="" />
        <span  onClick={()=>{navigatorX('/profile/main/89421')}} >Jack Nickelson</span>
      </div>
      <div className="caseMsg2">

      </div>
      <div className="caseMsg3">
        <input type="text" placeholder='Message...' />
        <button><i className='fa-solid fa-paper-plane'></i></button>
      </div>
    </div>
  )
}

export default MessageArea