import React from 'react';
import {Routes , Route} from 'react-router-dom';
import Home from './pages/Home';
import Createbook from './pages/Createbook';
import ShowBook from './pages/ShowBook';
import DeleteBook from './pages/DeleteBook';
import Editbook from './pages/Editbook';

function App() {
  return(
    <>
    <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/book/create' element={<Createbook/>}/>
    <Route path='/book/details/:id' element={<ShowBook/>}/>
    <Route path='/book/delete/:id' element={<DeleteBook/>}/>
    <Route path='/book/edit/:id' element={<Editbook/>}/>
  </Routes>
    </>
  )
}

export default App
