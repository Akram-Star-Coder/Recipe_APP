import React from 'react'
import './jindex.css';
import { useNavigate } from 'react-router-dom';

const ItemRecipe2 = () => {

  const navigate=useNavigate();

  return (
    <div onClick={()=>{navigate('/profile/dish/2/34928')}} className="itemRecipe">
        <div className="caseOne">
            <img src="https://pnghq.com/wp-content/uploads/download-free-food-plate-diet-png-images-8.png" alt="imageFood" />
        </div>
        <div className="caseTwo">
            <div className="caseThree">
              <span>650g</span>
              <span>799cal</span>
            </div>
            <div className="caseFour">
              Backed Ribs
            </div>
            <div className="caseFifth">
              Delicious ribs on the table for guests.
            </div>
        </div>
    </div>
    )
}

export default ItemRecipe2