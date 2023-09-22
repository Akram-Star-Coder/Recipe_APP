import React, { useState } from 'react'
import './jindex.css';
import { useNavigate  } from 'react-router-dom';
import ItemRecipe2 from './RecipeItem2';

const ProfileMain = () => {

  const navigate = useNavigate();
  const [isPicturClicked, setIsClicked]=  useState(false);
  
  var USER = true;
 
  return (
    <>
    <div onClick={()=>{setIsClicked(false);}} className={isPicturClicked ? "pictureClicked pictureB" : "pictureB"}>
      <img src="https://s.yimg.com/ny/api/res/1.2/rtlxONikd789oWzhHomDiw--/YXBwaWQ9aGlnaGxhbmRlcjtoPTY2Ng--/https://s.yimg.com/os/creatr-uploaded-images/2023-01/862d2610-9843-11ed-bd29-8797d80abddc" alt="" />
    </div>
    <div className='ProfileMain'>
      <div className="caseProfile">
        <div className="backToHome" onClick={()=>{navigate('/profile/89421')}}>
          <i className='fa-solid fa-arrow-left'></i>
        </div>
        <div onClick={()=>{setIsClicked(true)}} className="image">
          <img src="https://s.yimg.com/ny/api/res/1.2/rtlxONikd789oWzhHomDiw--/YXBwaWQ9aGlnaGxhbmRlcjtoPTY2Ng--/https://s.yimg.com/os/creatr-uploaded-images/2023-01/862d2610-9843-11ed-bd29-8797d80abddc" alt="PROFILEpICTURE" />
        </div>
       
        <div className="infos">
          <div className="fullname">
            Astrid Jackson <button className="valide"><i className='fa-solid fa-check'></i></button>
          </div>
          <div className="tags">
            <em>@astrid865</em>
          </div>
          <div className="someInfos">
            <div className="caseKJk">
              <span>1.24M </span>
              <span>FOLLOWERS</span>
            </div>
            <div className="caseKJk">
              <span>189</span>
              <span>FOLLOWEES</span>
            </div>
            <div className="caseKJk">
              <span>705</span>
              <span>RECIPES</span>
            </div>
          </div>
        </div>
      </div>
         {
            USER &&
            (
              <div className='containerDvhh'>
              <button className="subscribe">
                FOLLOWING
              </button>
              <button onClick={()=>{navigate('/messageArea')}} className="message">
                MESSAGE
              </button>
              </div>
            ) 
          } 
          <div className="containerDvhh colorWhite">
            Recipes
          </div>
          <div className="container5">
            <ItemRecipe2 />
            <ItemRecipe2 />
            <ItemRecipe2 />
            <ItemRecipe2 />
            <ItemRecipe2 />
            <ItemRecipe2 />
            <ItemRecipe2 />
            <ItemRecipe2 />
            <ItemRecipe2 />
            <ItemRecipe2 />
            <ItemRecipe2 />
          </div>
          

    </div>
    </>
  )
}

export default ProfileMain
