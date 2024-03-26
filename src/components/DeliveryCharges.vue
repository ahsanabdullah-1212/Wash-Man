<template>
   <div class="parent-charges">
      <div class="main-charges">
         <div class="charges-row-1">
            <h2>PICKUP & DELIVERY</h2>
            <h1>$1.99</h1>
            <p>Per Pound One Time. Trip charges may apply
               depending on location. Minimum 17lbs.</p>
         </div>
         <div class="charges-row-2">
            <div class="row-2-item">
               <h1>Special Item</h1>
            </div>
            <div class="row-2-span">
               <br>
            </div>
            <div class="row-2-description">
               <h5><i class="fa-solid fa-check"></i>&nbsp;&nbsp;Regular Twin/Full Comforter: $12</h5>
               <h5><i class="fa-solid fa-check"></i>&nbsp;&nbsp;Regular Queen/King Comforter: $15</h5>
               <h5><i class="fa-solid fa-check"></i>&nbsp;&nbsp;Down Twin/Full Comforter: $17</h5>
               <h5><i class="fa-solid fa-check"></i>&nbsp;&nbsp;Down Queen/King Comforter: $20</h5>
               <h5><i class="fa-solid fa-check"></i>&nbsp;&nbsp;Regular Pillows: $5</h5>
               <h5><i class="fa-solid fa-check"></i>&nbsp;&nbsp;Down Pillows: $10</h5>
               <h5><i class="fa-solid fa-check"></i>&nbsp;&nbsp;Regular Sleeping Bags: $12</h5>
               <h5><i class="fa-solid fa-check"></i>&nbsp;&nbsp;Down Sleeping Bags: $17</h5>
            </div>
            <div class="row-2-span">
               <br>
            </div>
            <div class="row-2-item">
               <h1>Pricing</h1>
            </div>
         </div>

      </div>
      <div class="pickup-row">
         <div class="pickup-head">
            <img src="@/assets/images/rect.png" alt="">
            <h1>SERVICE AREAS</h1>
            <p>We offer residential pickup and delivery throughout Arlington, Mansfield, Kennedale, Grand Prairie, Fort
               Worth, Bedford, North Richland Hills, Hurst, and Haltom City.</p>
         </div>
         <div class="pickup-btn">
            <button>Schedule a Pickup</button>
         </div>
      </div>
   </div>
</template>

<script>
export default {
   name: 'DeliveryCharges',
   data() {
      return {

      };
   },
};
</script>

<style>
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