import React, { Component } from 'react'
import { Link } from 'react-router-dom'
export default class Frontpage extends Component {
    music = new Audio('banjauga.mp3')
    play = () => {
        this.music.play();
    }
    render() {
        return (

            <div className="main">
                <div className="main1">
                    <h1 id='wish1'>HAPPY<br />BIRTHDAY</h1>
                    <p id='p1'>To to the sunshine of my life</p>
                    <button id='SpecialWish' onClick={this.play}><Link className="nav1" aria-current='page' to='/Wish'>Special Wishes</Link></button>
                    <br />
                    <img id='img22' src="cake.png" alt="" />
                </div>
                <div className="main2">
                    <img src="happy.png" id='img55' alt="" />
                    <div className="card">
                        <div className="cae1">
                            <h1 id='month'>February</h1>
                        </div>
                        <h1 id='date'>10</h1>
                    </div>
                    <div className="imp">
                        <p id='wi'>Tumhaaree Pasand Meree Chaahat Ban Gaee, Tumhaaree Hansee Mere Dil Kee Raahat Ban Gaee.Tumhen Khush Dekhakar, To Meree Jindagee Khushanuma Ban Gaee. Janmadin Kee Badhaee Ho Meree jindagee.</p>
                        <img src="gift.png" alt=""/>
                        <br />
                        <div className="btn">
                        <button id='SpecialWish2'>Special Memories</button>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}
