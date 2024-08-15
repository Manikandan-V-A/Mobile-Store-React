import React from 'react';
import './UsedMobile.css'
import { useNavigate } from 'react-router-dom';
import Swal from "sweetalert2";

import UsedMobile1 from './assets/used/usedph1-1.jpg'
import UsedMobile2 from './assets/used/usedph1-2.jpg'
import UsedMobile3 from './assets/used/usedph1-3.jpg'
import UsedMobile4 from './assets/used/usedph1-4.jpg'

import UsedMobile5 from './assets/used/usedph2-1.jpg'
import UsedMobile6 from './assets/used/usedph2-2.jpg'
import UsedMobile7 from './assets/used/usedph2-3.jpg'
import UsedMobile8 from './assets/used/usedph2-4.jpg'

import UsedMobile9 from './assets/used/usedph3-1.jpg'
import UsedMobile10 from './assets/used/usedph3-2.jpg'
import UsedMobile11 from './assets/used/usedph3-3.jpg'
import UsedMobile12 from './assets/used/usedph3-4.jpg'

import UsedMobile13 from './assets/used/usedph4-1.jpg'
import UsedMobile14 from './assets/used/usedph4-2.jpg'
import UsedMobile15 from './assets/used/usedph4-3.jpg'
import UsedMobile16 from './assets/used/usedph4-4.jpg'

import UsedMobile17 from './assets/used/usedph5-1.jpg'
import UsedMobile18 from './assets/used/usedph5-2.jpg'
import UsedMobile19 from './assets/used/usedph5-3.jpg'
import UsedMobile20 from './assets/used/usedph5-4.jpg'

import UsedMobile21 from './assets/used/usedph6-1.jpg'
import UsedMobile22 from './assets/used/usedph6-2.jpg'
import UsedMobile23 from './assets/used/usedph6-3.jpg'
import UsedMobile24 from './assets/used/usedph6-4.jpg'

import UsedMobile25 from './assets/used/usedph7-1.jpg'
import UsedMobile26 from './assets/used/usedph7-2.jpg'
import UsedMobile27 from './assets/used/usedph7-3.jpg'
import UsedMobile28 from './assets/used/usedph7-4.jpg'

import UsedMobile29 from './assets/used/usedph8-1.jpg'
import UsedMobile30 from './assets/used/usedph8-2.jpg'
import UsedMobile31 from './assets/used/usedph8-3.jpg'
import UsedMobile32 from './assets/used/usedph8-4.jpg'

import UsedMobile33 from './assets/used/usedph9-1.jpg'
import UsedMobile34 from './assets/used/usedph9-2.jpg'
import UsedMobile35 from './assets/used/usedph9-3.jpg'
import UsedMobile36 from './assets/used/usedph9-4.jpg'

import UsedMobile37 from './assets/used/usedph10-1.jpg'
import UsedMobile38 from './assets/used/usedph10-2.jpg'
import UsedMobile39 from './assets/used/usedph10-3.jpg'
import UsedMobile40 from './assets/used/usedph10-4.jpg'

import UsedMobile41 from './assets/used/usedph11-1.jpg'
import UsedMobile42 from './assets/used/usedph11-2.jpg'
import UsedMobile43 from './assets/used/usedph11-3.jpg'
import UsedMobile44 from './assets/used/usedph11-4.jpg'

import UsedMobile45 from './assets/used/usedph12-1.jpg'
import UsedMobile46 from './assets/used/usedph12-2.jpg'
import UsedMobile47 from './assets/used/usedph12-3.jpg'
import UsedMobile48 from './assets/used/usedph12-4.jpg'



export function UsedMobile() {

    const navigate = useNavigate();
    const handleCardClick = (id) => {
      navigate(`/detailwatch/${id}`);
    };

    const Cartbtn =()=>{
        const Toast = Swal.mixin({
            toast: true,
            position: "top-end",
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.onmouseenter = Swal.stopTimer;
              toast.onmouseleave = Swal.resumeTimer;
            }
          });
          Toast.fire({
            icon: "success",
            title: "Add to Cart successfully"
          });
        }

    const cards = [
        {id: 'UsedMobile1', pname: ' Phone 620', price: '₹1,999', del: '₹5,999', offer: '60% off', hour: '60 Hours Playback', color1: 'red', color2: 'black', color3: 'lightblue', colormore: '+5', image1: UsedMobile1 },
        {id: 'UsedMobile2', pname: ' Phone 520', price: '₹1,999', del: '₹2,999', offer: '27% off', hour: '30 Hours Playback', color1: 'grey', color2: 'white', color3: 'black', colormore: '+4',    image1: UsedMobile2 },
        {id: 'UsedMobile3', pname: ' Phone 420', price: '₹1,999', del: '₹2,999', offer: '45% off', hour: '12 Hours Playback', color1: 'yellow', color2: 'white', color3: 'black', colormore: '+3',  image1: UsedMobile3 },
        {id: 'UsedMobile4', pname: ' Phone 320', price: '₹1,999', del: '₹2,999', offer: '68% off', hour: '27 Hours Playback', color1: 'black', color2: 'lightblue', color3: 'red', colormore: '+5', image1: UsedMobile4 },
        {id: 'UsedMobile5', pname: ' Phone 620', price: '₹1,999', del: '₹5,999', offer: '60% off', hour: '60 Hours Playback', color1: 'red', color2: 'black', color3: 'lightblue', colormore: '+5', image1: UsedMobile5 },
        {id: 'UsedMobile6', pname: ' Phone 520', price: '₹1,999', del: '₹2,999', offer: '27% off', hour: '30 Hours Playback', color1: 'grey', color2: 'white', color3: 'black', colormore: '+4',    image1: UsedMobile6 },
        {id: 'UsedMobile7', pname: ' Phone 420', price: '₹1,999', del: '₹2,999', offer: '45% off', hour: '12 Hours Playback', color1: 'yellow', color2: 'white', color3: 'black', colormore: '+3',  image1: UsedMobile7 },
        {id: 'UsedMobile8', pname: ' Phone 320', price: '₹1,999', del: '₹2,999', offer: '68% off', hour: '27 Hours Playback', color1: 'black', color2: 'lightblue', color3: 'red', colormore: '+5', image1: UsedMobile8 },
        {id: 'UsedMobile9', pname: ' Phone 620', price: '₹1,999', del: '₹5,999', offer: '60% off', hour: '60 Hours Playback', color1: 'red', color2: 'black', color3: 'lightblue', colormore: '+5', image1: UsedMobile9 },
        {id: 'UsedMobile10', pname: 'Phone 520', price: '₹1,999', del: '₹2,999', offer: '27% off', hour: '30 Hours Playback', color1: 'grey', color2: 'white', color3: 'black', colormore: '+4',    image1: UsedMobile10 },
        {id: 'UsedMobile11', pname: 'Phone 420', price: '₹1,999', del: '₹2,999', offer: '45% off', hour: '12 Hours Playback', color1: 'yellow', color2: 'white', color3: 'black', colormore: '+3',  image1: UsedMobile11 },
        {id: 'UsedMobile12', pname: 'Phone 320', price: '₹1,999', del: '₹2,999', offer: '68% off', hour: '27 Hours Playback', color1: 'black', color2: 'lightblue', color3: 'red', colormore: '+5', image1: UsedMobile12 },
        {id: 'UsedMobile13', pname: 'Phone 620', price: '₹1,999', del: '₹5,999', offer: '60% off', hour: '60 Hours Playback', color1: 'red', color2: 'black', color3: 'lightblue', colormore: '+5', image1: UsedMobile13 },
        {id: 'UsedMobile14', pname: 'Phone 520', price: '₹1,999', del: '₹2,999', offer: '27% off', hour: '30 Hours Playback', color1: 'grey', color2: 'white', color3: 'black', colormore: '+4',    image1: UsedMobile14 },
        {id: 'UsedMobile15', pname: 'Phone 420', price: '₹1,999', del: '₹2,999', offer: '45% off', hour: '12 Hours Playback', color1: 'yellow', color2: 'white', color3: 'black', colormore: '+3',  image1: UsedMobile15 },
        {id: 'UsedMobile16', pname: 'Phone 320', price: '₹1,999', del: '₹2,999', offer: '68% off', hour: '27 Hours Playback', color1: 'black', color2: 'lightblue', color3: 'red', colormore: '+5', image1: UsedMobile16 },
        {id: 'UsedMobile17', pname: 'Phone 620', price: '₹1,999', del: '₹5,999', offer: '60% off', hour: '60 Hours Playback', color1: 'red', color2: 'black', color3: 'lightblue', colormore: '+5', image1: UsedMobile17 },
        {id: 'UsedMobile18', pname: 'Phone 520', price: '₹1,999', del: '₹2,999', offer: '27% off', hour: '30 Hours Playback', color1: 'grey', color2: 'white', color3: 'black', colormore: '+4',    image1: UsedMobile18 },
        {id: 'UsedMobile19', pname: 'Phone 420', price: '₹1,999', del: '₹2,999', offer: '45% off', hour: '12 Hours Playback', color1: 'yellow', color2: 'white', color3: 'black', colormore: '+3',  image1: UsedMobile19 },
        {id: 'UsedMobile20', pname: 'Phone 320', price: '₹1,999', del: '₹2,999', offer: '68% off', hour: '27 Hours Playback', color1: 'black', color2: 'lightblue', color3: 'red', colormore: '+5', image1: UsedMobile20 },
        {id: 'UsedMobile21', pname: 'Phone 620', price: '₹1,999', del: '₹5,999', offer: '60% off', hour: '60 Hours Playback', color1: 'red', color2: 'black', color3: 'lightblue', colormore: '+5', image1: UsedMobile21 },
        {id: 'UsedMobile22', pname: 'Phone 520', price: '₹1,999', del: '₹2,999', offer: '27% off', hour: '30 Hours Playback', color1: 'grey', color2: 'white', color3: 'black', colormore: '+4',    image1: UsedMobile22 },
        {id: 'UsedMobile23', pname: 'Phone 420', price: '₹1,999', del: '₹2,999', offer: '45% off', hour: '12 Hours Playback', color1: 'yellow', color2: 'white', color3: 'black', colormore: '+3',  image1: UsedMobile23 },
        {id: 'UsedMobile24', pname: 'Phone 320', price: '₹1,999', del: '₹2,999', offer: '68% off', hour: '27 Hours Playback', color1: 'black', color2: 'lightblue', color3: 'red', colormore: '+5', image1: UsedMobile24 },
        {id: 'UsedMobile25', pname: 'Phone 620', price: '₹1,999', del: '₹5,999', offer: '60% off', hour: '60 Hours Playback', color1: 'red', color2: 'black', color3: 'lightblue', colormore: '+5', image1: UsedMobile25 },
        {id: 'UsedMobile26', pname: 'Phone 520', price: '₹1,999', del: '₹2,999', offer: '27% off', hour: '30 Hours Playback', color1: 'grey', color2: 'white', color3: 'black', colormore: '+4',    image1: UsedMobile26 },
        {id: 'UsedMobile27', pname: 'Phone 420', price: '₹1,999', del: '₹2,999', offer: '45% off', hour: '12 Hours Playback', color1: 'yellow', color2: 'white', color3: 'black', colormore: '+3',  image1: UsedMobile27 },
        {id: 'UsedMobile28', pname: 'Phone 320', price: '₹1,999', del: '₹2,999', offer: '68% off', hour: '27 Hours Playback', color1: 'black', color2: 'lightblue', color3: 'red', colormore: '+5', image1: UsedMobile28 },
        {id: 'UsedMobile29', pname: 'Phone 620', price: '₹1,999', del: '₹5,999', offer: '60% off', hour: '60 Hours Playback', color1: 'red', color2: 'black', color3: 'lightblue', colormore: '+5', image1: UsedMobile29 },
        {id: 'UsedMobile30', pname: 'Phone 520', price: '₹1,999', del: '₹2,999', offer: '27% off', hour: '30 Hours Playback', color1: 'grey', color2: 'white', color3: 'black', colormore: '+4',    image1: UsedMobile30 },
        {id: 'UsedMobile31', pname: 'Phone 420', price: '₹1,999', del: '₹2,999', offer: '45% off', hour: '12 Hours Playback', color1: 'yellow', color2: 'white', color3: 'black', colormore: '+3',  image1: UsedMobile31 },
        {id: 'UsedMobile32', pname: 'Phone 320', price: '₹1,999', del: '₹2,999', offer: '68% off', hour: '27 Hours Playback', color1: 'black', color2: 'lightblue', color3: 'red', colormore: '+5', image1: UsedMobile32 },
        {id: 'UsedMobile33', pname: 'Phone 620', price: '₹1,999', del: '₹5,999', offer: '60% off', hour: '60 Hours Playback', color1: 'red', color2: 'black', color3: 'lightblue', colormore: '+5', image1: UsedMobile33 },
        {id: 'UsedMobile34', pname: 'Phone 520', price: '₹1,999', del: '₹2,999', offer: '27% off', hour: '30 Hours Playback', color1: 'grey', color2: 'white', color3: 'black', colormore: '+4',    image1: UsedMobile34 },
        {id: 'UsedMobile35', pname: 'Phone 420', price: '₹1,999', del: '₹2,999', offer: '45% off', hour: '12 Hours Playback', color1: 'yellow', color2: 'white', color3: 'black', colormore: '+3',  image1: UsedMobile35 },
        {id: 'UsedMobile36', pname: 'Phone 320', price: '₹1,999', del: '₹2,999', offer: '68% off', hour: '27 Hours Playback', color1: 'black', color2: 'lightblue', color3: 'red', colormore: '+5', image1: UsedMobile36 },
        {id: 'UsedMobile37', pname: 'Phone 620', price: '₹1,999', del: '₹5,999', offer: '60% off', hour: '60 Hours Playback', color1: 'red', color2: 'black', color3: 'lightblue', colormore: '+5', image1: UsedMobile37 },
        {id: 'UsedMobile38', pname: 'Phone 520', price: '₹1,999', del: '₹2,999', offer: '27% off', hour: '30 Hours Playback', color1: 'grey', color2: 'white', color3: 'black', colormore: '+4',    image1: UsedMobile38 },
        {id: 'UsedMobile39', pname: 'Phone 420', price: '₹1,999', del: '₹2,999', offer: '45% off', hour: '12 Hours Playback', color1: 'yellow', color2: 'white', color3: 'black', colormore: '+3',  image1: UsedMobile39 },
        {id: 'UsedMobile40', pname: 'Phone 320', price: '₹1,999', del: '₹2,999', offer: '68% off', hour: '27 Hours Playback', color1: 'black', color2: 'lightblue', color3: 'red', colormore: '+5', image1: UsedMobile40 },
        {id: 'UsedMobile41', pname: 'Phone 620', price: '₹1,999', del: '₹5,999', offer: '60% off', hour: '60 Hours Playback', color1: 'red', color2: 'black', color3: 'lightblue', colormore: '+5', image1: UsedMobile41 },
        {id: 'UsedMobile42', pname: 'Phone 520', price: '₹1,999', del: '₹2,999', offer: '27% off', hour: '30 Hours Playback', color1: 'grey', color2: 'white', color3: 'black', colormore: '+4',    image1: UsedMobile42 },
        {id: 'UsedMobile43', pname: 'Phone 420', price: '₹1,999', del: '₹2,999', offer: '45% off', hour: '12 Hours Playback', color1: 'yellow', color2: 'white', color3: 'black', colormore: '+3',  image1: UsedMobile43 },
        {id: 'UsedMobile44', pname: 'Phone 320', price: '₹1,999', del: '₹2,999', offer: '68% off', hour: '27 Hours Playback', color1: 'black', color2: 'lightblue', color3: 'red', colormore: '+5', image1: UsedMobile44 },
        {id: 'UsedMobile45', pname: 'Phone 620', price: '₹1,999', del: '₹5,999', offer: '60% off', hour: '60 Hours Playback', color1: 'red', color2: 'black', color3: 'lightblue', colormore: '+5', image1: UsedMobile45 },
        {id: 'UsedMobile46', pname: 'Phone 520', price: '₹1,999', del: '₹2,999', offer: '27% off', hour: '30 Hours Playback', color1: 'grey', color2: 'white', color3: 'black', colormore: '+4',    image1: UsedMobile46 },
        {id: 'UsedMobile47', pname: 'Phone 420', price: '₹1,999', del: '₹2,999', offer: '45% off', hour: '12 Hours Playback', color1: 'yellow', color2: 'white', color3: 'black', colormore: '+3',  image1: UsedMobile47 },
        {id: 'UsedMobile48', pname: 'Phone 320', price: '₹1,999', del: '₹2,999', offer: '68% off', hour: '27 Hours Playback', color1: 'black', color2: 'lightblue', color3: 'red', colormore: '+5', image1: UsedMobile48 },

    ]

    return (
        <>
            <div className="Used-Mobile-container-Card">
                <h2>Used Mobile — <span>Limited </span><span className='rs'>Stock</span> </h2>
                <div className="Used-Mobile-container-Card1">
                    <div className='Used-Mobile-main-box'>
                        {
                            cards.map((data) => {
                                return (
                                    <>
                                        <div className='Used-Mobile-card-box'>
                                        <div key={data.id} onClick={() => handleCardClick(data.id)} className="Used-Mobile-card-img">
                                                <img src={data.image1}/>
                                            </div>
                                            <div className="Used-Mobile-yellow-box-main">
                                                <div className="Used-Mobile-yellow-box">
                                                    <div className="Used-Mobile-yellow-box-words">
                                                        <p>{data.hour}</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='Used-Mobile-product-name'>
                                                <div>
                                                    <h6>{data.pname}</h6>
                                                </div>
                                                <div className="Used-Mobile-color-more">
                                                    <i style={{ color: data.color1 }} className="fa-solid iconcolor1 fa-circle"></i>
                                                    <i style={{ color: data.color2 }} className="fa-solid iconcolor2 fa-circle"></i>
                                                    <i style={{ color: data.color3 }} className="fa-solid iconcolor3 fa-circle"></i> {data.colormore}
                                                </div>
                                            </div>
                                            <div className='Used-Mobile-product-price'>
                                                <h5>{data.price} <del>{data.del}</del> <span>{data.offer}</span> </h5>
                                            </div>
                                            <div className="Used-Mobile-cart-btn">
                                                <button onClick={Cartbtn}><a href="#">Add To Cart </a></button>
                                            </div>
                                        </div>
                                    </>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </>
    )
}