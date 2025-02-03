
import './App.css';
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import React, { Component } from 'react'
import Navbar from './componets/Navbar';
import Frontpage from './Frontpage';
import Special from './Special';



export default class App extends Component {
  render() {
    return (
      <>
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route exact path='/Wish' element={<Special/>}></Route>
        </Routes>
        <Routes>
          <Route exact path='/' element={<Frontpage/>}></Route>
        </Routes>
      </BrowserRouter>
      </>
    )
  }
}
