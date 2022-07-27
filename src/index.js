import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './index.css';
import {Home} from './home.js'
import {Add} from './add.js'
import {List} from './list.js'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='add' element={<Add/>}></Route>
      <Route path='list' element={<List/>}></Route>
      <Route path='*' element={<Home/>}></Route>
    </Routes>
  </BrowserRouter>
);
