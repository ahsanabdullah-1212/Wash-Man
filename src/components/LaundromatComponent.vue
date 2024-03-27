<template>
    <div class="main-laundromat" data-aos="fade-down" data-aos-delay="200">
        <div class="laundromat">
            <div class="laundromat-col">
                <img src="@/assets/images/rect.png" alt="">
                <h2>Not Your Typical Laundromat</h2>
                <p>Clean! Clean! Clean! You want clean clothes and we pride ourselves on the cleanest laundromat in
                    town. This Pride in ownership combined with the most efficient equipment on the market will give you
                    an awesome laundry experience.
                    Give us a try, you'll be back!</p>
            </div>
            <router-link to="/" v-bind:class="{ 'active': isActive('/') }">
                <div class="laundromat-btn">
                    <button><i class="fa-solid fa-car"></i></button>
                </div>
            </router-link>

        </div>
    </div>
</template>

<script>
import AOS from 'aos';
import 'aos/dist/aos.css';

export default {
    name: 'LaundromatComponent',
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
.main-laundromat {
    background: #0072c4;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.laundromat {
    padding-bottom: 100px !important;
    padding-top: 100px !important;
    padding: 50px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 1200px;
}

@media(max-width:768px) {
    .laundromat {
        padding-top: 50px !important;
        padding-bottom: 50px !important;
    }
}

.laundromat-col p {
    margin-top: 5px !important;
    margin: 20px;
    font-size: 20px;
}

@media(max-width:768px) {
    .laundromat-col p {
        font-size: 13px;
    }
}

.laundromat-col h2 {
    font-size: 49.62px;
    margin-bottom: 45px;
}

@media(max-width:768px) {
    .laundromat-col h2 {
        font-size: 30px;
        margin-bottom: 25px;
    }
}

@media(max-width:320px) {
    .laundromat-col h2 {
        font-size: 20px;
        margin-bottom: 25px;
    }
}

.laundromat-col img {
    margin: 50px;
}

@media(max-width:768px) {
    .laundromat-col img {
        margin: 20px;
    }
}

.laundromat-col {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
}

.laundromat-btn {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.laundromat-btn button {
    display: inline-block;
    background-color: #0088cc;
    border-color: #0088cc #0088cc #006699;
    color: #FFF;
    font-weight: 700;
    line-height: 1.7;
    letter-spacing: -0.01rem;
    text-align: center;
    vertical-align: middle;
    cursor: pointer;
    border: 2px solid transparent;
    box-sizing: border-box;
    transform: translateY(0);
    padding: 0.5rem 1.2rem;
    font-size: 0.8rem;
    border-radius: 0.4rem;
    transition: all 200ms ease-in-out;
}

.laundromat-btn button:hover {
    transform: translateY(-0.15rem);
    box-shadow: 0rem 0.25rem 0.75rem rgba(30, 34, 40, 0.15);
    background-color: #00a1f2;
    border-color: #00aaff #00aaff #0088cc;
    color: #FFF;
}
</style>