import React, {useEffect} from 'react';
import {BrowserRouter,Route, Routes} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

import SignIn from './pages/signin/SignIn';
import Apply from './pages/signin/Apply';
import Admin from './pages/Admin';
import NotFound from './pages/NotFound';


function App(){
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
            <Route path='/' element={<SignIn/>}></Route>
            <Route path='/apply' element={<Apply/>}></Route>
            <Route path='/admin' element={<Admin/>}></Route>
            <Route path='*' element={<NotFound/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
