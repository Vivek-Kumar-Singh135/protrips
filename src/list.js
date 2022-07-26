import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'
import homeImg from './homebtn.jpg'
import addTripImg from './addtripbtn.jpg'
import tripListImg from './triplistbtn.jpg'
import './list.css';
import {trips} from './add.js'

function List() {
    let filteredTrips = trips;
    let [filter, setFilter] = useState('all');

    let funTrips= () => {
        filteredTrips = []
        filteredTrips = trips.filter(trip =>{
            if(filter === 'all') return trip;
            else return trip.type === filter;
        })
        console.log(filteredTrips);
    }

    let filterList = (e) => {
        console.log("filterList called");
        console.log("target : " + e.target)
        console.log("value : " + e.target.value);
        let val = e.target.value;
        setFilter(val);
    }

    useEffect(() => {
        console.log(filter);
    }, [filter])

    funTrips();

    return (
        <div className='container'>
            <div className='buttons'>
                <Link to={"/"}><img src={homeImg} alt='Home'></img></Link><br></br><br></br>
                <Link to={"/add"}><img src={addTripImg} alt='Add Trip'></img></Link><br></br><br></br>
                <Link to={"list"}><img src={tripListImg} alt='List Trip'></img></Link>
            </div>
            <div className='list'>
                <div id='heading'>{filter.toUpperCase()} Trips</div>
                <table>
                    <tbody>
                    <tr>
                        <th id='th1'>Date</th>
                        <th id='th1'>Place</th>
                        <th id='th2'>Type</th>
                    </tr>
                    <tr>
                        <td id='line'></td>
                        <td id='line'></td>
                        <td id='line'></td>
                    </tr>
                    {
                        filteredTrips.map((trip) => {
                            return(
                                <tr>
                                    <td>{trip.date}</td>
                                    <td>{trip.place}</td>
                                    <td>{trip.type}</td>
                                </tr>
                            )
                        })
                    }
                    </tbody>
                </table>
                <div className='filter'>Filter by : 
                    <input type='radio' name='filter' value='all' onClick={filterList}></input>All
                    <input type='radio' name='filter' value='Trek' onClick={filterList}></input>Trek
                    <input type='radio' name='filter' value='Club' onClick={filterList}></input>Club
                    <input type='radio' name='filter' value='Tropic' onClick={filterList}></input>Tropic
                </div>
            </div>
        </div>
    )
  }

export {List};