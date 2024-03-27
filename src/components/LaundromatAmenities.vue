<template>
    <div class="main-laundromat-amenities" data-aos="fade-down" data-aos-delay="200">
        <div class="amenities-row">
            <h2>Our Laundromat Amenities</h2>
            <div class="amenities-list">
                <div class="amenities-list-1">
                    <ul>
                        <li><i class="fa-solid fa-circle-check"></i>&nbsp;Fully Attended</li>
                        <li><i class="fa-solid fa-circle-check"></i>&nbsp;Drop-Off Laundry Service</li>
                        <li><i class="fa-solid fa-circle-check"></i>&nbsp;Pickup &amp; Delivery</li>
                        <li><i class="fa-solid fa-circle-check"></i>&nbsp;Free Wi-Fi</li>
                        <li><i class="fa-solid fa-circle-check"></i>&nbsp;Snack &amp; Soap Vending Machines</li>
                        <li><i class="fa-solid fa-circle-check"></i>&nbsp;24 Hour Security Surveillance</li>
                    </ul>
                </div>
                <div class="amenities-list-2">
                    <ul>
                        <li><i class="fa-solid fa-circle-check"></i>&nbsp;Change Machine</li>
                        <li><i class="fa-solid fa-circle-check"></i>&nbsp;Always Bright & Clean</li>
                        <li><i class="fa-solid fa-circle-check"></i>&nbsp;Touchless Card System</li>
                        <li><i class="fa-solid fa-circle-check"></i>&nbsp;Text Alerts When Laundry is Done</li>
                        <li><i class="fa-solid fa-circle-check"></i>&nbsp;Fully Air Conditioned</li>
                        <li><i class="fa-solid fa-circle-check"></i>&nbsp;Ample Laundry Carts</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import AOS from 'aos';
import 'aos/dist/aos.css';

export default {
    name: 'LaundryAmenities',
    mounted() {
        AOS.init();
    }
}
</script>
<style>
.amenities-list {
    display: flex;
    flex-direction: row;
}
@media(max-width:600px){
    .amenities-list {
        flex-direction: column;
    }
}
.amenities-list i {
    color: rgb(38, 212, 25);
}
.amenities-list ul {
    list-style-type: none;
}
.amenities-list li{
    font-size: 20px; 
    padding-bottom: 10px;
}
@media(max-width:768px){
    .amenities-list li {
        font-size: 17px;
    }
}
@media(max-width:600px){
    .amenities-list li {
        font-size: 15px;
    }
}
@media(max-width:320px){
    .amenities-list li {
        font-size: 14px;
    }
}
.main-laundromat-amenities {
    width: 100%;
    display: inline-block;
    position: relative;
    padding: 72px 0 72px;
    color: #fff;
    background-position: bottom;
    background: url(@/assets/images/blue.jpg) no-repeat center;
    background-size: cover;
}
.amenities-row {
    max-width: 1540px;
    margin-left: auto;
    margin-right: auto;
}
.amenities-row h2 {
    margin: 10px;
    margin-left: 35px;
    padding: 25px;
    font-size: 45px;
}
@media(max-width:600px){
    .amenities-row h2 {
        font-size: 30px;
    }
}
@media(max-width:320px){
    .amenities-row h2 {
        font-size: 25px;
    }
}
.amenities-list-1,
.amenities-list-2{
    margin: 20px;
}
</style>