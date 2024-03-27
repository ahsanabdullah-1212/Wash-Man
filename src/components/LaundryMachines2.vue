<template>
    <div class="main-laundry-machine">
        <div class="laundry-machine">

        </div>
        <div class="laundry-machine-row-2">
            <div class="laundry-machine-row-2-col-1" data-aos="fade-down" data-aos-delay="200">
                <h2>CLEANER. <span style="color: #8fbe00;">FASTER.</span>SAFER. <br> <span style="color: #000;">PRICING
                        AND DISCOUNTS</span></h2>
                <img src="@/assets/images/separator.png" alt="">
            </div>
            <div class="laundry-machine-row-2-col-2" data-aos="fade-up" data-aos-delay="200">
                <h2>DROP OFF LAUNDRY PRICING:</h2>
                <br>
                <p>For $1.39lb. 12lb minimum, we wash, dry, and fold your clothes and have them ready for pick-up in
                    24hrs</p>
                <br>
                <p>Same-day Wash, Dry & Fold Service for $1.69lb, 12lb minimum. Drop off your laundry, and we'll have it
                    ready on the same day.</p>
            </div>
        </div>
    </div>
</template>

<script>
import AOS from 'aos';
import 'aos/dist/aos.css';

export default {
    name: 'LaundryMachines2',
    mounted() {
        AOS.init();
    }
}
</script>
<style>
.laundry-machine-row-2-col-2 p {
    font-size: 22px;
    color: #000;
}

@media(max-width:1024px) {
    .laundry-machine-row-2-col-2 p {
        margin-top: 5px;
        font-size: 14px;
    }
}

.laundry-machine-row-2-col-1 {
    margin: 15px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 50%;
}

@media(max-width:600px) {
    .laundry-machine-row-2-col-1 img {
        display: none;
    }

}

.laundry-machine-row-2-col-2 {
    margin: 15px;
    width: 50%;
}

@media(max-width:600px) {
    .laundry-machine-row-2-col-2 {
        width: auto;
    }
}

.laundry-machine-row-2-col-1 h2 {
    color: #0072c4;
    font-size: 50px;
    font-weight: bolder;
    position: relative;
}

@media(max-width:1024px) {
    .laundry-machine-row-2-col-1 h2 {
        font-size: 37px;
    }
}

@media(max-width:768px) {
    .laundry-machine-row-2-col-1 h2 {
        font-size: 24px;
    }
}

@media(max-width:1600px) {
    .laundry-machine-row-2-col-1 {
        font-size: 22px;
    }
}

@media(max-width:600px) {
    .laundry-machine-row-2-col-1 {
        width: auto;
    }
}

.laundry-machine-row-2 {
    display: flex;
    max-width: 1945px;
    padding: 100px;
    flex-direction: row;
    justify-content: center;
}

@media(max-width:1024px) {
    .laundry-machine-row-2 {
        padding-top: 20px;
    }
}

@media(max-width:768px) {
    .laundry-machine-row-2 {
        padding: 57px;
        padding-top: 10px !important;
    }
}

@media(max-width:600px) {
    .laundry-machine-row-2 {
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
}

.laundry-machine-col-1 {
    margin: 10px;
    display: flex;
    padding: 65px;
    flex-direction: column;
    width: 40%;
}

@media(max-width:600px) {
    .laundry-machine-col-1 {
        padding-bottom: 10px;
        padding-bottom: 10px;
        padding: 0px;
        margin: 46px;
        width: auto;
    }
}

.laundry-machine-col-1 p {
    color: #000;
    font-size: 20px;
}

@media(max-width:1024px) {
    .laundry-machine-col-1 p {
        font-size: 15px;
    }
}

.laundry-machine-col-1 h2 {
    font-size: 46.22px;
    margin-top: 30px;
    margin-bottom: 30px;
    color: #000;
}

@media(max-width:1024px) {
    .laundry-machine-col-1 h2 {
        font-size: 30.22px;
    }
}

@media(max-width:768px) {
    .laundry-machine-col-1 h2 {
        font-size: 20.22px;
        margin-bottom: 0px;
    }
}

.laundry-machine-col-1 img {

    width: 7rem;
}

.laundry-machine-col-2 {
    margin: 10px;
    display: flex;
    padding: 35px;
    width: 40%;
    justify-content: center;
    flex-direction: row;
}

@media(max-width:768px) {
    .laundry-machine-col-2 {
        flex-direction: column;
    }
}

@media(max-width:600px) {
    .laundry-machine-col-2 {
        width: auto;
        padding: 0px;
    }
}

.laundry-machine-col-2-col-1 {
    display: flex;
    justify-content: center;
}

.laundry-machine-col-2-col-1 img {
    height: 21rem;
    margin: 20px;
}

@media(max-width:1024px) {
    .laundry-machine-col-2-col-1 img {
        height: 11rem;
    }
}

@media(max-width:600px) {
    .laundry-machine-col-2-col-1 img {
        height: 15rem;
    }
}

.laundry-machine-col-2-col-2 img {
    margin: 20px;
    height: 14rem;
}

@media(max-width:1440px) {
    .laundry-machine-col-2-col-2 img {
        margin: 6px;
    }
}

@media(max-width:1024px) {
    .laundry-machine-col-2-col-2 img {
        height: 11rem;
    }
}

@media(max-width:600px) {
    .laundry-machine-col-2-col-2 img {
        height: 11.5rem;
    }
}

.laundry-machine-col-2-col-2 {
    display: flex;
    flex-direction: column;
    align-items: baseline;
}

@media(max-width:600px) {
    .laundry-machine-col-2-col-2 {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
}

.main-laundry-machine {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: url(@/assets/images/water.jpg) no-repeat center;
    background-size: cover;
}

.laundry-machine {
    display: flex;
    margin-left: auto;
    margin-right: auto;
    padding: 100px;
    padding-bottom: 0px;
    flex-direction: row;
    /* max-width: 1400px; */
}

@media(max-width:1024px) {
    .laundry-machine {
        padding: 0px;
    }
}

.laundry-machine-row-1 {
    display: flex;
    flex-direction: row;
    justify-content: center;
}

@media (max-width:600px) {
    .laundry-machine-row-1 {
        flex-direction: column;
    }
}
</style>