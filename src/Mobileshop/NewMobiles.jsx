import React from "react";
import './NewMobile.css'

import NewBrand1 from './assets/NewBrands1.webp'
import NewBrand2 from './assets/NewBrands2.png'
import NewBrand3 from './assets/NewBrands3.png'
import NewBrand4 from './assets/NewBrands4.png'
import NewBrand5 from './assets/NewBrands5.png'
import NewBrand6 from './assets/NewBrands6.png'
import NewBrand7 from './assets/NewBrands7.png'
import NewBrand8 from './assets/NewBrands8.png'
import NewBrand9 from './assets/NewBrands9.png'

import NewApple1 from './assets/NewApple1.webp'
import NewApple2 from './assets/NewApple2.webp'
import NewApple3 from './assets/NewApple3.webp'
import NewApple4 from './assets/NewApple4.webp'
 
import NewSamsung1 from './assets/NewSamsung1.webp'
import NewSamsung2 from './assets/NewSamsung2.webp'
import NewSamsung3 from './assets/NewSamsung3.webp'
import NewSamsung4 from './assets/NewSamsung4.webp'

import NewIqoo1 from './assets/NewIqoo1.webp'
import NewIqoo2 from './assets/NewIqoo2.webp'
import NewIqoo3 from './assets/NewIqoo3.webp'
import NewIqoo4 from './assets/NewIqoo4.jpg'

import NewOneplus1 from './assets/NewOneplus1.webp'
import NewOneplus2 from './assets/NewOneplus2.webp'
import NewOneplus3 from './assets/NewOneplus3.webp'
import NewOneplus4 from './assets/NewOneplus4.jpg'
 
import NewVivo1 from './assets/NewVivo1.webp'
import NewVivo2 from './assets/NewVivo2.webp'
import NewVivo3 from './assets/NewVivo3.webp'
import NewVivo4 from './assets/NewVivo4.webp'
 
import NewRedmi1 from './assets/NewRedmi1.webp'
import NewRedmi2 from './assets/NewRedmi2.webp'
import NewRedmi3 from './assets/NewRedmi3.webp'
import NewRedmi4 from './assets/NewRedmi4.webp'
 
import NewRealme1 from './assets/NewRealme1.webp'
import NewRealme2 from './assets/NewRealme2.webp'
import NewRealme3 from './assets/NewRealme3.webp'
import NewRealme4 from './assets/NewRealme4.webp'
 
import NewAsus1 from './assets/NewAsus1.jpg'
import NewAsus2 from './assets/NewAsus2.png'
import NewAsus3 from './assets/NewAsus3.webp'
import NewAsus4 from './assets/NewAsus4.png'
 
import NewHuawei1 from './assets/NewHuawei1.jpg'
import NewHuawei2 from './assets/NewHuawei2.jpg'
import NewHuawei3 from './assets/NewHuawei3.webp'
import NewHuawei4 from './assets/NewHuawei4.jpg'
 

import Product1 from './assets/Mobile-logo1.png'
import Product2 from './assets/Mobile-logo2.png'
import Product3 from './assets/Mobile-logo3.png'
import Product4 from './assets/Mobile-logo4.png'    
import Product5 from './assets/Mobile-logo5.png'
import Product6 from './assets/Mobile-logo6.png'
import Product7 from './assets/Mobile-logo7.png'
import Product8 from './assets/Mobile-logo8.png'
import Product9 from './assets/Mobile-logo9.png'

import { FaArrowUp } from "react-icons/fa"; 

import { useNavigate } from "react-router-dom";

const cards1 = [
    { id: 'NewApple1', pname: 'Stone 620', price: '₹1,999', del: '₹5,999', offer: '60% off', hour: '60 Hours Playback', color1: 'red', color2: 'black', color3: 'lightblue', colormore: '+5', image1: NewApple1 },
    { id: 'NewApple2', pname: 'Stone 520', price: '₹1,999', del: '₹2,999', offer: '27% off', hour: '30 Hours Playback', color1: 'grey', color2: 'white', color3: 'black', colormore: '+4',    image1: NewApple2 },
    { id: 'NewApple3', pname: 'Stone 420', price: '₹1,999', del: '₹2,999', offer: '45% off', hour: '12 Hours Playback', color1: 'yellow', color2: 'white', color3: 'black', colormore: '+3',  image1: NewApple3 },
    { id: 'NewApple4', pname: 'Stone 320', price: '₹1,999', del: '₹2,999', offer: '68% off', hour: '27 Hours Playback', color1: 'black', color2: 'lightblue', color3: 'red', colormore: '+5', image1: NewApple4 },
]

const cards2 = [
    { id: 'NewSamsung1', pname: 'Stone 620', price: '₹1,999', del: '₹5,999', offer: '60% off', hour: '60 Hours Playback', color1: 'red', color2: 'black', color3: 'lightblue', colormore: '+5', image1: NewSamsung1 },
    { id: 'NewSamsung2', pname: 'Stone 520', price: '₹1,999', del: '₹2,999', offer: '27% off', hour: '30 Hours Playback', color1: 'grey', color2: 'white', color3: 'black', colormore: '+4',    image1: NewSamsung2 },
    { id: 'NewSamsung3', pname: 'Stone 420', price: '₹1,999', del: '₹2,999', offer: '45% off', hour: '12 Hours Playback', color1: 'yellow', color2: 'black', color3: 'white', colormore: '+3',  image1: NewSamsung3 },
    { id: 'NewSamsung4', pname: 'Stone 320', price: '₹1,999', del: '₹2,999', offer: '68% off', hour: '27 Hours Playback', color1: 'red', color2: 'rose', color3: 'lightblue', colormore: '+5',  image1: NewSamsung4 },
]

const cards3 = [
    { id: 'NewIqoo1', pname: 'Stone 620', price: '₹1,999', del: '₹5,999', offer: '60% off', hour: '60 Hours Playback', color1: 'red', color2: 'black', color3: 'lightblue', colormore: '+5', image1: NewIqoo1 },
    { id: 'NewIqoo2', pname: 'Stone 520', price: '₹1,999', del: '₹2,999', offer: '27% off', hour: '30 Hours Playback', color1: 'grey', color2: 'white', color3: 'black', colormore: '+4',    image1: NewIqoo2 },
    { id: 'NewIqoo3', pname: 'Stone 420', price: '₹1,999', del: '₹2,999', offer: '45% off', hour: '12 Hours Playback', color1: 'yellow', color2: 'black', color3: 'white', colormore: '+3',  image1: NewIqoo3 },
    { id: 'NewIqoo4', pname: 'Stone 320', price: '₹1,999', del: '₹2,999', offer: '68% off', hour: '27 Hours Playback', color1: 'red', color2: 'rose', color3: 'lightblue', colormore: '+5',  image1: NewIqoo4 },
]

const cards4 = [
    { id: 'NewOneplus1', pname: 'Stone 620', price: '₹1,999', del: '₹5,999', offer: '60% off', hour: '60 Hours Playback', color1: 'red', color2: 'black', color3: 'lightblue', colormore: '+5', image1: NewOneplus1 },
    { id: 'NewOneplus2', pname: 'Stone 520', price: '₹1,999', del: '₹2,999', offer: '27% off', hour: '30 Hours Playback', color1: 'grey', color2: 'white', color3: 'black', colormore: '+4',    image1: NewOneplus2 },
    { id: 'NewOneplus3', pname: 'Stone 420', price: '₹1,999', del: '₹2,999', offer: '45% off', hour: '12 Hours Playback', color1: 'yellow', color2: 'black', color3: 'white', colormore: '+3',  image1: NewOneplus3 },
    { id: 'NewOneplus4', pname: 'Stone 320', price: '₹1,999', del: '₹2,999', offer: '68% off', hour: '27 Hours Playback', color1: 'red', color2: 'rose', color3: 'lightblue', colormore: '+5',  image1: NewOneplus4 },
]

const cards5 = [
    { id: 'NewVivo1', pname: 'Stone 620', price: '₹1,999', del: '₹5,999', offer: '60% off', hour: '60 Hours Playback', color1: 'red', color2: 'black', color3: 'lightblue', colormore: '+5', image1: NewVivo1 },
    { id: 'NewVivo2', pname: 'Stone 520', price: '₹1,999', del: '₹2,999', offer: '27% off', hour: '30 Hours Playback', color1: 'grey', color2: 'white', color3: 'black', colormore: '+4',    image1: NewVivo2 },
    { id: 'NewVivo3', pname: 'Stone 420', price: '₹1,999', del: '₹2,999', offer: '45% off', hour: '12 Hours Playback', color1: 'yellow', color2: 'black', color3: 'white', colormore: '+3',  image1: NewVivo3 },
    { id: 'NewVivo4', pname: 'Stone 320', price: '₹1,999', del: '₹2,999', offer: '68% off', hour: '27 Hours Playback', color1: 'red', color2: 'rose', color3: 'lightblue', colormore: '+5',  image1: NewVivo4 },
]

const cards6 = [
    { id: 'NewRedmi1', pname: 'Stone 620', price: '₹1,999', del: '₹5,999', offer: '60% off', hour: '60 Hours Playback', color1: 'red', color2: 'black', color3: 'lightblue', colormore: '+5', image1: NewRedmi1 },
    { id: 'NewRedmi2', pname: 'Stone 520', price: '₹1,999', del: '₹2,999', offer: '27% off', hour: '30 Hours Playback', color1: 'grey', color2: 'white', color3: 'black', colormore: '+4',    image1: NewRedmi2 },
    { id: 'NewRedmi3', pname: 'Stone 420', price: '₹1,999', del: '₹2,999', offer: '45% off', hour: '12 Hours Playback', color1: 'yellow', color2: 'black', color3: 'white', colormore: '+3',  image1: NewRedmi3 },
    { id: 'NewRedmi4', pname: 'Stone 320', price: '₹1,999', del: '₹2,999', offer: '68% off', hour: '27 Hours Playback', color1: 'red', color2: 'rose', color3: 'lightblue', colormore: '+5',  image1: NewRedmi4 },
]

const cards7 = [
    { id: 'NewRealme1', pname: 'Stone 620', price: '₹1,999', del: '₹5,999', offer: '60% off', hour: '60 Hours Playback', color1: 'red', color2: 'black', color3: 'lightblue', colormore: '+5', image1: NewRealme1 },
    { id: 'NewRealme2', pname: 'Stone 520', price: '₹1,999', del: '₹2,999', offer: '27% off', hour: '30 Hours Playback', color1: 'grey', color2: 'white', color3: 'black', colormore: '+4',    image1: NewRealme2 },
    { id: 'NewRealme3', pname: 'Stone 420', price: '₹1,999', del: '₹2,999', offer: '45% off', hour: '12 Hours Playback', color1: 'yellow', color2: 'black', color3: 'white', colormore: '+3',  image1: NewRealme3 },
    { id: 'NewRealme4', pname: 'Stone 320', price: '₹1,999', del: '₹2,999', offer: '68% off', hour: '27 Hours Playback', color1: 'red', color2: 'rose', color3: 'lightblue', colormore: '+5',  image1: NewRealme4 },
]

const cards8 = [
    { id: 'NewAsus1', pname: 'Stone 620', price: '₹1,999', del: '₹5,999', offer: '60% off', hour: '60 Hours Playback', color1: 'red', color2: 'black', color3: 'lightblue', colormore: '+5', image1: NewAsus1 },
    { id: 'NewAsus2', pname: 'Stone 520', price: '₹1,999', del: '₹2,999', offer: '27% off', hour: '30 Hours Playback', color1: 'grey', color2: 'white', color3: 'black', colormore: '+4',    image1: NewAsus2 },
    { id: 'NewAsus3', pname: 'Stone 420', price: '₹1,999', del: '₹2,999', offer: '45% off', hour: '12 Hours Playback', color1: 'yellow', color2: 'black', color3: 'white', colormore: '+3',  image1: NewAsus3 },
    { id: 'NewAsus4', pname: 'Stone 320', price: '₹1,999', del: '₹2,999', offer: '68% off', hour: '27 Hours Playback', color1: 'red', color2: 'rose', color3: 'lightblue', colormore: '+5',  image1: NewAsus4 },
]

const cards9 = [
    { id: 'NewHuawei1', pname: 'Stone 620', price: '₹1,999', del: '₹5,999', offer: '60% off', hour: '60 Hours Playback', color1: 'red', color2: 'black', color3: 'lightblue', colormore: '+5', image1: NewHuawei1 },
    { id: 'NewHuawei2', pname: 'Stone 520', price: '₹1,999', del: '₹2,999', offer: '27% off', hour: '30 Hours Playback', color1: 'grey', color2: 'white', color3: 'black', colormore: '+4',    image1: NewHuawei2 },
    { id: 'NewHuawei3', pname: 'Stone 420', price: '₹1,999', del: '₹2,999', offer: '45% off', hour: '12 Hours Playback', color1: 'yellow', color2: 'black', color3: 'white', colormore: '+3',  image1: NewHuawei3 },
    { id: 'NewHuawei4', pname: 'Stone 320', price: '₹1,999', del: '₹2,999', offer: '68% off', hour: '27 Hours Playback', color1: 'red', color2: 'rose', color3: 'lightblue', colormore: '+5',  image1: NewHuawei4 },
]

const datas4 = [
    { pname: 'Smart Watch', Productimg: Product1,       Navigate:'Container1'},
    { pname: 'Party Speakers', Productimg: Product2,    Navigate:'Container2'},
    { pname: 'Headphones', Productimg: Product3,        Navigate:'Container3'},
    { pname: 'Soundbars', Productimg: Product4,         Navigate:'Container4'},
    { pname: 'Neckbands', Productimg: Product5,         Navigate:'Container5'},
    { pname: 'Earbuds', Productimg: Product6,           Navigate:'Container6'},
    { pname: 'Power banks', Productimg: Product7,       Navigate:'Container7'},
    { pname: 'Gaming Headphones', Productimg: Product8, Navigate:'Container8'},
    { pname: 'Wireless Speakers', Productimg: Product9, Navigate:'Container9'},
]


export function NewMobile() {

    const navigate = useNavigate();

    const handleCardClick = (id) => {
      navigate(`/detailwatch/${id}`);
    };

    return (
        <>

            <div id="Brands" className="Brands-Mobile-Card">
                {/* <h2>Best <span>Mobile Bran</span><span className='rs'>ds</span> </h2> */}
                <div className="Brands-Mobile-Card1">
                    <div className='Brands-Mobile-main-box'>
                        {
                            datas4.map((data4) => {
                                return (
                                    <>
                                        <div className='Brands-Mobile-box'>
                                            <div className="Brands-Mobile-img1">
                                            <a href={`#${data4.Navigate}`}>
                                                <div className="Brands-Mobile-img">
                                                    <img src={data4.Productimg} />
                                                </div>
                                                </a>
                                            </div>
                                        </div>
                                    </>
                                )
                            })
                        }
                    </div>
                </div>
            </div>

            {/* --------------------------------------- col 1 ------------------------------------- */}

            <div id="Container1" className="NewsBrands1-main">
                <div className="row">
                    <div className="NewsBrands1-left">
                        <h1>True Wireless</h1>
                        <h1><span>Earbuds </span></h1>
                        <h3>Staring from ₹1,999*</h3>
                        <button className="NewsBrands1-btn">Shop Product</button>
                    </div>
                    <div className="NewsBrands1-right">
                        <img className="NewsBrands1-img" src={NewBrand1} alt="" />
                    </div>
                </div>
            </div>

            {/* -----------------------Card-------------------------------- */}

            <div className="Brands-container-Card">
                <h2>Best <span> Selle</span><span className='rs'>rs</span> </h2>
                <div className="Brands-container-Card1">
                    <div className='Brands-main-box'>
                        {
                            cards1.map((data) => {
                                return (
                                    <>
                                        <div className='Brands-card-box'>
                                            <div key={data.id} onClick={() => handleCardClick(data.id)} className="Brands-card-img">
                                                <img src={data.image1} />
                                            </div>
                                            <div className="Brands-yellow-box-main">
                                                <div className="Brands-yellow-box">
                                                    <div className="Brands-yellow-box-words">
                                                        <p>{data.hour}</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='Brands-product-name'>
                                                <div>
                                                    <h6>{data.pname}</h6>
                                                </div>
                                                <div className="Brands-color-more">
                                                    <i style={{ color: data.color1 }} className="fa-solid Brands-iconcolor1 fa-circle"></i>
                                                    <i style={{ color: data.color2 }} className="fa-solid Brands-iconcolor2 fa-circle"></i>
                                                    <i style={{ color: data.color3 }} className="fa-solid Brands-iconcolor3 fa-circle"></i> {data.colormore}
                                                </div>
                                            </div>
                                            <div className='Brands-product-price'>
                                                <h5>{data.price} <del>{data.del}</del> <span>{data.offer}</span> </h5>
                                            </div>
                                            <div className="Brands-cart-btn">
                                                <button><a href="#">Add To Cart </a></button>
                                            </div>
                                        </div>
                                    </>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
            <a className="New-brands-nav-btn" href="#Brands"><FaArrowUp /></a>


            {/* --------------------------------------- col2 ------------------------------------- */}

            <div id="Container2" className="NewsBrands21-main">
                <div className="row">
                    <div className="NewsBrands2-left">
                        <img className="NewsBrands2-img" src={NewBrand2} alt="" />
                    </div>
                    <div className="NewsBrands2-right">
                        <h1>Smart <span>Watch</span></h1>
                        <h3>Staring from ₹1,999*</h3>
                        <button className="NewsBrands2-btn">Shop Product</button>
                    </div>

                </div>
            </div>

            {/* -----------------------Card-------------------------------- */}

            <div className="Brands-container-Card">
                <h2>Best <span> Selle</span><span className='rs'>rs</span> </h2>
                <div className="Brands-container-Card1">
                    <div className='Brands-main-box'>
                        {
                            cards2.map((data) => {
                                return (
                                    <>
                                        <div className='Brands-card-box'>
                                            <div key={data.id} onClick={() => handleCardClick(data.id)} className="Brands-card-img">
                                                <img src={data.image1} />
                                            </div>
                                            <div className="Brands-yellow-box-main">
                                                <div className="Brands-yellow-box">
                                                    <div className="Brands-yellow-box-words">
                                                        <p>{data.hour}</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='Brands-product-name'>
                                                <div>
                                                    <h6>{data.pname}</h6>
                                                </div>
                                                <div className="Brands-color-more">
                                                    <i style={{ color: data.color1 }} className="fa-solid Brands-iconcolor1 fa-circle"></i>
                                                    <i style={{ color: data.color2 }} className="fa-solid Brands-iconcolor2 fa-circle"></i>
                                                    <i style={{ color: data.color3 }} className="fa-solid Brands-iconcolor3 fa-circle"></i> {data.colormore}
                                                </div>
                                            </div>
                                            <div className='Brands-product-price'>
                                                <h5>{data.price} <del>{data.del}</del> <span>{data.offer}</span> </h5>
                                            </div>
                                            <div className="Brands-cart-btn">
                                                <button><a href="#">Add To Cart </a></button>
                                            </div>
                                        </div>
                                    </>
                                )
                            })
                        }
                    </div>
                </div>
            </div>

            {/* ---------------------------------- col 3 ------------------------------ */}

            {/* <div id="contact"> */}
            <div id="Container3" className="NewsBrands3-main">
                <div className="row">
                    <div className="NewsBrands3-left">
                        <h1>True Wireless</h1>
                        <h1><span>Earbuds </span></h1>
                        <h3>Staring from ₹1,999*</h3>
                        <button className="NewsBrands3-btn">Shop Product</button>
                    </div>
                    <div className="NewsBrands3-right">
                        <img className="NewsBrands3-img" src={NewBrand3} alt="" />
                    </div>
                </div>
            </div>
            {/* </div> */}

            {/* -----------------------Card-------------------------------- */}

            <div className="Brands-container-Card">
                <h2>Best <span> Selle</span><span className='rs'>rs</span> </h2>
                <div className="Brands-container-Card1">
                    <div className='Brands-main-box'>
                        {
                            cards3.map((data) => {
                                return (
                                    <>
                                        <div className='Brands-card-box'>
                                            <div key={data.id} onClick={() => handleCardClick(data.id)} className="Brands-card-img">
                                                <img src={data.image1} />
                                            </div>
                                            <div className="Brands-yellow-box-main">
                                                <div className="Brands-yellow-box">
                                                    <div className="Brands-yellow-box-words">
                                                        <p>{data.hour}</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='Brands-product-name'>
                                                <div>
                                                    <h6>{data.pname}</h6>
                                                </div>
                                                <div className="Brands-color-more">
                                                    <i style={{ color: data.color1 }} className="fa-solid Brands-iconcolor1 fa-circle"></i>
                                                    <i style={{ color: data.color2 }} className="fa-solid Brands-iconcolor2 fa-circle"></i>
                                                    <i style={{ color: data.color3 }} className="fa-solid Brands-iconcolor3 fa-circle"></i> {data.colormore}
                                                </div>
                                            </div>
                                            <div className='Brands-product-price'>
                                                <h5>{data.price} <del>{data.del}</del> <span>{data.offer}</span> </h5>
                                            </div>
                                            <div className="Brands-cart-btn">
                                                <button><a href="#">Add To Cart </a></button>
                                            </div>
                                        </div>
                                    </>
                                )
                            })
                        }
                    </div>
                </div>
            </div>


            {/* --------------------------------------- col 4 ------------------------------------- */}

            <div id="Container4" className="NewsBrands41-main">
                <div className="row">
                    <div className="NewsBrands4-left">
                        <img className="NewsBrands4-img" src={NewBrand4} alt="" />
                    </div>
                    <div className="NewsBrands4-right">
                        <h1>Smart <span>Watch</span></h1>
                        <h3>Staring from ₹1,999*</h3>
                        <button className="NewsBrands4-btn">Shop Product</button>
                    </div>

                </div>
            </div>

            {/* -----------------------Card-------------------------------- */}

            <div className="Brands-container-Card">
                <h2>Best <span> Selle</span><span className='rs'>rs</span> </h2>
                <div className="Brands-container-Card1">
                    <div className='Brands-main-box'>
                        {
                            cards4.map((data) => {
                                return (
                                    <>
                                        <div className='Brands-card-box'>
                                            <div key={data.id} onClick={() => handleCardClick(data.id)} className="Brands-card-img">
                                                <img src={data.image1} />
                                            </div>
                                            <div className="Brands-yellow-box-main">
                                                <div className="Brands-yellow-box">
                                                    <div className="Brands-yellow-box-words">
                                                        <p>{data.hour}</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='Brands-product-name'>
                                                <div>
                                                    <h6>{data.pname}</h6>
                                                </div>
                                                <div className="Brands-color-more">
                                                    <i style={{ color: data.color1 }} className="fa-solid Brands-iconcolor1 fa-circle"></i>
                                                    <i style={{ color: data.color2 }} className="fa-solid Brands-iconcolor2 fa-circle"></i>
                                                    <i style={{ color: data.color3 }} className="fa-solid Brands-iconcolor3 fa-circle"></i> {data.colormore}
                                                </div>
                                            </div>
                                            <div className='Brands-product-price'>
                                                <h5>{data.price} <del>{data.del}</del> <span>{data.offer}</span> </h5>
                                            </div>
                                            <div className="Brands-cart-btn">
                                                <button><a href="#">Add To Cart </a></button>
                                            </div>
                                        </div>
                                    </>
                                )
                            })
                        }
                    </div>
                </div>
            </div>


            {/* ---------------------------------- col 5 ------------------------------ */}

            <div id="Container5" className="NewsBrands5-main">
                <div className="row">
                    <div className="NewsBrands5-left">
                        <h1>True Wireless</h1>
                        <h1><span>Earbuds </span></h1>
                        <h3>Staring from ₹1,999*</h3>
                        <button className="NewsBrands5-btn">Shop Product</button>
                    </div>
                    <div className="NewsBrands5-right">
                        <img className="NewsBrands5-img" src={NewBrand5} alt="" />
                    </div>
                </div>
            </div>

            {/* -----------------------Card-------------------------------- */}

            <div className="Brands-container-Card">
                <h2>Best <span> Selle</span><span className='rs'>rs</span> </h2>
                <div className="Brands-container-Card1">
                    <div className='Brands-main-box'>
                        {
                            cards5.map((data) => {
                                return (
                                    <>
                                        <div className='Brands-card-box'>
                                            <div key={data.id} onClick={() => handleCardClick(data.id)} className="Brands-card-img">
                                                <img src={data.image1} />
                                            </div>
                                            <div className="Brands-yellow-box-main">
                                                <div className="Brands-yellow-box">
                                                    <div className="Brands-yellow-box-words">
                                                        <p>{data.hour}</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='Brands-product-name'>
                                                <div>
                                                    <h6>{data.pname}</h6>
                                                </div>
                                                <div className="Brands-color-more">
                                                    <i style={{ color: data.color1 }} className="fa-solid Brands-iconcolor1 fa-circle"></i>
                                                    <i style={{ color: data.color2 }} className="fa-solid Brands-iconcolor2 fa-circle"></i>
                                                    <i style={{ color: data.color3 }} className="fa-solid Brands-iconcolor3 fa-circle"></i> {data.colormore}
                                                </div>
                                            </div>
                                            <div className='Brands-product-price'>
                                                <h5>{data.price} <del>{data.del}</del> <span>{data.offer}</span> </h5>
                                            </div>
                                            <div className="Brands-cart-btn">
                                                <button><a href="#">Add To Cart </a></button>
                                            </div>
                                        </div>
                                    </>
                                )
                            })
                        }
                    </div>
                </div>
            </div>


            {/* --------------------------------------- col 6 ------------------------------------- */}

            <div id="Container6" className="NewsBrands61-main">
                <div className="row">
                    <div className="NewsBrands6-left">
                        <img className="NewsBrands6-img" src={NewBrand6} alt="" />
                    </div>
                    <div className="NewsBrands6-right">
                        <h1>Smart <span>Watch</span></h1>
                        <h3>Staring from ₹1,999*</h3>
                        <button className="NewsBrands6-btn">Shop Product</button>
                    </div>

                </div>
            </div>

            {/* -----------------------Card-------------------------------- */}

            <div className="Brands-container-Card">
                <h2>Best <span> Selle</span><span className='rs'>rs</span> </h2>
                <div className="Brands-container-Card1">
                    <div className='Brands-main-box'>
                        {
                            cards6.map((data) => {
                                return (
                                    <>
                                        <div className='Brands-card-box'>
                                            <div key={data.id} onClick={() => handleCardClick(data.id)} className="Brands-card-img">
                                                <img src={data.image1} />
                                            </div>
                                            <div className="Brands-yellow-box-main">
                                                <div className="Brands-yellow-box">
                                                    <div className="Brands-yellow-box-words">
                                                        <p>{data.hour}</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='Brands-product-name'>
                                                <div>
                                                    <h6>{data.pname}</h6>
                                                </div>
                                                <div className="Brands-color-more">
                                                    <i style={{ color: data.color1 }} className="fa-solid Brands-iconcolor1 fa-circle"></i>
                                                    <i style={{ color: data.color2 }} className="fa-solid Brands-iconcolor2 fa-circle"></i>
                                                    <i style={{ color: data.color3 }} className="fa-solid Brands-iconcolor3 fa-circle"></i> {data.colormore}
                                                </div>
                                            </div>
                                            <div className='Brands-product-price'>
                                                <h5>{data.price} <del>{data.del}</del> <span>{data.offer}</span> </h5>
                                            </div>
                                            <div className="Brands-cart-btn">
                                                <button><a href="#">Add To Cart </a></button>
                                            </div>
                                        </div>
                                    </>
                                )
                            })
                        }
                    </div>
                </div>
            </div>


            {/* ---------------------------------- col 7 ------------------------------ */}

            <div id="Container7" className="NewsBrands7-main">
                <div className="row">
                    <div className="NewsBrands7-left">
                        <h1>True Wireless</h1>
                        <h1><span>Earbuds </span></h1>
                        <h3>Staring from ₹1,999*</h3>
                        <button className="NewsBrands7-btn">Shop Product</button>
                    </div>
                    <div className="NewsBrands7-right">
                        <img className="NewsBrands7-img" src={NewBrand7} alt="" />
                    </div>
                </div>
            </div>

            {/* -----------------------Card-------------------------------- */}

            <div className="Brands-container-Card">
                <h2>Best <span> Selle</span><span className='rs'>rs</span> </h2>
                <div className="Brands-container-Card1">
                    <div className='Brands-main-box'>
                        {
                            cards7.map((data) => {
                                return (
                                    <>
                                        <div className='Brands-card-box'>
                                            <div key={data.id} onClick={() => handleCardClick(data.id)} className="Brands-card-img">
                                                <img src={data.image1} />
                                            </div>
                                            <div className="Brands-yellow-box-main">
                                                <div className="Brands-yellow-box">
                                                    <div className="Brands-yellow-box-words">
                                                        <p>{data.hour}</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='Brands-product-name'>
                                                <div>
                                                    <h6>{data.pname}</h6>
                                                </div>
                                                <div className="Brands-color-more">
                                                    <i style={{ color: data.color1 }} className="fa-solid Brands-iconcolor1 fa-circle"></i>
                                                    <i style={{ color: data.color2 }} className="fa-solid Brands-iconcolor2 fa-circle"></i>
                                                    <i style={{ color: data.color3 }} className="fa-solid Brands-iconcolor3 fa-circle"></i> {data.colormore}
                                                </div>
                                            </div>
                                            <div className='Brands-product-price'>
                                                <h5>{data.price} <del>{data.del}</del> <span>{data.offer}</span> </h5>
                                            </div>
                                            <div className="Brands-cart-btn">
                                                <button><a href="#">Add To Cart </a></button>
                                            </div>
                                        </div>
                                    </>
                                )
                            })
                        }
                    </div>
                </div>
            </div>


            {/* --------------------------------------- col 8 ------------------------------------- */}

            <div id="Container8" className="NewsBrands81-main">
                <div className="row">
                    <div className="NewsBrands8-left">
                        <img className="NewsBrands8-img" src={NewBrand8} alt="" />
                    </div>
                    <div className="NewsBrands8-right">
                        <h1>Smart <span>Watch</span></h1>
                        <h3>Staring from ₹1,999*</h3>
                        <button className="NewsBrands8-btn">Shop Product</button>
                    </div>

                </div>
            </div>

            {/* -----------------------Card-------------------------------- */}

            <div className="Brands-container-Card">
                <h2>Best <span> Selle</span><span className='rs'>rs</span> </h2>
                <div className="Brands-container-Card1">
                    <div className='Brands-main-box'>
                        {
                            cards8.map((data) => {
                                return (
                                    <>
                                        <div className='Brands-card-box'>
                                            <div key={data.id} onClick={() => handleCardClick(data.id)} className="Brands-card-img">
                                                <img src={data.image1} />
                                            </div>
                                            <div className="Brands-yellow-box-main">
                                                <div className="Brands-yellow-box">
                                                    <div className="Brands-yellow-box-words">
                                                        <p>{data.hour}</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='Brands-product-name'>
                                                <div>
                                                    <h6>{data.pname}</h6>
                                                </div>
                                                <div className="Brands-color-more">
                                                    <i style={{ color: data.color1 }} className="fa-solid Brands-iconcolor1 fa-circle"></i>
                                                    <i style={{ color: data.color2 }} className="fa-solid Brands-iconcolor2 fa-circle"></i>
                                                    <i style={{ color: data.color3 }} className="fa-solid Brands-iconcolor3 fa-circle"></i> {data.colormore}
                                                </div>
                                            </div>
                                            <div className='Brands-product-price'>
                                                <h5>{data.price} <del>{data.del}</del> <span>{data.offer}</span> </h5>
                                            </div>
                                            <div className="Brands-cart-btn">
                                                <button><a href="#">Add To Cart </a></button>
                                            </div>
                                        </div>
                                    </>
                                )
                            })
                        }
                    </div>
                </div>
            </div>


            {/* ---------------------------------- col 9 ------------------------------ */}

            <div id="Container9" className="NewsBrands9-main">
                <div className="row">
                    <div className="NewsBrands9-left">
                        <h1>True Wireless</h1>
                        <h1><span>Earbuds </span></h1>
                        <h3>Staring from ₹1,999*</h3>
                        <button className="NewsBrands9-btn">Shop Product</button>
                    </div>
                    <div className="NewsBrands9-right">
                        <img className="NewsBrands9-img" src={NewBrand9} alt="" />
                    </div>
                </div>
            </div>

            {/* -----------------------Card-------------------------------- */}

            <div className="Brands-container-Card">
                <h2>Best <span> Selle</span><span className='rs'>rs</span> </h2>
                <div className="Brands-container-Card1">
                    <div className='Brands-main-box'>
                        {
                            cards9.map((data) => {
                                return (
                                    <>
                                        <div className='Brands-card-box'>
                                            <div key={data.id} onClick={() => handleCardClick(data.id)} className="Brands-card-img">
                                                <img src={data.image1} />
                                            </div>
                                            <div className="Brands-yellow-box-main">
                                                <div className="Brands-yellow-box">
                                                    <div className="Brands-yellow-box-words">
                                                        <p>{data.hour}</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='Brands-product-name'>
                                                <div>
                                                    <h6>{data.pname}</h6>
                                                </div>
                                                <div className="Brands-color-more">
                                                    <i style={{ color: data.color1 }} className="fa-solid Brands-iconcolor1 fa-circle"></i>
                                                    <i style={{ color: data.color2 }} className="fa-solid Brands-iconcolor2 fa-circle"></i>
                                                    <i style={{ color: data.color3 }} className="fa-solid Brands-iconcolor3 fa-circle"></i> {data.colormore}
                                                </div>
                                            </div>
                                            <div className='Brands-product-price'>
                                                <h5>{data.price} <del>{data.del}</del> <span>{data.offer}</span> </h5>
                                            </div>
                                            <div className="Brands-cart-btn">
                                                <button><a href="#">Add To Cart </a></button>
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



