import React from 'react'
import './index.css';
import Home from './Home';
import Profile from './Profile';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Dish from './RecipePage';
import ProfileMain from './ProfileMain';
import NotFound from './NotFound';
import Dish2 from './RecipePageToTheprofile';
import MessageArea from './MessageArea'
import Login from './login';

const App = () => {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/login' element={<Login />}/>
          <Route path='/' element={<Home />} />
          <Route path='/profile/:id' element={<Profile  />} />
          <Route path='/profile/dish/:id' element={<Dish/>}/>
          <Route path='/profile/dish/2/:id' element={<Dish2/>}/>
          <Route path="/profile/main/:id" element={<ProfileMain/>}/>
          <Route path='*' element={<NotFound/>}/>
          <Route path='/messageArea' element={<MessageArea />}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App