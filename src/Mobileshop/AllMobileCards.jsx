import React from "react";
import './AllMobileCards.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import check1 from './assets/check.png';
import swal from "sweetalert";
import Swal from "sweetalert2";

import Button1 from './assets/Button1.webp';
import Button2 from './assets/Button2.webp';
import Button3 from './assets/Button3.webp';
import Button4 from './assets/Button4.webp';

import BSPhone1 from './assets/phone1.webp'
import BSPhone2 from './assets/phone2.webp'
import BSPhone3 from './assets/phone3.webp'
import BSPhone4 from './assets/phone4.webp'

import BSPhone5 from './assets/NewBrands6.png'
import BSPhone6 from './assets/NewBrands7.png'
import BSPhone7 from './assets/NewBrands8.png'
import BSPhone8 from './assets/NewBrands5.png'

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

const cards = [
    {id: 'NewApple1', pname: 'Stone 620', price: '₹1,999', del: '₹5,999', offer: '60% off', color1: 'lightred', color2: 'black', color3: 'lightblue', image1: NewApple1, image2: Button1, image3: Button2, image4: Button3, image5: Button4 },
    {id: 'NewApple2', pname: 'Stone 520', price: '₹1,999', del: '₹2,999', offer: '27% off', color1: 'grey',     color2: 'white', color3: 'black',     image1: NewApple2, image2: Button1, image3: Button2, image4: Button3, image5: Button4 },
    {id: 'NewApple3', pname: 'Stone 420', price: '₹1,999', del: '₹2,999', offer: '45% off', color1: 'yellow',   color2: 'black', color3: 'white',     image1: NewApple3, image2: Button1, image3: Button2, image4: Button3, image5: Button4 },
    {id: 'NewApple4', pname: 'Stone 320', price: '₹1,999', del: '₹2,999', offer: '68% off', color1: 'red',      color2: 'rose',  color3: 'lightblue', image1: NewApple4, image2: Button1, image3: Button2, image4: Button3, image5: Button4 }, 
 
    {id: 'NewSamsung1', pname: 'Stone 620', price: '₹1,999', del: '₹5,999', offer: '60% off', color1: 'lightred', color2: 'black', color3: 'lightblue', image1: NewSamsung1, image2: Button1, image3: Button2, image4: Button3, image5: Button4 },
    {id: 'NewSamsung2', pname: 'Stone 520', price: '₹1,999', del: '₹2,999', offer: '27% off', color1: 'grey',     color2: 'white', color3: 'black',     image1: NewSamsung2, image2: Button1, image3: Button2, image4: Button3, image5: Button4 },
    {id: 'NewSamsung3', pname: 'Stone 420', price: '₹1,999', del: '₹2,999', offer: '45% off', color1: 'yellow',   color2: 'black', color3: 'white',     image1: NewSamsung3, image2: Button1, image3: Button2, image4: Button3, image5: Button4 },
    {id: 'NewSamsung4', pname: 'Stone 320', price: '₹1,999', del: '₹2,999', offer: '68% off', color1: 'red',      color2: 'rose',  color3: 'lightblue', image1: NewSamsung4, image2: Button1, image3: Button2, image4: Button3, image5: Button4 }, 
 
    {id: 'NewIqoo1', pname: 'Stone 620', price: '₹1,999', del: '₹5,999', offer: '60% off', color1: 'lightred', color2: 'black', color3: 'lightblue', image1: NewIqoo1, image2: Button1, image3: Button2, image4: Button3, image5: Button4 },
    {id: 'NewIqoo2', pname: 'Stone 520', price: '₹1,999', del: '₹2,999', offer: '27% off', color1: 'grey',     color2: 'white', color3: 'black',     image1: NewIqoo2, image2: Button1, image3: Button2, image4: Button3, image5: Button4 },
    {id: 'NewIqoo3', pname: 'Stone 420', price: '₹1,999', del: '₹2,999', offer: '45% off', color1: 'yellow',   color2: 'black', color3: 'white',     image1: NewIqoo3, image2: Button1, image3: Button2, image4: Button3, image5: Button4 },
    {id: 'NewIqoo4', pname: 'Stone 320', price: '₹1,999', del: '₹2,999', offer: '68% off', color1: 'red',      color2: 'rose',  color3: 'lightblue', image1: NewIqoo4, image2: Button1, image3: Button2, image4: Button3, image5: Button4 }, 
 
    {id: 'NewOneplus1', pname: 'Stone 620', price: '₹1,999', del: '₹5,999', offer: '60% off', color1: 'lightred', color2: 'black', color3: 'lightblue', image1: NewOneplus1, image2: Button1, image3: Button2, image4: Button3, image5: Button4 },
    {id: 'NewOneplus2', pname: 'Stone 520', price: '₹1,999', del: '₹2,999', offer: '27% off', color1: 'grey',     color2: 'white', color3: 'black',     image1: NewOneplus2, image2: Button1, image3: Button2, image4: Button3, image5: Button4 },
    {id: 'NewOneplus3', pname: 'Stone 420', price: '₹1,999', del: '₹2,999', offer: '45% off', color1: 'yellow',   color2: 'black', color3: 'white',     image1: NewOneplus3, image2: Button1, image3: Button2, image4: Button3, image5: Button4 },
    {id: 'NewOneplus4', pname: 'Stone 320', price: '₹1,999', del: '₹2,999', offer: '68% off', color1: 'red',      color2: 'rose',  color3: 'lightblue', image1: NewOneplus4, image2: Button1, image3: Button2, image4: Button3, image5: Button4 }, 
 
    {id: 'NewVivo1', pname: 'Stone 620', price: '₹1,999', del: '₹5,999', offer: '60% off', color1: 'lightred', color2: 'black', color3: 'lightblue', image1: NewVivo1, image2: Button1, image3: Button2, image4: Button3, image5: Button4 },
    {id: 'NewVivo2', pname: 'Stone 520', price: '₹1,999', del: '₹2,999', offer: '27% off', color1: 'grey',     color2: 'white', color3: 'black',     image1: NewVivo2, image2: Button1, image3: Button2, image4: Button3, image5: Button4 },
    {id: 'NewVivo3', pname: 'Stone 420', price: '₹1,999', del: '₹2,999', offer: '45% off', color1: 'yellow',   color2: 'black', color3: 'white',     image1: NewVivo3, image2: Button1, image3: Button2, image4: Button3, image5: Button4 },
    {id: 'NewVivo4', pname: 'Stone 320', price: '₹1,999', del: '₹2,999', offer: '68% off', color1: 'red',      color2: 'rose',  color3: 'lightblue', image1: NewVivo4, image2: Button1, image3: Button2, image4: Button3, image5: Button4 }, 
 
    {id: 'NewRedmi1', pname: 'Stone 620', price: '₹1,999', del: '₹5,999', offer: '60% off', color1: 'lightred', color2: 'black', color3: 'lightblue', image1: NewRedmi1, image2: Button1, image3: Button2, image4: Button3, image5: Button4 },
    {id: 'NewRedmi2', pname: 'Stone 520', price: '₹1,999', del: '₹2,999', offer: '27% off', color1: 'grey',     color2: 'white', color3: 'black',     image1: NewRedmi2, image2: Button1, image3: Button2, image4: Button3, image5: Button4 },
    {id: 'NewRedmi3', pname: 'Stone 420', price: '₹1,999', del: '₹2,999', offer: '45% off', color1: 'yellow',   color2: 'black', color3: 'white',     image1: NewRedmi3, image2: Button1, image3: Button2, image4: Button3, image5: Button4 },
    {id: 'NewRedmi4', pname: 'Stone 320', price: '₹1,999', del: '₹2,999', offer: '68% off', color1: 'red',      color2: 'rose',  color3: 'lightblue', image1: NewRedmi4, image2: Button1, image3: Button2, image4: Button3, image5: Button4 }, 
 
    {id: 'NewRealme1', pname: 'Stone 620', price: '₹1,999', del: '₹5,999', offer: '60% off', color1: 'lightred', color2: 'black', color3: 'lightblue', image1: NewRealme1, image2: Button1, image3: Button2, image4: Button3, image5: Button4 },
    {id: 'NewRealme2', pname: 'Stone 520', price: '₹1,999', del: '₹2,999', offer: '27% off', color1: 'grey',     color2: 'white', color3: 'black',     image1: NewRealme2, image2: Button1, image3: Button2, image4: Button3, image5: Button4 },
    {id: 'NewRealme3', pname: 'Stone 420', price: '₹1,999', del: '₹2,999', offer: '45% off', color1: 'yellow',   color2: 'black', color3: 'white',     image1: NewRealme3, image2: Button1, image3: Button2, image4: Button3, image5: Button4 },
    {id: 'NewRealme4', pname: 'Stone 320', price: '₹1,999', del: '₹2,999', offer: '68% off', color1: 'red',      color2: 'rose',  color3: 'lightblue', image1: NewRealme4, image2: Button1, image3: Button2, image4: Button3, image5: Button4 }, 
 
    {id: 'NewAsus1', pname: 'Stone 620', price: '₹1,999', del: '₹5,999', offer: '60% off', color1: 'lightred', color2: 'black', color3: 'lightblue', image1: NewAsus1, image2: Button1, image3: Button2, image4: Button3, image5: Button4 },
    {id: 'NewAsus2', pname: 'Stone 520', price: '₹1,999', del: '₹2,999', offer: '27% off', color1: 'grey',     color2: 'white', color3: 'black',     image1: NewAsus2, image2: Button1, image3: Button2, image4: Button3, image5: Button4 },
    {id: 'NewAsus3', pname: 'Stone 420', price: '₹1,999', del: '₹2,999', offer: '45% off', color1: 'yellow',   color2: 'black', color3: 'white',     image1: NewAsus3, image2: Button1, image3: Button2, image4: Button3, image5: Button4 },
    {id: 'NewAsus4', pname: 'Stone 320', price: '₹1,999', del: '₹2,999', offer: '68% off', color1: 'red',      color2: 'rose',  color3: 'lightblue', image1: NewAsus4, image2: Button1, image3: Button2, image4: Button3, image5: Button4 }, 
 
    {id: 'NewHuawei1', pname: 'Stone 620', price: '₹1,999', del: '₹5,999', offer: '60% off', color1: 'lightred', color2: 'black', color3: 'lightblue', image1: NewHuawei1, image2: Button1, image3: Button2, image4: Button3, image5: Button4 },
    {id: 'NewHuawei2', pname: 'Stone 520', price: '₹1,999', del: '₹2,999', offer: '27% off', color1: 'grey',     color2: 'white', color3: 'black',     image1: NewHuawei2, image2: Button1, image3: Button2, image4: Button3, image5: Button4 },
    {id: 'NewHuawei3', pname: 'Stone 420', price: '₹1,999', del: '₹2,999', offer: '45% off', color1: 'yellow',   color2: 'black', color3: 'white',     image1: NewHuawei3, image2: Button1, image3: Button2, image4: Button3, image5: Button4 },
    {id: 'NewHuawei4', pname: 'Stone 320', price: '₹1,999', del: '₹2,999', offer: '68% off', color1: 'red',      color2: 'rose',  color3: 'lightblue', image1: NewHuawei4, image2: Button1, image3: Button2, image4: Button3, image5: Button4 }, 

    {id: 'UsedMobile1', pname: ' Phone 620', price: '₹1,999', del: '₹5,999', offer: '60% off',  color1: 'red', color2: 'black', color3: 'lightblue', colormore: '+5', image1: UsedMobile1 ,image2: Button1, image3: Button2, image4: Button3, image5: Button4},
    {id: 'UsedMobile2', pname: ' Phone 520', price: '₹1,999', del: '₹2,999', offer: '27% off',  color1: 'grey', color2: 'white', color3: 'black', colormore: '+4',    image1: UsedMobile2 ,image2: Button1, image3: Button2, image4: Button3, image5: Button4},
    {id: 'UsedMobile3', pname: ' Phone 420', price: '₹1,999', del: '₹2,999', offer: '45% off',  color1: 'yellow', color2: 'white', color3: 'black', colormore: '+3',  image1: UsedMobile3 ,image2: Button1, image3: Button2, image4: Button3, image5: Button4},
    {id: 'UsedMobile4', pname: ' Phone 320', price: '₹1,999', del: '₹2,999', offer: '68% off',  color1: 'black', color2: 'lightblue', color3: 'red', colormore: '+5', image1: UsedMobile4 ,image2: Button1, image3: Button2, image4: Button3, image5: Button4},
    {id: 'UsedMobile5', pname: ' Phone 620', price: '₹1,999', del: '₹5,999', offer: '60% off',  color1: 'red', color2: 'black', color3: 'lightblue', colormore: '+5', image1: UsedMobile5 ,image2: Button1, image3: Button2, image4: Button3, image5: Button4},
    {id: 'UsedMobile6', pname: ' Phone 520', price: '₹1,999', del: '₹2,999', offer: '27% off',  color1: 'grey', color2: 'white', color3: 'black', colormore: '+4',    image1: UsedMobile6 ,image2: Button1, image3: Button2, image4: Button3, image5: Button4},
    {id: 'UsedMobile7', pname: ' Phone 420', price: '₹1,999', del: '₹2,999', offer: '45% off',  color1: 'yellow', color2: 'white', color3: 'black', colormore: '+3',  image1: UsedMobile7 ,image2: Button1, image3: Button2, image4: Button3, image5: Button4},
    {id: 'UsedMobile8', pname: ' Phone 320', price: '₹1,999', del: '₹2,999', offer: '68% off',  color1: 'black', color2: 'lightblue', color3: 'red', colormore: '+5', image1: UsedMobile8 ,image2: Button1, image3: Button2, image4: Button3, image5: Button4},
    {id: 'UsedMobile9', pname: ' Phone 620', price: '₹1,999', del: '₹5,999', offer: '60% off',  color1: 'red', color2: 'black', color3: 'lightblue', colormore: '+5', image1: UsedMobile9 ,image2: Button1, image3: Button2, image4: Button3, image5: Button4},
    {id: 'UsedMobile10', pname: 'Phone 520', price: '₹1,999', del: '₹2,999', offer: '27% off', color1: 'grey', color2: 'white', color3: 'black', colormore: '+4',    image1: UsedMobile10,image2: Button1, image3: Button2, image4: Button3, image5: Button4 },
    {id: 'UsedMobile11', pname: 'Phone 420', price: '₹1,999', del: '₹2,999', offer: '45% off', color1: 'yellow', color2: 'white', color3: 'black', colormore: '+3',  image1: UsedMobile11,image2: Button1, image3: Button2, image4: Button3, image5: Button4 },
    {id: 'UsedMobile12', pname: 'Phone 320', price: '₹1,999', del: '₹2,999', offer: '68% off', color1: 'black', color2: 'lightblue', color3: 'red', colormore: '+5', image1: UsedMobile12,image2: Button1, image3: Button2, image4: Button3, image5: Button4 },
    {id: 'UsedMobile13', pname: 'Phone 620', price: '₹1,999', del: '₹5,999', offer: '60% off', color1: 'red', color2: 'black', color3: 'lightblue', colormore: '+5', image1: UsedMobile13,image2: Button1, image3: Button2, image4: Button3, image5: Button4 },
    {id: 'UsedMobile14', pname: 'Phone 520', price: '₹1,999', del: '₹2,999', offer: '27% off', color1: 'grey', color2: 'white', color3: 'black', colormore: '+4',    image1: UsedMobile14,image2: Button1, image3: Button2, image4: Button3, image5: Button4 },
    {id: 'UsedMobile15', pname: 'Phone 420', price: '₹1,999', del: '₹2,999', offer: '45% off', color1: 'yellow', color2: 'white', color3: 'black', colormore: '+3',  image1: UsedMobile15,image2: Button1, image3: Button2, image4: Button3, image5: Button4 },
    {id: 'UsedMobile16', pname: 'Phone 320', price: '₹1,999', del: '₹2,999', offer: '68% off', color1: 'black', color2: 'lightblue', color3: 'red', colormore: '+5', image1: UsedMobile16,image2: Button1, image3: Button2, image4: Button3, image5: Button4 },
    {id: 'UsedMobile17', pname: 'Phone 620', price: '₹1,999', del: '₹5,999', offer: '60% off', color1: 'red', color2: 'black', color3: 'lightblue', colormore: '+5', image1: UsedMobile17,image2: Button1, image3: Button2, image4: Button3, image5: Button4 },
    {id: 'UsedMobile18', pname: 'Phone 520', price: '₹1,999', del: '₹2,999', offer: '27% off', color1: 'grey', color2: 'white', color3: 'black', colormore: '+4',    image1: UsedMobile18,image2: Button1, image3: Button2, image4: Button3, image5: Button4 },
    {id: 'UsedMobile19', pname: 'Phone 420', price: '₹1,999', del: '₹2,999', offer: '45% off', color1: 'yellow', color2: 'white', color3: 'black', colormore: '+3',  image1: UsedMobile19,image2: Button1, image3: Button2, image4: Button3, image5: Button4 },
    {id: 'UsedMobile20', pname: 'Phone 320', price: '₹1,999', del: '₹2,999', offer: '68% off', color1: 'black', color2: 'lightblue', color3: 'red', colormore: '+5', image1: UsedMobile20,image2: Button1, image3: Button2, image4: Button3, image5: Button4 },
    {id: 'UsedMobile21', pname: 'Phone 620', price: '₹1,999', del: '₹5,999', offer: '60% off', color1: 'red', color2: 'black', color3: 'lightblue', colormore: '+5', image1: UsedMobile21,image2: Button1, image3: Button2, image4: Button3, image5: Button4 },
    {id: 'UsedMobile22', pname: 'Phone 520', price: '₹1,999', del: '₹2,999', offer: '27% off', color1: 'grey', color2: 'white', color3: 'black', colormore: '+4',    image1: UsedMobile22,image2: Button1, image3: Button2, image4: Button3, image5: Button4 },
    {id: 'UsedMobile23', pname: 'Phone 420', price: '₹1,999', del: '₹2,999', offer: '45% off', color1: 'yellow', color2: 'white', color3: 'black', colormore: '+3',  image1: UsedMobile23,image2: Button1, image3: Button2, image4: Button3, image5: Button4 },
    {id: 'UsedMobile24', pname: 'Phone 320', price: '₹1,999', del: '₹2,999', offer: '68% off', color1: 'black', color2: 'lightblue', color3: 'red', colormore: '+5', image1: UsedMobile24,image2: Button1, image3: Button2, image4: Button3, image5: Button4 },
    {id: 'UsedMobile25', pname: 'Phone 620', price: '₹1,999', del: '₹5,999', offer: '60% off', color1: 'red', color2: 'black', color3: 'lightblue', colormore: '+5', image1: UsedMobile25,image2: Button1, image3: Button2, image4: Button3, image5: Button4 },
    {id: 'UsedMobile26', pname: 'Phone 520', price: '₹1,999', del: '₹2,999', offer: '27% off', color1: 'grey', color2: 'white', color3: 'black', colormore: '+4',    image1: UsedMobile26,image2: Button1, image3: Button2, image4: Button3, image5: Button4 },
    {id: 'UsedMobile27', pname: 'Phone 420', price: '₹1,999', del: '₹2,999', offer: '45% off', color1: 'yellow', color2: 'white', color3: 'black', colormore: '+3',  image1: UsedMobile27,image2: Button1, image3: Button2, image4: Button3, image5: Button4 },
    {id: 'UsedMobile28', pname: 'Phone 320', price: '₹1,999', del: '₹2,999', offer: '68% off', color1: 'black', color2: 'lightblue', color3: 'red', colormore: '+5', image1: UsedMobile28,image2: Button1, image3: Button2, image4: Button3, image5: Button4 },
    {id: 'UsedMobile29', pname: 'Phone 620', price: '₹1,999', del: '₹5,999', offer: '60% off', color1: 'red', color2: 'black', color3: 'lightblue', colormore: '+5', image1: UsedMobile29,image2: Button1, image3: Button2, image4: Button3, image5: Button4 },
    {id: 'UsedMobile30', pname: 'Phone 520', price: '₹1,999', del: '₹2,999', offer: '27% off', color1: 'grey', color2: 'white', color3: 'black', colormore: '+4',    image1: UsedMobile30,image2: Button1, image3: Button2, image4: Button3, image5: Button4 },
    {id: 'UsedMobile31', pname: 'Phone 420', price: '₹1,999', del: '₹2,999', offer: '45% off', color1: 'yellow', color2: 'white', color3: 'black', colormore: '+3',  image1: UsedMobile31,image2: Button1, image3: Button2, image4: Button3, image5: Button4 },
    {id: 'UsedMobile32', pname: 'Phone 320', price: '₹1,999', del: '₹2,999', offer: '68% off', color1: 'black', color2: 'lightblue', color3: 'red', colormore: '+5', image1: UsedMobile32,image2: Button1, image3: Button2, image4: Button3, image5: Button4 },
    {id: 'UsedMobile33', pname: 'Phone 620', price: '₹1,999', del: '₹5,999', offer: '60% off', color1: 'red', color2: 'black', color3: 'lightblue', colormore: '+5', image1: UsedMobile33,image2: Button1, image3: Button2, image4: Button3, image5: Button4 },
    {id: 'UsedMobile34', pname: 'Phone 520', price: '₹1,999', del: '₹2,999', offer: '27% off', color1: 'grey', color2: 'white', color3: 'black', colormore: '+4',    image1: UsedMobile34,image2: Button1, image3: Button2, image4: Button3, image5: Button4 },
    {id: 'UsedMobile35', pname: 'Phone 420', price: '₹1,999', del: '₹2,999', offer: '45% off', color1: 'yellow', color2: 'white', color3: 'black', colormore: '+3',  image1: UsedMobile35,image2: Button1, image3: Button2, image4: Button3, image5: Button4 },
    {id: 'UsedMobile36', pname: 'Phone 320', price: '₹1,999', del: '₹2,999', offer: '68% off', color1: 'black', color2: 'lightblue', color3: 'red', colormore: '+5', image1: UsedMobile36,image2: Button1, image3: Button2, image4: Button3, image5: Button4 },
    {id: 'UsedMobile37', pname: 'Phone 620', price: '₹1,999', del: '₹5,999', offer: '60% off', color1: 'red', color2: 'black', color3: 'lightblue', colormore: '+5', image1: UsedMobile37,image2: Button1, image3: Button2, image4: Button3, image5: Button4 },
    {id: 'UsedMobile38', pname: 'Phone 520', price: '₹1,999', del: '₹2,999', offer: '27% off', color1: 'grey', color2: 'white', color3: 'black', colormore: '+4',    image1: UsedMobile38,image2: Button1, image3: Button2, image4: Button3, image5: Button4 },
    {id: 'UsedMobile39', pname: 'Phone 420', price: '₹1,999', del: '₹2,999', offer: '45% off', color1: 'yellow', color2: 'white', color3: 'black', colormore: '+3',  image1: UsedMobile39,image2: Button1, image3: Button2, image4: Button3, image5: Button4 },
    {id: 'UsedMobile40', pname: 'Phone 320', price: '₹1,999', del: '₹2,999', offer: '68% off', color1: 'black', color2: 'lightblue', color3: 'red', colormore: '+5', image1: UsedMobile40,image2: Button1, image3: Button2, image4: Button3, image5: Button4 },
    {id: 'UsedMobile41', pname: 'Phone 620', price: '₹1,999', del: '₹5,999', offer: '60% off', color1: 'red', color2: 'black', color3: 'lightblue', colormore: '+5', image1: UsedMobile41,image2: Button1, image3: Button2, image4: Button3, image5: Button4 },
    {id: 'UsedMobile42', pname: 'Phone 520', price: '₹1,999', del: '₹2,999', offer: '27% off', color1: 'grey', color2: 'white', color3: 'black', colormore: '+4',    image1: UsedMobile42,image2: Button1, image3: Button2, image4: Button3, image5: Button4 },
    {id: 'UsedMobile43', pname: 'Phone 420', price: '₹1,999', del: '₹2,999', offer: '45% off', color1: 'yellow', color2: 'white', color3: 'black', colormore: '+3',  image1: UsedMobile43,image2: Button1, image3: Button2, image4: Button3, image5: Button4 },
    {id: 'UsedMobile44', pname: 'Phone 320', price: '₹1,999', del: '₹2,999', offer: '68% off', color1: 'black', color2: 'lightblue', color3: 'red', colormore: '+5', image1: UsedMobile44,image2: Button1, image3: Button2, image4: Button3, image5: Button4 },
    {id: 'UsedMobile45', pname: 'Phone 620', price: '₹1,999', del: '₹5,999', offer: '60% off', color1: 'red', color2: 'black', color3: 'lightblue', colormore: '+5', image1: UsedMobile45,image2: Button1, image3: Button2, image4: Button3, image5: Button4 },
    {id: 'UsedMobile46', pname: 'Phone 520', price: '₹1,999', del: '₹2,999', offer: '27% off', color1: 'grey', color2: 'white', color3: 'black', colormore: '+4',    image1: UsedMobile46,image2: Button1, image3: Button2, image4: Button3, image5: Button4 },
    {id: 'UsedMobile47', pname: 'Phone 420', price: '₹1,999', del: '₹2,999', offer: '45% off', color1: 'yellow', color2: 'white', color3: 'black', colormore: '+3',  image1: UsedMobile47,image2: Button1, image3: Button2, image4: Button3, image5: Button4 },
    {id: 'UsedMobile48', pname: 'Phone 320', price: '₹1,999', del: '₹2,999', offer: '68% off', color1: 'black', color2: 'lightblue', color3: 'red', colormore: '+5', image1: UsedMobile48,image2: Button1, image3: Button2, image4: Button3, image5: Button4 },

    {id: 'DemoMobile1', pname: ' Phone 620', price: '₹1,999', del: '₹5,999', offer: '60% off',  color1: 'red', color2: 'black', color3: 'lightblue', colormore: '+5',  image1: DemoMobile1 ,image2: Button1, image3: Button2, image4: Button3, image5: Button4},
    {id: 'DemoMobile2', pname: ' Phone 520', price: '₹1,999', del: '₹2,999', offer: '27% off',  color1: 'grey', color2: 'white', color3: 'black', colormore: '+4',     image1: DemoMobile2 ,image2: Button1, image3: Button2, image4: Button3, image5: Button4},
    {id: 'DemoMobile3', pname: ' Phone 420', price: '₹1,999', del: '₹2,999', offer: '45% off',  color1: 'yellow', color2: 'white', color3: 'black', colormore: '+3',   image1: DemoMobile3 ,image2: Button1, image3: Button2, image4: Button3, image5: Button4},
    {id: 'DemoMobile4', pname: ' Phone 320', price: '₹1,999', del: '₹2,999', offer: '68% off',  color1: 'black', color2: 'lightblue', color3: 'red', colormore: '+5',  image1: DemoMobile4 ,image2: Button1, image3: Button2, image4: Button3, image5: Button4},
    {id: 'DemoMobile5', pname: ' Phone 620', price: '₹1,999', del: '₹5,999', offer: '60% off',  color1: 'red', color2: 'black', color3: 'lightblue', colormore: '+5',  image1: DemoMobile5 ,image2: Button1, image3: Button2, image4: Button3, image5: Button4},
    {id: 'DemoMobile6', pname: ' Phone 520', price: '₹1,999', del: '₹2,999', offer: '27% off',  color1: 'grey', color2: 'white', color3: 'black', colormore: '+4',     image1: DemoMobile6 ,image2: Button1, image3: Button2, image4: Button3, image5: Button4},
    {id: 'DemoMobile7', pname: ' Phone 420', price: '₹1,999', del: '₹2,999', offer: '45% off',  color1: 'yellow', color2: 'white', color3: 'black', colormore: '+3',   image1: DemoMobile7 ,image2: Button1, image3: Button2, image4: Button3, image5: Button4},
    {id: 'DemoMobile8', pname: ' Phone 320', price: '₹1,999', del: '₹2,999', offer: '68% off',  color1: 'black', color2: 'lightblue', color3: 'red', colormore: '+5',  image1: DemoMobile8 ,image2: Button1, image3: Button2, image4: Button3, image5: Button4},
    {id: 'DemoMobile9', pname: ' Phone 620', price: '₹1,999', del: '₹5,999', offer: '60% off',  color1: 'red', color2: 'black', color3: 'lightblue', colormore: '+5',  image1: DemoMobile9 ,image2: Button1, image3: Button2, image4: Button3, image5: Button4},
    {id: 'DemoMobile10', pname: 'Phone 520', price: '₹1,999', del: '₹2,999', offer: '27% off', color1: 'grey', color2: 'white', color3: 'black', colormore: '+4',    image1: DemoMobile10 ,image2: Button1, image3: Button2, image4: Button3, image5: Button4},
    {id: 'DemoMobile11', pname: 'Phone 420', price: '₹1,999', del: '₹2,999', offer: '45% off', color1: 'yellow', color2: 'white', color3: 'black', colormore: '+3',  image1: DemoMobile11 ,image2: Button1, image3: Button2, image4: Button3, image5: Button4},
    {id: 'DemoMobile12', pname: 'Phone 320', price: '₹1,999', del: '₹2,999', offer: '68% off', color1: 'black', color2: 'lightblue', color3: 'red', colormore: '+5', image1: DemoMobile12 ,image2: Button1, image3: Button2, image4: Button3, image5: Button4},
    {id: 'DemoMobile13', pname: 'Phone 620', price: '₹1,999', del: '₹5,999', offer: '60% off', color1: 'red', color2: 'black', color3: 'lightblue', colormore: '+5', image1: DemoMobile13 ,image2: Button1, image3: Button2, image4: Button3, image5: Button4},
    {id: 'DemoMobile14', pname: 'Phone 520', price: '₹1,999', del: '₹2,999', offer: '27% off', color1: 'grey', color2: 'white', color3: 'black', colormore: '+4',    image1: DemoMobile14 ,image2: Button1, image3: Button2, image4: Button3, image5: Button4},
    {id: 'DemoMobile15', pname: 'Phone 420', price: '₹1,999', del: '₹2,999', offer: '45% off', color1: 'yellow', color2: 'white', color3: 'black', colormore: '+3',  image1: DemoMobile15 ,image2: Button1, image3: Button2, image4: Button3, image5: Button4},
    {id: 'DemoMobile16', pname: 'Phone 320', price: '₹1,999', del: '₹2,999', offer: '68% off', color1: 'black', color2: 'lightblue', color3: 'red', colormore: '+5', image1: DemoMobile16 ,image2: Button1, image3: Button2, image4: Button3, image5: Button4},
    {id: 'DemoMobile17', pname: 'Phone 620', price: '₹1,999', del: '₹5,999', offer: '60% off', color1: 'red', color2: 'black', color3: 'lightblue', colormore: '+5', image1: DemoMobile17 ,image2: Button1, image3: Button2, image4: Button3, image5: Button4},
    {id: 'DemoMobile18', pname: 'Phone 520', price: '₹1,999', del: '₹2,999', offer: '27% off', color1: 'grey', color2: 'white', color3: 'black', colormore: '+4',    image1: DemoMobile18 ,image2: Button1, image3: Button2, image4: Button3, image5: Button4},
    {id: 'DemoMobile19', pname: 'Phone 420', price: '₹1,999', del: '₹2,999', offer: '45% off', color1: 'yellow', color2: 'white', color3: 'black', colormore: '+3',  image1: DemoMobile19 ,image2: Button1, image3: Button2, image4: Button3, image5: Button4},
    {id: 'DemoMobile20', pname: 'Phone 320', price: '₹1,999', del: '₹2,999', offer: '68% off', color1: 'black', color2: 'lightblue', color3: 'red', colormore: '+5', image1: DemoMobile20 ,image2: Button1, image3: Button2, image4: Button3, image5: Button4},
    {id: 'DemoMobile21', pname: 'Phone 620', price: '₹1,999', del: '₹5,999', offer: '60% off', color1: 'red', color2: 'black', color3: 'lightblue', colormore: '+5', image1: DemoMobile21 ,image2: Button1, image3: Button2, image4: Button3, image5: Button4},
    {id: 'DemoMobile22', pname: 'Phone 520', price: '₹1,999', del: '₹2,999', offer: '27% off', color1: 'grey', color2: 'white', color3: 'black', colormore: '+4',    image1: DemoMobile22 ,image2: Button1, image3: Button2, image4: Button3, image5: Button4},
    {id: 'DemoMobile23', pname: 'Phone 420', price: '₹1,999', del: '₹2,999', offer: '45% off', color1: 'yellow', color2: 'white', color3: 'black', colormore: '+3',  image1: DemoMobile23 ,image2: Button1, image3: Button2, image4: Button3, image5: Button4},
    {id: 'DemoMobile24', pname: 'Phone 320', price: '₹1,999', del: '₹2,999', offer: '68% off', color1: 'black', color2: 'lightblue', color3: 'red', colormore: '+5', image1: DemoMobile24 ,image2: Button1, image3: Button2, image4: Button3, image5: Button4},
    {id: 'DemoMobile25', pname: 'Phone 620', price: '₹1,999', del: '₹5,999', offer: '60% off', color1: 'red', color2: 'black', color3: 'lightblue', colormore: '+5', image1: DemoMobile25 ,image2: Button1, image3: Button2, image4: Button3, image5: Button4},
    {id: 'DemoMobile26', pname: 'Phone 520', price: '₹1,999', del: '₹2,999', offer: '27% off', color1: 'grey', color2: 'white', color3: 'black', colormore: '+4',    image1: DemoMobile26 ,image2: Button1, image3: Button2, image4: Button3, image5: Button4},
    {id: 'DemoMobile27', pname: 'Phone 420', price: '₹1,999', del: '₹2,999', offer: '45% off', color1: 'yellow', color2: 'white', color3: 'black', colormore: '+3',  image1: DemoMobile27 ,image2: Button1, image3: Button2, image4: Button3, image5: Button4},
    {id: 'DemoMobile28', pname: 'Phone 320', price: '₹1,999', del: '₹2,999', offer: '68% off', color1: 'black', color2: 'lightblue', color3: 'red', colormore: '+5', image1: DemoMobile28 ,image2: Button1, image3: Button2, image4: Button3, image5: Button4},
    {id: 'DemoMobile29', pname: 'Phone 620', price: '₹1,999', del: '₹5,999', offer: '60% off', color1: 'red', color2: 'black', color3: 'lightblue', colormore: '+5', image1: DemoMobile29 ,image2: Button1, image3: Button2, image4: Button3, image5: Button4},
    {id: 'DemoMobile30', pname: 'Phone 520', price: '₹1,999', del: '₹2,999', offer: '27% off', color1: 'grey', color2: 'white', color3: 'black', colormore: '+4',    image1: DemoMobile30 ,image2: Button1, image3: Button2, image4: Button3, image5: Button4},
    {id: 'DemoMobile31', pname: 'Phone 420', price: '₹1,999', del: '₹2,999', offer: '45% off', color1: 'yellow', color2: 'white', color3: 'black', colormore: '+3',  image1: DemoMobile31 ,image2: Button1, image3: Button2, image4: Button3, image5: Button4},
    {id: 'DemoMobile32', pname: 'Phone 320', price: '₹1,999', del: '₹2,999', offer: '68% off', color1: 'black', color2: 'lightblue', color3: 'red', colormore: '+5', image1: DemoMobile32 ,image2: Button1, image3: Button2, image4: Button3, image5: Button4},
    {id: 'DemoMobile33', pname: 'Phone 620', price: '₹1,999', del: '₹5,999', offer: '60% off', color1: 'red', color2: 'black', color3: 'lightblue', colormore: '+5', image1: DemoMobile33 ,image2: Button1, image3: Button2, image4: Button3, image5: Button4},
    {id: 'DemoMobile34', pname: 'Phone 520', price: '₹1,999', del: '₹2,999', offer: '27% off', color1: 'grey', color2: 'white', color3: 'black', colormore: '+4',    image1: DemoMobile34 ,image2: Button1, image3: Button2, image4: Button3, image5: Button4},
    {id: 'DemoMobile35', pname: 'Phone 420', price: '₹1,999', del: '₹2,999', offer: '45% off', color1: 'yellow', color2: 'white', color3: 'black', colormore: '+3',  image1: DemoMobile35 ,image2: Button1, image3: Button2, image4: Button3, image5: Button4},
    {id: 'DemoMobile36', pname: 'Phone 320', price: '₹1,999', del: '₹2,999', offer: '68% off', color1: 'black', color2: 'lightblue', color3: 'red', colormore: '+5', image1: DemoMobile36 ,image2: Button1, image3: Button2, image4: Button3, image5: Button4},
    {id: 'DemoMobile37', pname: 'Phone 620', price: '₹1,999', del: '₹5,999', offer: '60% off', color1: 'red', color2: 'black', color3: 'lightblue', colormore: '+5', image1: DemoMobile37 ,image2: Button1, image3: Button2, image4: Button3, image5: Button4},
    {id: 'DemoMobile38', pname: 'Phone 520', price: '₹1,999', del: '₹2,999', offer: '27% off', color1: 'grey', color2: 'white', color3: 'black', colormore: '+4',    image1: DemoMobile38 ,image2: Button1, image3: Button2, image4: Button3, image5: Button4},
    {id: 'DemoMobile39', pname: 'Phone 420', price: '₹1,999', del: '₹2,999', offer: '45% off', color1: 'yellow', color2: 'white', color3: 'black', colormore: '+3',  image1: DemoMobile39 ,image2: Button1, image3: Button2, image4: Button3, image5: Button4},
    {id: 'DemoMobile40', pname: 'Phone 320', price: '₹1,999', del: '₹2,999', offer: '68% off', color1: 'black', color2: 'lightblue', color3: 'red', colormore: '+5', image1: DemoMobile40 ,image2: Button1, image3: Button2, image4: Button3, image5: Button4},
    {id: 'DemoMobile41', pname: 'Phone 620', price: '₹1,999', del: '₹5,999', offer: '60% off', color1: 'red', color2: 'black', color3: 'lightblue', colormore: '+5', image1: DemoMobile41 ,image2: Button1, image3: Button2, image4: Button3, image5: Button4},
    {id: 'DemoMobile42', pname: 'Phone 520', price: '₹1,999', del: '₹2,999', offer: '27% off', color1: 'grey', color2: 'white', color3: 'black', colormore: '+4',    image1: DemoMobile42 ,image2: Button1, image3: Button2, image4: Button3, image5: Button4},
    {id: 'DemoMobile43', pname: 'Phone 420', price: '₹1,999', del: '₹2,999', offer: '45% off', color1: 'yellow', color2: 'white', color3: 'black', colormore: '+3',  image1: DemoMobile43 ,image2: Button1, image3: Button2, image4: Button3, image5: Button4},
    {id: 'DemoMobile44', pname: 'Phone 320', price: '₹1,999', del: '₹2,999', offer: '68% off', color1: 'black', color2: 'lightblue', color3: 'red', colormore: '+5', image1: DemoMobile44 ,image2: Button1, image3: Button2, image4: Button3, image5: Button4},
    {id: 'DemoMobile45', pname: 'Phone 620', price: '₹1,999', del: '₹5,999', offer: '60% off', color1: 'red', color2: 'black', color3: 'lightblue', colormore: '+5', image1: DemoMobile45 ,image2: Button1, image3: Button2, image4: Button3, image5: Button4},
    {id: 'DemoMobile46', pname: 'Phone 520', price: '₹1,999', del: '₹2,999', offer: '27% off', color1: 'grey', color2: 'white', color3: 'black', colormore: '+4',    image1: DemoMobile46 ,image2: Button1, image3: Button2, image4: Button3, image5: Button4},
    {id: 'DemoMobile47', pname: 'Phone 420', price: '₹1,999', del: '₹2,999', offer: '45% off', color1: 'yellow', color2: 'white', color3: 'black', colormore: '+3',  image1: DemoMobile47 ,image2: Button1, image3: Button2, image4: Button3, image5: Button4},
    {id: 'DemoMobile48', pname: 'Phone 320', price: '₹1,999', del: '₹2,999', offer: '68% off', color1: 'black', color2: 'lightblue', color3: 'red', colormore: '+5', image1: DemoMobile48 ,image2: Button1, image3: Button2, image4: Button3, image5: Button4},

    {id: 'BestSeller1', pname: 'Iphone 15 pro max',     price: '₹1,55,599', del: '₹1,95,999', offer: '25% off', hour: 'Best All Rounder', color1:'red', color2:'black', color3:'lightblue', colormore: '+5',    image1: BSPhone1, image2: Button1, image3: Button2, image4: Button3, image5: Button4 },
    {id: 'BestSeller2', pname: 'Samsung S24 Ultra', price: '₹1,05,999', del: '₹1,55,599', offer: '35% off', hour: 'Best Camera Mobile', color1: 'grey', color2: 'white', color3: 'black', colormore: '+4', image1: BSPhone2, image2: Button1, image3: Button2, image4: Button3, image5: Button4 },
    {id: 'BestSeller3', pname: 'iQOO 12 pro', price: '₹58,999', del: '₹75,999', offer: '25% off', hour: 'Best Gaming Mobile', color1: 'white', color2: 'black', color3: 'blue', colormore: '+3',             image1: BSPhone3, image2: Button1, image3: Button2, image4: Button3, image5: Button4 },
    {id: 'BestSeller4', pname: 'One plus 12 pro', price: '₹55,999', del: '₹72,999', offer: '25% off', hour: 'Best Value for Money', color1: 'red', color2: 'black', color3: 'blue', colormore: '+5',       image1: BSPhone4, image2: Button1, image3: Button2, image4: Button3, image5: Button4 },

    {id: 'BestSeller5', pname: 'Xiaomi 12s Ultra',     price: '₹1,55,599', del: '₹1,95,999', offer: '25% off', hour: 'Best All Rounder', color1:'red', color2:'black', color3:'blue', colormore: '+5',    image1: BSPhone5, image2: Button1, image3: Button2, image4: Button3, image5: Button4 },
    {id: 'BestSeller6', pname: 'Realme Gt 6 Pro', price: '₹1,05,999', del: '₹1,55,599', offer: '35% off', hour: 'Best Camera Mobile', color1: 'grey', color2: 'white', color3: 'black', colormore: '+4', image1: BSPhone6, image2: Button1, image3: Button2, image4: Button3, image5: Button4 },
    {id: 'BestSeller7', pname: 'Asus 7 Ultimate', price: '₹58,999', del: '₹75,999', offer: '25% off', hour: 'Best Gaming Mobile', color1: 'red', color2: 'black', color3: 'blue', colormore: '+3',             image1: BSPhone7, image2: Button1, image3: Button2, image4: Button3, image5: Button4 },
    {id: 'BestSeller8', pname: 'Vivo X100 Pro', price: '₹55,999', del: '₹72,999', offer: '25% off', hour: 'Best Value for Money', color1: 'red', color2: 'black', color3: 'blue', colormore: '+5',       image1: BSPhone8, image2: Button1, image3: Button2, image4: Button3, image5: Button4 },

]
export function AllMobileCards() {

    const Buybtn =()=>{
        swal({
            title: "Are you sure?",
            text: "Please ensure that once an order is placed, it cannot be canceled.",
            icon: "warning",
            buttons: true,
            dangerMode: true,
          })
          .then((willDelete) => {
            if (willDelete) {
              swal("Order placed successfully.", {
                icon: "success",
              });
            } else {
              swal("You no longer need this product.",{
                icon: "warning",
              });
            }
          });
    }
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
    
    
    const [activeButton, setActiveButton] = useState(1);

    const handleMouseEnter = (buttonNumber) => {
        setActiveButton(buttonNumber);
    };

    const { id } = useParams();
    const navigate = useNavigate();
    const card = cards.find((card) => card.id === id);
  
    if (!card) {
      return <h2>Card not found</h2>;
    }  

    return (
        <>

            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css"
                integrity="sha512-z3gLpd7yknf1YoNbCzqRKc4qyor8gaKU1qmn+CShxbuBusANI9QpRohGBreCFkKxLhei6S9CQXFEbbKuqLg0DA=="
                crossorigin="anonymous" referrerpolicy="no-referrer" />

            <div className="Allcards-main">
                <div className="row">
                    <h1 style={{ fontSize:15, fontFamily: "'Metropolis', sans-serif", color:"rgba(0, 0, 0, 0.253)",}}>Details about the Mobile can be found below</h1>
                    <div className="Allcards-mini">
                        <button className="Allcards-mini-btn" onMouseEnter={() => handleMouseEnter(1)} ><img className="Allcards-mini-img" src={card.image1} alt="Image 1"/></button>
                        <button className="Allcards-mini-btn" onMouseEnter={() => handleMouseEnter(2)} ><img className="Allcards-mini-img" src={card.image2} alt="Image 2" /></button>
                        <button className="Allcards-mini-btn" onMouseEnter={() => handleMouseEnter(3)} ><img className="Allcards-mini-img" src={card.image3} alt="Image 3" /></button>
                        <button className="Allcards-mini-btn" onMouseEnter={() => handleMouseEnter(4)} ><img className="Allcards-mini-img" src={card.image4} alt="Image 4" /></button>
                        <button className="Allcards-mini-btn" onMouseEnter={() => handleMouseEnter(5)} ><img className="Allcards-mini-img" src={card.image5} alt="Image 5" /></button>
                    </div>
                    <div className="Allcards-left">
                        {activeButton === 1 && <img className="Allcards-img" src={card.image1} alt="Image 1" />}
                        {activeButton === 2 && <img className="Allcards-img" src={card.image2} alt="Image 2" />}
                        {activeButton === 3 && <img className="Allcards-img" src={card.image3} alt="Image 3" />}
                        {activeButton === 4 && <img className="Allcards-img" src={card.image4} alt="Image 4" />}
                        {activeButton === 5 && <img className="Allcards-img" src={card.image5} alt="Image 5" />}
                    </div>
                    <div className="Allcards-right">
                        <h2 className="header-star"><i class=" star1 fa-solid fa-star"></i> 5.0 | 1000+ reviews <img className="header-check" src={check1} alt="" /></h2>
                        <h1 className="card-name"><span>{card.pname}</span></h1>
                        <p><span> Smartphone with up to 40 hours of battery life for extended use. IPX5 water and sweat resistance for durability in various conditions. Features IWP Technology and a Type-C interface for seamless connectivity and fast charging. </span></p>
                        <h3 className="card-name-h3"> {card.price} <del>{card.del}</del> <span>{card.offer}</span></h3>
                        <h4 className="card-name-h4">Choose your colour :</h4>
                        <h5 className="card-name-h5">
                            <i onMouseEnter={() => handleMouseEnter(5)} style={{ color:card.color1}} className="fa-solid fa-circle iconcolor"></i>
                            <i onMouseEnter={() => handleMouseEnter(1)} style={{ color:card.color2}} className="fa-solid fa-circle iconcolor"></i>
                            <i onMouseEnter={() => handleMouseEnter(3)} style={{ color:card.color3}} className="fa-solid fa-circle iconcolor"></i>
                        </h5>
                        <h6 className="card-name-h6">Check Delivery</h6>
                        <div className="check-Delivery">
                            <h1 className="free">Free Delivery <span className="by">| By tomorrow</span></h1>
                            <h1 className="order">If ordered within <span className="hrs"> 2 hrs 55 min</span></h1>
                        </div>
                        <button onClick={Cartbtn} className="Allcards-btn"> <i class="fa-solid fa-cart-shopping"></i> Add to cart</button>
                        <button onClick={Buybtn} className="Allcards-btn buy"> <i class="fa-solid fa-bolt-lightning"></i> Buy Now</button>
                    </div>

                </div>
            </div>
        </>
    )
}



