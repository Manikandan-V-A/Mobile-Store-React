import React from 'react';
import './UsedMobile.css'
import { useNavigate } from 'react-router-dom';
import Swal from "sweetalert2";

import DemoMobile1 from './assets/demo/demoph1-1.jpg'
import DemoMobile2 from './assets/demo/demoph1-2.jpg'
import DemoMobile3 from './assets/demo/demoph1-3.jpg'
import DemoMobile4 from './assets/demo/demoph1-4.jpg'
import DemoMobile5 from './assets/demo/demoph2-1.jpg'
import DemoMobile6 from './assets/demo/demoph2-2.jpg'
import DemoMobile7 from './assets/demo/demoph2-3.jpg'
import DemoMobile8 from './assets/demo/demoph2-4.jpg'
import DemoMobile9 from './assets/demo/demoph3-1.jpg'
import DemoMobile10 from './assets/demo/demoph3-2.jpg'
import DemoMobile11 from './assets/demo/demoph3-3.jpg'
import DemoMobile12 from './assets/demo/demoph3-4.jpg'
import DemoMobile13 from './assets/demo/demoph4-1.jpg'
import DemoMobile14 from './assets/demo/demoph4-2.jpg'
import DemoMobile15 from './assets/demo/demoph4-3.jpg'
import DemoMobile16 from './assets/demo/demoph4-4.jpg'
import DemoMobile17 from './assets/demo/demoph5-1.jpg'
import DemoMobile18 from './assets/demo/demoph5-2.jpg'
import DemoMobile19 from './assets/demo/demoph5-3.jpg'
import DemoMobile20 from './assets/demo/demoph5-4.jpg'
import DemoMobile21 from './assets/demo/demoph6-1.jpg'
import DemoMobile22 from './assets/demo/demoph6-2.jpg'
import DemoMobile23 from './assets/demo/demoph6-3.jpg'
import DemoMobile24 from './assets/demo/demoph6-4.jpg'
import DemoMobile25 from './assets/demo/demoph7-1.jpg'
import DemoMobile26 from './assets/demo/demoph7-2.jpg'
import DemoMobile27 from './assets/demo/demoph7-3.jpg'
import DemoMobile28 from './assets/demo/demoph7-4.jpg'
import DemoMobile29 from './assets/demo/demoph8-1.jpg'
import DemoMobile30 from './assets/demo/demoph8-2.jpg'
import DemoMobile31 from './assets/demo/demoph8-3.jpg'
import DemoMobile32 from './assets/demo/demoph8-4.jpg'
import DemoMobile33 from './assets/demo/demoph9-1.jpg'
import DemoMobile34 from './assets/demo/demoph9-2.jpg'
import DemoMobile35 from './assets/demo/demoph9-3.jpg'
import DemoMobile36 from './assets/demo/demoph9-4.jpg'
import DemoMobile37 from './assets/demo/demoph10-1.jpg'
import DemoMobile38 from './assets/demo/demoph10-2.jpg'
import DemoMobile39 from './assets/demo/demoph10-3.jpg'
import DemoMobile40 from './assets/demo/demoph10-4.jpg'
import DemoMobile41 from './assets/demo/demoph11-1.jpg'
import DemoMobile42 from './assets/demo/demoph11-2.jpg'
import DemoMobile43 from './assets/demo/demoph11-3.jpg'
import DemoMobile44 from './assets/demo/demoph11-4.jpg'
import DemoMobile45 from './assets/demo/demoph12-1.jpg'
import DemoMobile46 from './assets/demo/demoph12-2.jpg'
import DemoMobile47 from './assets/demo/demoph12-3.jpg'
import DemoMobile48 from './assets/demo/demoph12-5.jpg'

export function DemoMobile() {

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
        {id: 'DemoMobile1', pname: ' Phone 620', price: '₹65,999', del: '₹5,999', offer: '60% off', hour: '60 Hours Playback', color1: 'red', color2: 'black', color3: 'lightblue', colormore: '+5',  image1: DemoMobile1 },
        {id: 'DemoMobile2', pname: ' Phone 520', price: '₹65,999', del: '₹2,999', offer: '27% off', hour: '30 Hours Playback', color1: 'grey', color2: 'white', color3: 'black', colormore: '+4',     image1: DemoMobile2 },
        {id: 'DemoMobile3', pname: ' Phone 420', price: '₹65,999', del: '₹2,999', offer: '45% off', hour: '12 Hours Playback', color1: 'yellow', color2: 'white', color3: 'black', colormore: '+3',   image1: DemoMobile3 },
        {id: 'DemoMobile4', pname: ' Phone 320', price: '₹65,999', del: '₹2,999', offer: '68% off', hour: '27 Hours Playback', color1: 'black', color2: 'lightblue', color3: 'red', colormore: '+5',  image1: DemoMobile4 },
        {id: 'DemoMobile5', pname: ' Phone 620', price: '₹65,999', del: '₹5,999', offer: '60% off', hour: '60 Hours Playback', color1: 'red', color2: 'black', color3: 'lightblue', colormore: '+5',  image1: DemoMobile5 },
        {id: 'DemoMobile6', pname: ' Phone 520', price: '₹65,999', del: '₹2,999', offer: '27% off', hour: '30 Hours Playback', color1: 'grey', color2: 'white', color3: 'black', colormore: '+4',     image1: DemoMobile6 },
        {id: 'DemoMobile7', pname: ' Phone 420', price: '₹65,999', del: '₹2,999', offer: '45% off', hour: '12 Hours Playback', color1: 'yellow', color2: 'white', color3: 'black', colormore: '+3',   image1: DemoMobile7 },
        {id: 'DemoMobile8', pname: ' Phone 320', price: '₹65,999', del: '₹2,999', offer: '68% off', hour: '27 Hours Playback', color1: 'black', color2: 'lightblue', color3: 'red', colormore: '+5',  image1: DemoMobile8 },
        {id: 'DemoMobile9', pname: ' Phone 620', price: '₹65,999', del: '₹5,999', offer: '60% off', hour: '60 Hours Playback', color1: 'red', color2: 'black', color3: 'lightblue', colormore: '+5',  image1: DemoMobile9 },
        {id: 'DemoMobile10', pname: 'Phone 520', price: '₹65,999', del: '₹2,999', offer: '27% off', hour: '30 Hours Playback', color1: 'grey', color2: 'white', color3: 'black', colormore: '+4',    image1: DemoMobile10 },
        {id: 'DemoMobile11', pname: 'Phone 420', price: '₹65,999', del: '₹2,999', offer: '45% off', hour: '12 Hours Playback', color1: 'yellow', color2: 'white', color3: 'black', colormore: '+3',  image1: DemoMobile11 },
        {id: 'DemoMobile12', pname: 'Phone 320', price: '₹65,999', del: '₹2,999', offer: '68% off', hour: '27 Hours Playback', color1: 'black', color2: 'lightblue', color3: 'red', colormore: '+5', image1: DemoMobile12 },
        {id: 'DemoMobile13', pname: 'Phone 620', price: '₹65,999', del: '₹5,999', offer: '60% off', hour: '60 Hours Playback', color1: 'red', color2: 'black', color3: 'lightblue', colormore: '+5', image1: DemoMobile13 },
        {id: 'DemoMobile14', pname: 'Phone 520', price: '₹65,999', del: '₹2,999', offer: '27% off', hour: '30 Hours Playback', color1: 'grey', color2: 'white', color3: 'black', colormore: '+4',    image1: DemoMobile14 },
        {id: 'DemoMobile15', pname: 'Phone 420', price: '₹65,999', del: '₹2,999', offer: '45% off', hour: '12 Hours Playback', color1: 'yellow', color2: 'white', color3: 'black', colormore: '+3',  image1: DemoMobile15 },
        {id: 'DemoMobile16', pname: 'Phone 320', price: '₹65,999', del: '₹2,999', offer: '68% off', hour: '27 Hours Playback', color1: 'black', color2: 'lightblue', color3: 'red', colormore: '+5', image1: DemoMobile16 },
        {id: 'DemoMobile17', pname: 'Phone 620', price: '₹65,999', del: '₹5,999', offer: '60% off', hour: '60 Hours Playback', color1: 'red', color2: 'black', color3: 'lightblue', colormore: '+5', image1: DemoMobile17 },
        {id: 'DemoMobile18', pname: 'Phone 520', price: '₹65,999', del: '₹2,999', offer: '27% off', hour: '30 Hours Playback', color1: 'grey', color2: 'white', color3: 'black', colormore: '+4',    image1: DemoMobile18 },
        {id: 'DemoMobile19', pname: 'Phone 420', price: '₹65,999', del: '₹2,999', offer: '45% off', hour: '12 Hours Playback', color1: 'yellow', color2: 'white', color3: 'black', colormore: '+3',  image1: DemoMobile19 },
        {id: 'DemoMobile20', pname: 'Phone 320', price: '₹65,999', del: '₹2,999', offer: '68% off', hour: '27 Hours Playback', color1: 'black', color2: 'lightblue', color3: 'red', colormore: '+5', image1: DemoMobile20 },
        {id: 'DemoMobile21', pname: 'Phone 620', price: '₹65,999', del: '₹5,999', offer: '60% off', hour: '60 Hours Playback', color1: 'red', color2: 'black', color3: 'lightblue', colormore: '+5', image1: DemoMobile21 },
        {id: 'DemoMobile22', pname: 'Phone 520', price: '₹65,999', del: '₹2,999', offer: '27% off', hour: '30 Hours Playback', color1: 'grey', color2: 'white', color3: 'black', colormore: '+4',    image1: DemoMobile22 },
        {id: 'DemoMobile23', pname: 'Phone 420', price: '₹65,999', del: '₹2,999', offer: '45% off', hour: '12 Hours Playback', color1: 'yellow', color2: 'white', color3: 'black', colormore: '+3',  image1: DemoMobile23 },
        {id: 'DemoMobile24', pname: 'Phone 320', price: '₹65,999', del: '₹2,999', offer: '68% off', hour: '27 Hours Playback', color1: 'black', color2: 'lightblue', color3: 'red', colormore: '+5', image1: DemoMobile24 },
        {id: 'DemoMobile25', pname: 'Phone 620', price: '₹65,999', del: '₹5,999', offer: '60% off', hour: '60 Hours Playback', color1: 'red', color2: 'black', color3: 'lightblue', colormore: '+5', image1: DemoMobile25 },
        {id: 'DemoMobile26', pname: 'Phone 520', price: '₹65,999', del: '₹2,999', offer: '27% off', hour: '30 Hours Playback', color1: 'grey', color2: 'white', color3: 'black', colormore: '+4',    image1: DemoMobile26 },
        {id: 'DemoMobile27', pname: 'Phone 420', price: '₹65,999', del: '₹2,999', offer: '45% off', hour: '12 Hours Playback', color1: 'yellow', color2: 'white', color3: 'black', colormore: '+3',  image1: DemoMobile27 },
        {id: 'DemoMobile28', pname: 'Phone 320', price: '₹65,999', del: '₹2,999', offer: '68% off', hour: '27 Hours Playback', color1: 'black', color2: 'lightblue', color3: 'red', colormore: '+5', image1: DemoMobile28 },
        {id: 'DemoMobile29', pname: 'Phone 620', price: '₹65,999', del: '₹5,999', offer: '60% off', hour: '60 Hours Playback', color1: 'red', color2: 'black', color3: 'lightblue', colormore: '+5', image1: DemoMobile29 },
        {id: 'DemoMobile30', pname: 'Phone 520', price: '₹65,999', del: '₹2,999', offer: '27% off', hour: '30 Hours Playback', color1: 'grey', color2: 'white', color3: 'black', colormore: '+4',    image1: DemoMobile30 },
        {id: 'DemoMobile31', pname: 'Phone 420', price: '₹65,999', del: '₹2,999', offer: '45% off', hour: '12 Hours Playback', color1: 'yellow', color2: 'white', color3: 'black', colormore: '+3',  image1: DemoMobile31 },
        {id: 'DemoMobile32', pname: 'Phone 320', price: '₹65,999', del: '₹2,999', offer: '68% off', hour: '27 Hours Playback', color1: 'black', color2: 'lightblue', color3: 'red', colormore: '+5', image1: DemoMobile32 },
        {id: 'DemoMobile33', pname: 'Phone 620', price: '₹65,999', del: '₹5,999', offer: '60% off', hour: '60 Hours Playback', color1: 'red', color2: 'black', color3: 'lightblue', colormore: '+5', image1: DemoMobile33 },
        {id: 'DemoMobile34', pname: 'Phone 520', price: '₹65,999', del: '₹2,999', offer: '27% off', hour: '30 Hours Playback', color1: 'grey', color2: 'white', color3: 'black', colormore: '+4',    image1: DemoMobile34 },
        {id: 'DemoMobile35', pname: 'Phone 420', price: '₹65,999', del: '₹2,999', offer: '45% off', hour: '12 Hours Playback', color1: 'yellow', color2: 'white', color3: 'black', colormore: '+3',  image1: DemoMobile35 },
        {id: 'DemoMobile36', pname: 'Phone 320', price: '₹65,999', del: '₹2,999', offer: '68% off', hour: '27 Hours Playback', color1: 'black', color2: 'lightblue', color3: 'red', colormore: '+5', image1: DemoMobile36 },
        {id: 'DemoMobile37', pname: 'Phone 620', price: '₹65,999', del: '₹5,999', offer: '60% off', hour: '60 Hours Playback', color1: 'red', color2: 'black', color3: 'lightblue', colormore: '+5', image1: DemoMobile37 },
        {id: 'DemoMobile38', pname: 'Phone 520', price: '₹65,999', del: '₹2,999', offer: '27% off', hour: '30 Hours Playback', color1: 'grey', color2: 'white', color3: 'black', colormore: '+4',    image1: DemoMobile38 },
        {id: 'DemoMobile39', pname: 'Phone 420', price: '₹65,999', del: '₹2,999', offer: '45% off', hour: '12 Hours Playback', color1: 'yellow', color2: 'white', color3: 'black', colormore: '+3',  image1: DemoMobile39 },
        {id: 'DemoMobile40', pname: 'Phone 320', price: '₹65,999', del: '₹2,999', offer: '68% off', hour: '27 Hours Playback', color1: 'black', color2: 'lightblue', color3: 'red', colormore: '+5', image1: DemoMobile40 },
        {id: 'DemoMobile41', pname: 'Phone 620', price: '₹65,999', del: '₹5,999', offer: '60% off', hour: '60 Hours Playback', color1: 'red', color2: 'black', color3: 'lightblue', colormore: '+5', image1: DemoMobile41 },
        {id: 'DemoMobile42', pname: 'Phone 520', price: '₹65,999', del: '₹2,999', offer: '27% off', hour: '30 Hours Playback', color1: 'grey', color2: 'white', color3: 'black', colormore: '+4',    image1: DemoMobile42 },
        {id: 'DemoMobile43', pname: 'Phone 420', price: '₹65,999', del: '₹2,999', offer: '45% off', hour: '12 Hours Playback', color1: 'yellow', color2: 'white', color3: 'black', colormore: '+3',  image1: DemoMobile43 },
        {id: 'DemoMobile44', pname: 'Phone 320', price: '₹65,999', del: '₹2,999', offer: '68% off', hour: '27 Hours Playback', color1: 'black', color2: 'lightblue', color3: 'red', colormore: '+5', image1: DemoMobile44 },
        {id: 'DemoMobile45', pname: 'Phone 620', price: '₹65,999', del: '₹5,999', offer: '60% off', hour: '60 Hours Playback', color1: 'red', color2: 'black', color3: 'lightblue', colormore: '+5', image1: DemoMobile45 },
        {id: 'DemoMobile46', pname: 'Phone 520', price: '₹65,999', del: '₹2,999', offer: '27% off', hour: '30 Hours Playback', color1: 'grey', color2: 'white', color3: 'black', colormore: '+4',    image1: DemoMobile46 },
        {id: 'DemoMobile47', pname: 'Phone 420', price: '₹65,999', del: '₹2,999', offer: '45% off', hour: '12 Hours Playback', color1: 'yellow', color2: 'white', color3: 'black', colormore: '+3',  image1: DemoMobile47 },
        {id: 'DemoMobile48', pname: 'Phone 320', price: '₹65,999', del: '₹2,999', offer: '68% off', hour: '27 Hours Playback', color1: 'black', color2: 'lightblue', color3: 'red', colormore: '+5', image1: DemoMobile48 },

    ]

    return (
        <>
            <div className="Used-Mobile-container-Card">
                <h2>Demo Mobile — <span>Limited </span><span className='rs'>Stock</span> </h2>
                <div className="Used-Mobile-container-Card1">
                    <div className='Used-Mobile-main-box'>
                        {
                            cards.map((data) => {
                                return (
                                    <>
                                        <div className='Used-Mobile-card-box'>
                                        <div key={data.id} onClick={() => handleCardClick(data.id)} className="Used-Mobile-card-img">
                                                <img src={data.image1} />
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