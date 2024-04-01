<template>
    <div class="main-hero">
        <div class="hero-section">
            <div class="hero-section-col">
                <div class="hero-col-decp-1" data-aos="fade-left" data-aos-delay="150">
                    <h1 class="wave">Wash</h1>&nbsp;&nbsp; &nbsp; <h1 class="max">MAN</h1>
                    <h2 class="lan">LAUNDRY</h2>
                </div>
                <div class="hero-col-decp-2">
                    <h1 data-aos="fade-left" data-aos-delay="150">Lahore, PK</h1>
                    <h4 data-aos="fade-right" data-aos-delay="150"> Your Premier Laundromat in Lahore, PK!</h4>
                    <router-link to="/AboutPage" v-bind:class="{ 'active': isActive('/AboutPage') }"> <button
                            class="hero-col-btn" data-aos="fade-up" data-aos-delay="150">Learn
                            More</button></router-link>
                </div>
            </div>

        </div>

    </div>
</template>

<script>
import AOS from 'aos';
import 'aos/dist/aos.css';

export default {
    name: 'HeroSection',
    mounted() {
        AOS.init();
    },
    methods : {
        isActive(route) {
            return this.$route.path === route;
        },
    }
}
</script>
<style>
.lan {
    padding-left: 0.5em;
    padding-right: 0.5em;
    border-radius: 51px;
    color: #fff !important;
    font-weight: 300 !important;
    text-transform: uppercase !important;
    font-size: 30px !important;
    background: #669bd3ad;
    height: 42px;
    letter-spacing: 1px;
    border-radius: 20px;
    margin-left: 15px;
    margin-top: 20px;
}

@media(max-width:1440px) {
    .lan {
        font-size: 20px !important;
        height: 30px;
    }

}

@media(max-width:1024px) {
    .lan {
        font-size: 15px !important;
        height: 20px;
    }
}

@media(max-width:425px) {
    .lan {
        font-size: 10px !important;
        margin-top: 10px;
        height: 15px;
    }
}

.wave {
    color: #2cade2;
    font-family: "Playfair Display", sans-serif;
    font-size: 99.5px;
}

@media(max-width:1440px) {
    .wave {
        font-size: 69.99px;
    }

}

@media(max-width:1024px) {
    .wave {
        font-size: 46px;
    }
}

@media(max-width:425px) {
    .wave {
        padding: 5px;
        font-size: 36px;
    }
}
  a {
    text-decoration: none;
}
.max {
    margin-left: -8px !important;
    font-family: "Playfair Display", sans-serif;
    font-size: 99.5px;
    color: #0072c4;
    color: #fff !important;
    text-shadow: 0px 1px 6px rgb(0 114 196) !important;
    font-weight: 900 !important;
    -webkit-text-stroke-width: 0.5px;
    letter-spacing: 4px;
}

@media(max-width:1440px) {
    .max {
        font-size: 69.99px;
    }
}
@media(max-width:1024px) {
    .max {
        font-size: 46px;
    }
}

@media(max-width:800px) {
    .max {
        font-size: 46px;
    }
}

@media(max-width:425px) {
    .max {
        font-size: 36px;
        padding: 5px;
    }
}

.hero-col-decp-1 {
    display: flex;
    flex-direction: row;
}

.hero-col-decp-2 {
    display: flex;
    flex-direction: column;
    justify-content: left;
    text-align: left;
}

.hero-col-decp-2 h1 {
    font-family: "Playfair Display", sans-serif;
    font-size: 99.5px;
    color: #0072c4;
}

@media(max-width:1440px) {
    .hero-col-decp-2 h1 {
        font-size: 69.99px;
    }
}

@media(max-width:1024px) {
    .hero-col-decp-2 h1 {
        font-size: 46px;
    }
}

@media(max-width:425px) {
    .hero-col-decp-2 h1 {
        font-size: 36px;
    }
}

@media(max-width:375px) {
    .hero-col-decp-2 h1 {
        font-size: 25px;
    }
}

.hero-col-decp-2 h4 {
    margin-top: 50px;
    font-family: "Playfair Display", sans-serif;
    font-size: 19.5px;
    color: #0072c4;
    font-weight: 300;
}

@media(max-width:425px) {
    .hero-col-decp-2 h4 {
        margin-top: 20px;
        font-size: 15px;
    }
}

@media(max-width:375px) {
    .hero-col-decp-2 h4 {
        margin-top: 20px;
        font-size: 12px;
    }
}

.hero-section {
    align-items: center;
    display: flex;
    flex-direction: column;
    width: 100%;
     
    background: url(@/assets/images/Hero-section.jpg) no-repeat center;
    background-size: cover;
}

@media(max-width:1024px){
    .hero-section {
        height: 493px;
    }

}
@media(max-width:450px){
    .hero-section {
        height: auto;
    }

}
.hero-section-col {
    position: relative;
    padding: 200px;
    display: flex;
    flex-direction: column;
    float: left;
    right: 410px;
}

@media(max-width:1700px) {
    .hero-section-col {
        right: 307px;
    }

}

@media(max-width:1440px) {
    .hero-section-col {
        right: 350px;
    }

}

@media(max-width:1024px) {
    .hero-section-col {
        right: 158px;
        padding: 45px;
    }
}

@media(max-width:450px) {
    .hero-section-col {
        right: 8px;
        padding: 10px;
    }
}

.hero-col-btn {
    margin-top: 40px !important;
    flex-direction: row;
    margin: 5px;
    font-size: 15px;
    height: 45px;
    width: 150px;
    color: #ffff;
    border-radius: 25px;
    cursor: pointer;
    font-weight: bolder;
    background-color: #8fbe00;
    border: none;
    padding: 10px;
}

@media(max-width:425px) {
    .hero-col-btn {
        display: flex;
        flex-direction: row;
        align-items: center;
        width: 100px;
        height: 30px;
    }
}
</style>