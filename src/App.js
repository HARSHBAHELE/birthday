
import './App.css';
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import React, { Component } from 'react'
import Navbar from './componets/Navbar';
import Frontpage from './Frontpage';
import Special from './Special';
import Memories from './componets/Memories';

export default class App extends Component {
  music = new Audio('hamsafar.mp3')
  music1 = new Audio('pahele.mp3')
    play = () => {
        this.music.play();
    }
    pause = () => {
        this.music.pause();
    }
    play1 = () => {
      this.music1.play();
  }
  pause1 = () => {
      this.music1.pause();
  }
  render() {
    return (
      <>
      <BrowserRouter>
      <Navbar stop={this.pause} start={this.play} stop1={this.pause1} start1={this.play1}/>
        <Routes>
          <Route exact path='/Wish' element={<Special/>}></Route>
        </Routes>
        <Routes>
           <Route exact path='/Memories' element={<Memories start={this.play} stop={this.pause}  stop1={this.pause1} start1={this.play1}/>}></Route> 
        </Routes>
        <Routes>
           <Route exact path='/' element={<Frontpage start={this.play} stop={this.pause}  stop1={this.pause1} start1={this.play1}/>}></Route> 
        </Routes>
      </BrowserRouter>
      </>
    )
  }
}
