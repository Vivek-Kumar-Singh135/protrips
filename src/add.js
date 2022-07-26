import React, { useState} from 'react'
import {Link} from 'react-router-dom'
import homeImg from './homebtn.jpg'
import addTripImg from './addtripbtn.jpg'
import tripListImg from './triplistbtn.jpg'
import './add.css';

let trips = []
let trip_cnt = [0, 0, 0]

function Add(){

    let [data, setData] = useState({
        date : '',
        place : '',
        type : ''
    })
    
    let updateData = (e) =>{
        const name = e.target.name;
        const value = e.target.value;

        setData({...data, [name] : value});
    }

    let updateList = (e) => {
        e.preventDefault();
        /*const form = tripForm.current
        setData({
            date:form['date'].value,
            place:form['place'].value,
            type:form['type'].value
        })
        console.log(data);*/
        const newData = {...data};
        if(data.type === 'Tropic') trip_cnt[0] += 1;
        else if(data.type === 'Trek') trip_cnt[1] += 1;
        else if(data.type === 'Club') trip_cnt[2] += 1;
        trips.push(newData);
        console.log(trips.length);
        console.log(newData);
        setData({
            date:'',
            place:'',
            type:''
        })
    }
    return (
        <div className='container'>
            <div className='buttons'>
                <Link to={"/"}><img src={homeImg} alt='Home'></img></Link><br></br><br></br>
                <Link to={"add"}><img src={addTripImg} alt='Add Trip'></img></Link><br></br><br></br>
                <Link to={"/list"}><img src={tripListImg} alt='List Trip'></img></Link>
            </div>
            <div className='Form'>
                <div id='heading'>Add a trip</div>
                <div>
                    <form>
                        <label>Date:</label><br></br>
                        <input className='Input' type='date' placeholder='dd-mm-yyyy' name='date' value={data.date} onChange={updateData}></input><br></br>
                        <label>Place:</label><br></br>
                        <input className='Input' type='text' autoComplete='off' name='place' value={data.place} onChange={updateData}></input><br></br>
                        <label>Type:</label><br></br>
                        <select name='type' onChange={updateData}>
                            <option></option>
                            <option value='Trek'>Trek</option>
                            <option value='Tropic'>Tropic</option>
                            <option value='Club'>Club</option>
                        </select>
                        <br></br>
                        <div id='Submit'><button id='submit-btn' onClick={updateList}>Submit</button></div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export {Add, trips, trip_cnt};