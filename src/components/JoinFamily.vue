<template>
    <div class="parent-charges">
       <div class="pickup-row">
          <div class="pickup-head">
             <img src="@/assets/images/rect.png" alt="">
             <h1>JOIN THE WAVEMAX FAMILY</h1>
             <p>Want to join our team? We'd love to work with you!</p>
              
             <p>FULL & PART-TIME POSITIONS</p>
          </div>
          <div class="pickup-btn">
             <button>Learn More & Apply!</button>
          </div>
       </div>
    </div>
 </template>
 
 <script>
 export default {
    name: 'JoinFamily',
    data() {
       return {
 
       };
    },
 };
 </script>
 
 <style>
 .pickup-btn button {
    width: 170px!important;
 }
 .pickup-row {
    margin-top: 50px;
    margin-bottom: 50px;
    background: #fff;
 }
 
 .row-2-description i {
    color: rgb(6, 152, 26);
 }
 
 .row-2-description {
    padding-left: 55px !important;
    padding-right: 55px !important;
    background-color: #fff;
    padding: 25px 20px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
    position: relative;
    display: flex;
    flex-direction: column;
    line-height: 10px;
    text-align: left;
 }
 
 .row-2-description h5 {
    line-height: 2rem;
    font-size: 15px;
 }
 
 @media(max-width:330px) {
    .row-2-description h5 {
       line-height: 1rem;
       font-size: 10px;
    }
 }
 
 .row-2-item {
    padding-top: 5px !important;
    padding-bottom: 5px !important;
    width: 80%;
    background-color: #fff;
    padding: 20px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
    position: relative;
 }
 
 .row-2-item h1 {
    font-size: 25px;
 }
 
 .row-2-span {
    justify-content: center;
    background-color: #284ea0;
    width: 90%;
 }
 
 .main-charges {
    background: rgb(239, 238, 238);
    padding-top: 50px;
    padding-bottom: 70px;
    display: flex;
    flex-direction: column;
    text-align: center;
 }
 
 .charges-row-2 {
    align-items: center;
    max-width: 1200px;
    margin-left: auto;
    margin-right: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
 }
 
 .charges-row-1 {
    margin-top: 30px;
    margin-bottom: 30px;
    max-width: 900px;
    text-align: center;
    margin-left: auto;
    margin-right: auto;
    background: #88b3df;
    color: #fff;
    padding: 1.5em;
    border: 10px solid #0072c4;
    border-radius: 0.5em;
 }
 </style>