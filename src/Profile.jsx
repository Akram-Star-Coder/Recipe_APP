import React, { useState } from 'react'
import './jindex.css';
import ItemRecipe from './ItemRecipe';
import { useNavigate } from 'react-router-dom';

const Profile = () => {

  const Link = 'https://hips.hearstapps.com/hmg-prod/images/you-wont-make-a-difference-by-being-like-everyone-royalty-free-image-1674587779.jpg';
  const navigate=useNavigate();
  const [popular, setPopular] = useState(true);
  const [breakfast, setBreakfast] = useState(false);
  const [lunch, setLunch] = useState(false);
  const [dinner, setDinner] = useState(false);

  const [popularN, setPopularN] = useState(982);
  const [breakfastN, setBreakfasNt] = useState(279);
  const [lunchN, setLunchN] = useState(136);
  const [dinnerN, setDinnerN] = useState(64);

  const handleCLick = (type)=>{
    if(type ==='popular'){
      setPopular(true);
      setBreakfast(false);
      setDinner(false);
      setLunch(false);
    }
    else if(type ===  'breakfast'){
      setBreakfast(true);
      setPopular(false);
      setDinner(false);
      setLunch(false);
    }
    else if(type ===  'lunch'){
      setLunch(true);
      setBreakfast(false);
      setPopular(false);
      setDinner(false);
    }
    else if(type ===  'dinner'){
      setDinner(true);
      setBreakfast(false);
      setPopular(false);
      setLunch(false);
    }
  }


  return (
    <div className='Profile'>
      <div className="container2">
        <div className="container6">
          Hello, 
          <br />
          Astrid 👋
        </div>
        <div onClick={()=>{navigate('/profile/main/89421')}} className="container7">
          <img src={Link} alt="ProfileImage" />
        </div>
      </div>
      <div className="container3">
        <button onClick={()=>{handleCLick("popular");}} className={popular && "popular"}>🔥 Popular</button>
        <button onClick={()=>{handleCLick("breakfast");}} className={breakfast && "popular"}>🥪Breakfast</button>
        <button onClick={()=>{handleCLick("lunch");}}  className={lunch && "popular"}>🍖 Lunch</button>       
        <button onClick={()=>{handleCLick("dinner");}} className={dinner && "popular"}>🍲 Dinner</button>
      </div>
      <div className="container4">
        <div>
        {
          popular ? (
            <>
            {popularN}
            &nbsp;
            <span className="popo">
            Popular
            </span>
            </>
          ) :
          breakfast ? (
            <>
            {breakfastN}
            &nbsp;
            <span className="popo">
            Breakfast
            </span>
            </>
          ) :
          lunch ? (
            <>
            {lunchN}
            &nbsp;
            <span className="popo">
            Lunch
            </span>
            </>
          ) :
          dinner ? (
            <>
            {dinnerN}
            &nbsp;
            <span className="popo">
            Dinner
            </span>
            </>
          ) : null

        }
        </div>
        <div className='setting'>
          <i className="fa-solid fa-sliders"></i>
        </div>
      </div>
      <div className="container5">
        <ItemRecipe />
        <ItemRecipe />
        <ItemRecipe />
        <ItemRecipe />
      </div>
    </div>
  )
}

export default Profile