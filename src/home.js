import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import homeImg from './homebtn.jpg'
import addTripImg from './addtripbtn.jpg'
import tripListImg from './triplistbtn.jpg'
import tropicIcon from './tropic.jpg'
import trekIcon from './trek.jpg'
import clubIcon from './club.jpg'
import barImg from './bar.jpg'
import {trips, trip_cnt} from './add.js'
import './home.css';

class Home extends Component {
  render() {
    return (
      <div className='container'>
        <div className='buttons'>
            <Link to='\'><img src={homeImg} alt='Home'></img></Link><br></br><br></br>
            <Link to='add'><img src={addTripImg} alt='Add Trip'></img></Link><br></br><br></br>
            <Link to='list'><img src={tripListImg} alt='List Trip'></img></Link>
        </div>
        <div className='details'>
            <div className='trips'>{trips.length}<sub>trips</sub></div>
            <div className='desc-trips'>
              <div>{trip_cnt[0]}<sub><img src={tropicIcon} alt = "tropic" className='tripbtn'></img></sub></div>
              <div>{trip_cnt[1]}<sub><img src={trekIcon} alt = "trek" className='tripbtn'></img></sub></div>
              <div>{trip_cnt[2]}<sub><img src={clubIcon} alt = "club" className='tripbtn'></img></sub></div>
            </div>
            <div className='bar'>
              <div><img src={barImg} alt='%bar'></img></div>
            </div>
        </div>    
      </div>
    )
  }
}

export {Home};