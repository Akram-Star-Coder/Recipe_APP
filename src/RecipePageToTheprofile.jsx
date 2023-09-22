import React, { useState } from 'react'
import './jindex.css';
import { useNavigate } from 'react-router-dom';


const RecipePage2 = () => {

  const navigate = useNavigate();


  const [isLiked, setIsLiked] = useState(false);

  return (
    <div className='RecipePage'>
      <div className="case03">
        <button className='btnReturn' onClick={()=>{navigate('/profile/main/89421')}}>
          <i className='fa-solid fa-arrow-left'></i>
        </button>
        <button className='btnLove' onClick={()=>{setIsLiked(!isLiked)}}>
          <i className={isLiked ? "fa-solid fa-heart liked" : "fa-solid fa-heart"}></i>
        </button>
        <div className="image-overlay"></div>
      </div>
      <div className="caseTime">
        <button>
        <i className="fa-solid fa-hourglass-end"></i> 30 min
        </button>
        <div className="caseStars">
          <i className='fa-solid fa-star yellow'></i>&nbsp;
          <i className='fa-solid fa-star yellow'></i>&nbsp;
          <i className='fa-solid fa-star yellow '></i>&nbsp;
          <i className='fa-solid fa-star yellow'></i>&nbsp;
          <i className='fa-solid fa-star yellow notyellow'></i>
        </div>
      </div>
      
      <div className="titleDish">
        Ramen noodle soup
      </div>
      <div className="descriptionDish">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, nesciunt debitis incidunt earum vero itaque? Delectus enim, cum itaque, ratione tempora dolores iusto quas qui autem dolore quos eos velit.
      </div>
      <div className="calk">
        <div className='left-content'>
          Proteins
        </div>
        <hr />
        <div className="Numbers right-content">
          3.45g
        </div>
      </div>
      <div className="calk">
        <div className='left-content'>
          Fat
        </div>
        <hr />
        <div className="Numbers right-content">
          10.69g
        </div>
      </div>
      <div className="calk">
        <div className='left-content'>
          Carbohydrates
        </div>
        <hr />
        <div className="Numbers right-content">
          22.72g
        </div>
      </div>

      <div className="ingredientsTitle">
        Ingredients
      </div>
      <div className="ingLists">
        <div className="item">
          <img src="https://www.chickenindia.org/wp-content/uploads/2020/05/chicken-breast-food-ingredients-chicken-279848-1024x682.jpg" alt="" />
          <div className="titleIng">Chicken</div>
        </div>
        <div className="item">
          <img src="https://img-3.journaldesfemmes.fr/_QaX0w7axw_hKuT2-2YsqDLE_tQ=/1500x/smart/d4cdc1b0039945e2a674024d990ef759/ccmcms-jdf/39621823.jpg" alt="" />
          <div className="titleIng">Oignons</div>
        </div>
        <div className="item">
          <img src="https://www.chilipeppermadness.com/wp-content/uploads/2022/08/Spicy-Noodles-SQ.jpg" alt="" />
          <div className="titleIng">Noodles</div>
        </div>
        <div className="item">
          <img src="https://media.eggs.ca/assets/Eggs101/_resampled/FillWyIxMjgwIiwiNzIwIl0/0L1C9869.jpg" alt="" />
          <div className="titleIng">Eggs</div>
        </div>
        <div className="item">
          <img src="https://www.theolivetap.com/product_images/uploaded_images/olive-oil-2-.jpg" alt="" />
          <div className="titleIng">Oil</div>
        </div>
      </div>
      
      
    </div>
  )
}

export default RecipePage2