import React from "react";
import './CarouselsMobile.css'
import './ProductMobile.css'
import './HomeMobile.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fontsource/metropolis';
import "@fontsource/poppins";
import swal from "sweetalert";
import Swal from "sweetalert2";
import Carousel from 'react-bootstrap/Carousel';
import { useNavigate } from 'react-router-dom';

import CimgL1 from './assets/CarouselMobileL1.jpg'
import CimgL2 from './assets/CarouselMobileL2.jpg'
import CimgL3 from './assets/CarouselMobileL3.jpg'
import CimgL4 from './assets/CarouselMobileL4.jpg'

import CimgR1 from './assets/CarouselMobileR1.jpg'
import CimgR2 from './assets/CarouselMobileR2.jpg'
import CimgR3 from './assets/CarouselMobileR3.jpg'
import CimgR4 from './assets/CarouselMobileR4.jpg'

import BSPhone1 from './assets/phone1.webp'
import BSPhone2 from './assets/phone2.webp'
import BSPhone3 from './assets/phone3.webp'
import BSPhone4 from './assets/phone4.webp'

import BSPhone5 from './assets/NewBrands6.png'
import BSPhone6 from './assets/NewBrands7.png'
import BSPhone7 from './assets/NewBrands8.png'
import BSPhone8 from './assets/NewBrands5.png'

import Vid1 from './assets/phoneVvideo1.mp4'
import Vid2 from './assets/phoneVvideo2.mp4'
import Vid3 from './assets/phoneVvideo3.mp4'

import Ads1 from './assets/phoneHvideo1.mp4'
import Ads2 from './assets/phoneHvideo2.mp4'
import Ads3 from './assets/phoneHvideo3.mp4'
import Ads4 from './assets/phoneHvideo4.mp4'

import Product1 from './assets/Mobile-logo1.png'
import Product2 from './assets/Mobile-logo2.png'
import Product3 from './assets/Mobile-logo3.png'
import Product4 from './assets/Mobile-logo4.png'
import Product5 from './assets/Mobile-logo5.png'
import Product6 from './assets/Mobile-logo6.png'
import Product7 from './assets/Mobile-logo7.png'
import Product8 from './assets/Mobile-logo8.png'
import Product9 from './assets/Mobile-logo9.png'

import Iqooimg from './assets/iqoo1.png'


export function HomeMobile() {

    const navigate = useNavigate();
    const NewMobile = () => {
        navigate('/NewMobile');
    };

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

    const datas = [
        {id: 'BestSeller1', pname: 'Iphone 15 pro max',     price: '₹1,55,599', del: '₹1,95,999', offer: '25% off', hour: 'Best All Rounder', color1:'red', color2:'black', color3:'lightblue', colormore: '+5',    image1: BSPhone1 },
        {id: 'BestSeller2', pname: 'Samsung S24 Ultra', price: '₹1,05,999', del: '₹1,55,599', offer: '35% off', hour: 'Best Camera Mobile', color1: 'grey', color2: 'white', color3: 'black', colormore: '+4', image1: BSPhone2 },
        {id: 'BestSeller3', pname: 'iQOO 12 pro', price: '₹58,999', del: '₹75,999', offer: '25% off', hour: 'Best Gaming Mobile', color1: 'white', color2: 'black', color3: 'blue', colormore: '+3',             image1: BSPhone3 },
        {id: 'BestSeller4', pname: 'One plus 12 pro', price: '₹55,999', del: '₹72,999', offer: '25% off', hour: 'Best Value for Money', color1: 'red', color2: 'black', color3: 'blue', colormore: '+5',       image1: BSPhone4 },
    ]

    const datas2 = [
        {id: 'BestSeller5', pname: 'Xiaomi 12s Ultra',     price: '₹1,55,599', del: '₹1,95,999', offer: '25% off', hour: 'Best All Rounder', color1:'red', color2:'black', color3:'lightblue', colormore: '+5',    image1: BSPhone5 },
        {id: 'BestSeller6', pname: 'Realme Gt 6 Pro', price: '₹1,05,999', del: '₹1,55,599', offer: '35% off', hour: 'Best Camera Mobile', color1: 'grey', color2: 'white', color3: 'black', colormore: '+4', image1: BSPhone6 },
        {id: 'BestSeller7', pname: 'Asus 7 Ultimate', price: '₹58,999', del: '₹75,999', offer: '25% off', hour: 'Best Gaming Mobile', color1: 'white', color2: 'black', color3: 'blue', colormore: '+3',             image1: BSPhone7 },
        {id: 'BestSeller8', pname: 'Vivo X100 Pro', price: '₹55,999', del: '₹72,999', offer: '25% off', hour: 'Best Value for Money', color1: 'red', color2: 'black', color3: 'blue', colormore: '+5',       image1: BSPhone8 },
    ]

    const datas1 = [
        { pname: 'Apple iPhone', video1: Vid1, path: NewMobile },
        { pname: 'SAMSUNG', video1: Vid2, path: NewMobile },
        { pname: 'iQOO', video1: Vid3, path: NewMobile },
    ]

    const datas3 = [
        { pname: 'Iphone 15 pro max', price: '₹1,999', del: '₹5,999', offer: '60% off', hour: 'Best All Rounder', ads1: Ads1, path: NewMobile },
        { pname: 'Samsung S24 Ultra', price: '₹1,999', del: '₹2,999', offer: '27% off', hour: 'Best Camera Mobile', ads1: Ads2, path: NewMobile },
        { pname: 'iQOO 12 pro', price: '₹1,999', del: '₹2,999', offer: '45% off', hour: 'Best Gaming Mobile', ads1: Ads3, path: NewMobile },
        { pname: 'One plus 12 pro', price: '₹1,999', del: '₹2,999', offer: '68% off', hour: 'Best Value for Money', ads1: Ads4, path: NewMobile },
    ]

    const datas4 = [
        { pname: 'Smart Watch', Productimg: Product1, path: NewMobile },
        { pname: 'Party Speakers', Productimg: Product2, path: NewMobile },
        { pname: 'Headphones', Productimg: Product3, path: NewMobile },
        { pname: 'Soundbars', Productimg: Product4, path: NewMobile },
        { pname: 'Neckbands', Productimg: Product5, path: NewMobile },
        { pname: 'Earbuds', Productimg: Product6, path: NewMobile },
        { pname: 'Power banks', Productimg: Product7, path: NewMobile },
        { pname: 'Gaming Headphones', Productimg: Product8, path: NewMobile },
        { pname: 'Wireless Speakers', Productimg: Product9, path: NewMobile },
    ]

    return (
        <>

                    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css"
                integrity="sha512-z3gLpd7yknf1YoNbCzqRKc4qyor8gaKU1qmn+CShxbuBusANI9QpRohGBreCFkKxLhei6S9CQXFEbbKuqLg0DA=="
                crossorigin="anonymous" referrerpolicy="no-referrer" />

            {/* ------------------------------ Carousels 1 --------------------------- */}

            <div className="carouselmain-Mobile">
                <div className="row">
                <div className="carousel-left1">
                <Carousel data-bs-theme="dark">
                    <Carousel.Item>
                        <img onClick={NewMobile} className="car" src={CimgL1} />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img onClick={NewMobile} className="car" src={CimgL2} />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img onClick={NewMobile} className="car" src={CimgL3} />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img onClick={NewMobile} className="car" src={CimgL4} />
                    </Carousel.Item>
                </Carousel>
                </div>
                <div className="carousel-right1">
                <h1 className="carousel-right1-h1" >Brand <strong> New Mobiles </strong></h1>
                    <h3 className="carousel-right1-h3" >Get 10% Off Your Order Now!</h3>
                    <button onClick={NewMobile} className="carousel-right1-btn"><i className="fa-solid crbi fa-circle-arrow-left"></i> Shop Product</button>
                </div>

{/* ------------------------------ Carousels 2 --------------------------- */}

                <div className="carousel-left2">
                    <h1 className="carousel-left2-h1" >Demo <span>Mobiles</span> <strong>&</strong></h1>
                    <h1 className="carousel-left2-h2" >Used <span>Mobiles</span></h1>
                    <h3 className="carousel-left2-h3" >Limited Stock Available - Order Now!</h3>
                    <button onClick={NewMobile} className="carousel-left2-btn">Shop Product <i className="fa-solid fa-circle-arrow-right"></i></button>
                </div>

                <div className="carousel-right2">
                <Carousel data-bs-theme="dark">
                    <Carousel.Item>
                        <img onClick={NewMobile} className="car" src={CimgR1} />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img onClick={NewMobile} className="car" src={CimgR2} />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img onClick={NewMobile} className="car" src={CimgR3} />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img onClick={NewMobile} className="car" src={CimgR4} />
                    </Carousel.Item>
                </Carousel>
                </div>

{/* ------------------------------ Carousels 3 --------------------------- */}

                <div className="none-mobile">
                <div className="carousel-left1">
                <Carousel data-bs-theme="dark">
                    <Carousel.Item>
                        <img onClick={NewMobile} className="car" src={CimgR1} />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img onClick={NewMobile} className="car" src={CimgR2} />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img onClick={NewMobile} className="car" src={CimgR3} />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img onClick={NewMobile} className="car" src={CimgR4} />
                    </Carousel.Item>
                </Carousel>
                </div>
                <div className="carousel-right1">
                {/* <h1 className="carousel-right1-h1" >Brand <strong> New Mobiles </strong></h1>
                    <h3 className="carousel-right1-h3" >Get 10% Off Your Order Now!</h3> */}
                    <h1 className="carousel-left2-h1" >Demo <span>Mobiles</span> <strong>&</strong></h1>
                    <h1 className="carousel-left2-h2" >Used <span>Mobiles</span></h1>
                    <h3 className="carousel-left2-h3" >Limited Stock Available - Order Now!</h3>
                    <button onClick={NewMobile} className="carousel-right1-btn">Shop Product</button>
                </div>
                </div>

                </div>
            </div>

{/* ------------------------------------- Products ----------------------------- */}
<div className="Mobile-Main">

<div className="container-Mobile-Card">
                <h2>Best <span>Mobile Bran</span><span className='rs'>ds</span> </h2>
                <div className="container-Mobile-Card1">
                    <div className='Product-Mobile-main-box'>
                        {
                            datas4.map((data4) => {
                                return (
                                    <>
                                        <div onClick={NewMobile} className='Product-Mobile-box'>
                                            <div className="Product-Mobile-img1">
                                            <div onClick={data4.path} className="Product-Mobile-img">
                                                {/* <video src={data2.video1} autoPlay loop style={{ borderRadius: '10px' }} ></video> */}
                                                <img src={data4.Productimg} />
                                            </div>
                                            </div>
                                        </div>
                                    </>
                                )
                            })
                        }
                    </div>
                </div>
            </div>


            {/* ------------------------------ Cards --------------------------- */}

            <div className="container-Mobile-Card">
                <h2>Best <span> Selle</span><span className='rs'>rs</span> </h2>
                <div className="container-Mobile-Card1">
                    <div className='main-Mobile-box'>
                        {
                            datas.map((data) => {
                                return (
                                    <>
                                        <div className='card-Mobile-box'>
                                            <div key={data.id} onClick={() => handleCardClick(data.id)} className="card-Mobile-img">
                                                <img src={data.image1} />
                                            </div>
                                            <div className="yellow-Mobile-box-main">
                                                <div className="yellow-Mobile-box">
                                                    <div className="yellow-Mobile-box-words">
                                                        <p>{data.hour}</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='product-Mobile-name'>
                                                <div>
                                                    <h6>{data.pname}</h6>
                                                </div>
                                                <div className="color-Mobile-more">
                                                    <i style={{ color:data.color1 }} className="fa-solid fa-circle Mobile-iconcolor1"></i>
                                                    <i style={{ color:data.color2 }} className="fa-solid fa-circle Mobile-iconcolor2"></i>
                                                    <i style={{ color:data.color3 }} className="fa-solid fa-circle Mobile-iconcolor3"></i> {data.colormore}
                                                </div>
                                            </div>
                                            <div className='product-Mobile-price'>
                                                <h5>{data.price} <del>{data.del}</del> <span>{data.offer}</span> </h5>
                                            </div>
                                            <div className="cart-Mobile-btn">
                                                <button onClick={Cartbtn} ><a href="#">Add To Cart </a></button>
                                            </div>
                                        </div>
                                    </>
                                )
                            })
                        }
                    </div>
                </div>
            </div>

{/* -------------------------------------- tws ---------------------------- */}
{/* <WatchBoat/> */}
{/* ------------ */}

<div className="iqoo1-main">
                <div className="row">
                    <div className="iqoo-left">
                    <img className="iqoo-img" src={Iqooimg} alt="" />
                    </div>
                    <div className="iqoo-right">
                        <h1>iQOO<span> 12 Pro</span></h1>
                        <h3>BMW Limited Edition</h3>
                        <button onClick={NewMobile} className="iqoo-btn">Shop Product</button>
                    </div>

                </div>
            </div>

{/* --------------- */}
            {/* ----------------------------- Video Card --------------------------------  */}

            <div className="container-Mobile-Card">
                <h2>Best <span> Mobile Bran</span><span className='rs'>ds</span> </h2>
                <div className="container-Mobile-Card1">
                    <div className='main-Mobile-box'>
                        {
                            datas1.map((data1) => {
                                return (
                                    <>
                                        <div className='video-Mobile-box'>
                                            <div onClick={data1.path} className="card-video-Mobile">
                                                <video className="video" src={data1.video1} loop muted style={{ borderRadius: '10px' }} ></video>
                                                {/* <img src={data.image1} /> */}
                                            </div>
                                            <div className='videomain-Mobile-name'>
                                                <div>
                                                    <h6 className="video-Mobile-name">{data1.pname}</h6>
                                                </div>
                                            </div>
                                        </div>
                                    </>
                                )
                            })
                        }
                    </div>
                </div>
            </div>

            {/* ----------------------------- Card --------------------------------  */}


            <div className="container-Mobile-Card">
                <h2>Best <span> Selle</span><span className='rs'>rs</span> </h2>
                <div className="container-Mobile-Card1">
                    <div className='main-Mobile-box'>
                        {
                            datas2.map((data) => {
                                return (
                                    <>
                                        <div className='card-Mobile-box'>
                                        <div key={data.id} onClick={() => handleCardClick(data.id)} className="card-Mobile-img">
                                                <img src={data.image1} />
                                            </div>
                                            <div className="yellow-Mobile-box-main">
                                                <div className="yellow-Mobile-box">
                                                    <div className="yellow-Mobile-box-words">
                                                        <p>{data.hour}</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='product-Mobile-name'>
                                                <div>
                                                    <h6>{data.pname}</h6>
                                                </div>
                                                <div className="color-Mobile-more">
                                                    <i style={{ color:data.color1 }} className="fa-solid fa-circle Mobile-iconcolor1"></i>
                                                    <i style={{ color:data.color2 }} className="fa-solid fa-circle Mobile-iconcolor2"></i>
                                                    <i style={{ color:data.color3 }} className="fa-solid fa-circle Mobile-iconcolor3"></i> {data.colormore}
                                                </div>
                                            </div>
                                            <div className='product-Mobile-price'>
                                                <h5>{data.price} <del>{data.del}</del> <span>{data.offer}</span> </h5>
                                            </div>
                                            <div className="cart-Mobile-btn">
                                                <button onClick={Cartbtn} ><a href="#">Add To Cart </a></button>
                                            </div>
                                        </div>
                                    </>
                                )
                            })
                        }
                    </div>
                </div>
            </div>


 {/* ------------------------------ Ads --------------------------- */}

 <div className="container-Mobile-Card">
                <h2>Best <span>Mobile Bran</span><span className='rs'>ds</span> </h2>
                <div className="container-Mobile-Card1">
                    <div className='main-Mobile-box'>
                        {
                            datas3.map((data3) => {
                                return (
                                    <>
                                        <div className='video-Mobile-box'>
                                            <div onClick={data3.path} className="card-video-Mobile">
                                                <video className="video" src={data3.ads1} autoPlay loop muted style={{ borderRadius: '10px' }} ></video>
                                            </div>
                                            <div className="yellow-Mobile-box-main">
                                                <div className="yellow-Mobile-box">
                                                    <div className="yellow-Mobile-box-words">
                                                        <p>{data3.hour}</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='product-Mobile-name'>
                                                <div>
                                                    <h6>{data3.pname}</h6>
                                                </div>
                                            </div>
                                            <div className='product-Mobile-price'>
                                                <h5>{data3.price} <del>{data3.del}</del> <span>{data3.offer}</span> </h5>
                                            </div>
                                        </div>
                                    </>
                                )
                            })
                        }
                    </div>
                </div>
            </div>

            </div>
        </>
    )
}