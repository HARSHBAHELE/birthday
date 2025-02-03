import React, { Component } from 'react'
export default class Songs extends Component {
     audioElement = new Audio('banjauga.mp3')
    play = () => {
        this.audioElement.play();
    }
    pause = () => {
        this.audioElement.pause();
    }
  render() {
    return (
        <>
     <div className="mainimp">
        <div className="son1">
        <h4 id='spech1'>Some Special Songs for My Special Person</h4>
        <div className="songsss">
        <div className="card" style={{width: "18rem;", backgroundColor:'#fdb6c6'}}>
  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQG5tn5ZbnKnL0uiuhcjNb34Y-0BYh6daGAnA&s" className="card-img-top" alt="..."/>
  <div className="card-body" style={{backgroundColor:'#fdb6c6'}}>
    <h5 className="card-title">Tera Ban Jauga</h5>
   <button onClick={this.play} id='playy'>Play The Song</button>
   <button onClick={this.pause} id='playy'>Pause</button>
  </div>
  </div>
  <div className="card" style={{width: "18rem;", backgroundColor:'#fdb6c6'}}>
  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQG5tn5ZbnKnL0uiuhcjNb34Y-0BYh6daGAnA&s" className="card-img-top" alt="..."/>
  <div className="card-body" style={{backgroundColor:'#fdb6c6'}}>
    <h5 className="card-title">Tera Ban Jauga</h5>
   <button onClick={this.play} id='playy'>Play The Song</button>
   <button onClick={this.pause} id='playy'>Pause</button>
  </div>
  </div>
        </div>
        </div>
     </div>
     </>
    )
  }
}
