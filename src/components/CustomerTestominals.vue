<template>
    <div class="main-customer">
        <div class="customer-head">
            <img src="@/assets/images/rect.png" alt="">
            <h2>Customer Testimonials</h2>
        </div>
        <div class="customer-reviews">
            <div class="review-2" data-aos="fade-down" data-aos-delay="150">
                <p>One of the best laundry</p>
                <div class="review-desc">
                    <div class="review-desc-1">
                        <h5>Naveen</h5>
                        <img src="@/assets/images/google.svg">
                    </div>
                    <div class="review-desc-2">
                        <img src="@/assets/images/stars_5.png" alt="icon">
                        <h4>5.0</h4>
                    </div>
                </div>
            </div>
            <div class="review-2" data-aos="fade-down" data-aos-delay="150">
                <p>Very Smooth and Easy Process w/ the Card Setup. Clean and Quiet. Great Staff. My New Go Too
                </p>
                <div class="review-desc">
                    <div class="review-desc-1">
                        <h5>Ali k</h5>
                        <img src="@/assets/images/google.svg">
                    </div>
                    <div class="review-desc-2">
                        <img src="@/assets/images/stars_5.png" alt="icon">
                        <h4>5.0</h4>
                    </div>
                </div>
            </div>
            <div class="review-2" data-aos="fade-down" data-aos-delay="150">
                <p>"I've been using this laundry service for months now, and I'm always impressed by the quality
                    of their work. My clothes come back looking and smelling fresh every time!"</p>
                <div class="review-desc">
                    <div class="review-desc-1">
                        <h5>Sarah T</h5>
                        <img src="@/assets/images/google.svg">
                    </div>
                    <div class="review-desc-2">
                        <img src="@/assets/images/stars_5.png" alt="icon">
                        <h4>5.0</h4>
                    </div>
                </div>
            </div>
            <div class="review-2" data-aos="fade-down" data-aos-delay="150">
                <p>"I was skeptical about outsourcing my laundry at first, but this service has exceeded my
                    expectations. It's convenient, affordable, and the customer service is top-notch."</p>
                <div class="review-desc">
                    <div class="review-desc-1">
                        <h5>James P.</h5>
                        <img src="@/assets/images/google.svg">
                    </div>
                    <div class="review-desc-2">
                        <img src="@/assets/images/stars_5.png" alt="icon">
                        <h4>5.0</h4>
                    </div>
                </div>
            </div>
            <div class="review-2" data-aos="fade-down" data-aos-delay="150">
                <p>"I love how easy it is to schedule a pickup and delivery with this laundry service. It saves
                    me so much time and hassle each week!"</p>
                <div class="review-desc">
                    <div class="review-desc-1">
                        <h5>Emily R</h5>
                        <img src="@/assets/images/google.svg">
                    </div>
                    <div class="review-desc-2">
                        <img src="@/assets/images/stars_5.png" alt="icon">
                        <h4>5.0</h4>
                    </div>
                </div>
            </div>
            <div class="review-2" data-aos="fade-down" data-aos-delay="150">
                <p> "As a busy professional, I rely on this laundry service to keep my wardrobe in top
                    condition. They handle everything with care, and I appreciate the attention to detail."</p>
                <div class="review-desc">
                    <div class="review-desc-1">
                        <h5>David L</h5>
                        <img src="@/assets/images/google.svg">
                    </div>
                    <div class="review-desc-2">
                        <img src="@/assets/images/stars_5.png" alt="icon">
                        <h4>5.0</h4>
                    </div>
                </div>
            </div>
            <div class="review-2" data-aos="fade-down" data-aos-delay="150">
                <p>"I've tried a few different laundry services in the past, but this one stands out for its
                    reliability and consistency. I highly recommend giving them a try!"</p>
                <div class="review-desc">
                    <div class="review-desc-1">
                        <h5>Alex M</h5>
                        <img src="@/assets/images/google.svg">
                    </div>
                    <div class="review-desc-2">
                        <img src="@/assets/images/stars_5.png" alt="icon">
                        <h4>5.0</h4>
                    </div>
                </div>
            </div>
            <div class="review-2" data-aos="fade-down" data-aos-delay="150">
                <p> "This laundry service has been a game-changer for me. It's so convenient to have my clothes
                    picked up, cleaned, and delivered back to me without any hassle. Definitely worth it!"</p>
                <div class="review-desc">
                    <div class="review-desc-1">
                        <h5>John K</h5>
                        <img src="@/assets/images/google.svg">
                    </div>
                    <div class="review-desc-2">
                        <img src="@/assets/images/stars_5.png" alt="icon">
                        <h4>5.0</h4>
                    </div>
                </div>
            </div>
            <swiper data-aos="fade-down" data-aos-delay="150" class="mySwiper" :slidesPerView="3" :spaceBetween="20"
                :autoplay="{
                delay: 2500,
                disableOnInteraction: false,
            }" :pagination="{
                clickable: true,
            }" :navigation="true" :modules="modules">
                <swiper-slide>
                    <div class="review-1">
                        <p>One of the best laundry</p>
                        <div class="review-desc">
                            <div class="review-desc-1">
                                <h5>Naveen</h5>
                                <img src="@/assets/images/google.svg">
                            </div>
                            <div class="review-desc-2">
                                <img src="@/assets/images/stars_5.png" alt="icon">
                                <h4>5.0</h4>
                            </div>
                        </div>
                    </div>
                </swiper-slide>
                <swiper-slide>
                    <div class="review-1">
                        <p>Very Smooth and Easy Process w/ the Card Setup. Clean and Quiet. Great Staff. My New Go Too
                        </p>
                        <div class="review-desc">
                            <div class="review-desc-1">
                                <h5>Ali k</h5>
                                <img src="@/assets/images/google.svg">
                            </div>
                            <div class="review-desc-2">
                                <img src="@/assets/images/stars_5.png" alt="icon">
                                <h4>5.0</h4>
                            </div>
                        </div>
                    </div>
                </swiper-slide><swiper-slide>
                    <div class="review-1">
                        <p>"I've been using this laundry service for months now, and I'm always impressed by the quality
                            of their work. My clothes come back looking and smelling fresh every time!"</p>
                        <div class="review-desc">
                            <div class="review-desc-1">
                                <h5>Sarah T</h5>
                                <img src="@/assets/images/google.svg">
                            </div>
                            <div class="review-desc-2">
                                <img src="@/assets/images/stars_5.png" alt="icon">
                                <h4>5.0</h4>
                            </div>
                        </div>
                    </div>
                </swiper-slide>
                <swiper-slide>
                    <div class="review-1">
                        <p>"I was skeptical about outsourcing my laundry at first, but this service has exceeded my
                            expectations. It's convenient, affordable, and the customer service is top-notch."</p>
                        <div class="review-desc">
                            <div class="review-desc-1">
                                <h5>James P.</h5>
                                <img src="@/assets/images/google.svg">
                            </div>
                            <div class="review-desc-2">
                                <img src="@/assets/images/stars_5.png" alt="icon">
                                <h4>5.0</h4>
                            </div>
                        </div>
                    </div>
                </swiper-slide><swiper-slide>
                    <div class="review-1">
                        <p>"I love how easy it is to schedule a pickup and delivery with this laundry service. It saves
                            me so much time and hassle each week!"</p>
                        <div class="review-desc">
                            <div class="review-desc-1">
                                <h5>Emily R</h5>
                                <img src="@/assets/images/google.svg">
                            </div>
                            <div class="review-desc-2">
                                <img src="@/assets/images/stars_5.png" alt="icon">
                                <h4>5.0</h4>
                            </div>
                        </div>
                    </div>
                </swiper-slide>
                <swiper-slide>
                    <div class="review-1">
                        <p> "As a busy professional, I rely on this laundry service to keep my wardrobe in top
                            condition. They handle everything with care, and I appreciate the attention to detail."</p>
                        <div class="review-desc">
                            <div class="review-desc-1">
                                <h5>David L</h5>
                                <img src="@/assets/images/google.svg">
                            </div>
                            <div class="review-desc-2">
                                <img src="@/assets/images/stars_5.png" alt="icon">
                                <h4>5.0</h4>
                            </div>
                        </div>
                    </div>
                </swiper-slide><swiper-slide>
                    <div class="review-1">
                        <p>"The eco-friendly options offered by this laundry service are fantastic. I feel good knowing
                            that my clothes are being cleaned in a sustainable way."</p>
                        <div class="review-desc">
                            <div class="review-desc-1">
                                <h5>Maria S</h5>
                                <img src="@/assets/images/google.svg">
                            </div>
                            <div class="review-desc-2">
                                <img src="@/assets/images/stars_5.png" alt="icon">
                                <h4>5.0</h4>
                            </div>
                        </div>
                    </div>
                </swiper-slide>
                <swiper-slide>
                    <div class="review-1">
                        <p>"I've tried a few different laundry services in the past, but this one stands out for its
                            reliability and consistency. I highly recommend giving them a try!"</p>
                        <div class="review-desc">
                            <div class="review-desc-1">
                                <h5>Alex M</h5>
                                <img src="@/assets/images/google.svg">
                            </div>
                            <div class="review-desc-2">
                                <img src="@/assets/images/stars_5.png" alt="icon">
                                <h4>5.0</h4>
                            </div>
                        </div>
                    </div>
                </swiper-slide><swiper-slide>
                    <div class="review-1">
                        <p> "This laundry service has been a game-changer for me. It's so convenient to have my clothes
                            picked up, cleaned, and delivered back to me without any hassle. Definitely worth it!"</p>
                        <div class="review-desc">
                            <div class="review-desc-1">
                                <h5>John K</h5>
                                <img src="@/assets/images/google.svg">
                            </div>
                            <div class="review-desc-2">
                                <img src="@/assets/images/stars_5.png" alt="icon">
                                <h4>5.0</h4>
                            </div>
                        </div>
                    </div>
                </swiper-slide>
            </swiper>
        </div>
    </div>
</template>

<script>
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Autoplay } from 'swiper/modules';

import 'swiper/css';

export default {
    name: 'CustomerTestimonials',
    mounted() {
        AOS.init();
    },
    components: {
        Swiper,
        SwiperSlide,
    },
    setup() {
        return {
            modules: [Autoplay],
        };
    },
};
</script>


<style>
@media(max-width:450px) {
    .main-customer {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
}

.customer-reviews {
    margin: 71px;
}

@media(max-width:768px) {
    .customer-reviews {
        margin: 26px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
}

.swiper {
    width: 100%;
    height: 100%;
}

@media(max-width:750px) {
    .swiper {
        display: none;
    }
}

.swiper-slide {
    text-align: center;
    font-size: 18px;
    background: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
}

.review-desc-1 {
    display: flex;
    float: left;
    flex-direction: column;
}

.review-desc-1 h5 {
    color: #000;
}
@media(max-width:1000px) {
    .review-desc-1 h5 {
        font-size: 11px;
    }
}
@media(max-width:800px) {
    .review-desc-1 h5 {
        font-size: 11px;
    }
}

.review-desc-2 h4 {
    color: #000;
}

.review-desc-1 {
    display: flex;
    justify-content: space-between;
}

.review-desc-2 {
    display: flex;
    flex-direction: row;
    align-items: center;
}

.review-desc-1 img {
    height: 1.5rem;
}

.customer-head {
    padding-top: 50px !important;
    align-items: center;
    justify-content: center;
    display: flex;
    flex-direction: column;
    padding: 15px;
}
@media(max-width:430px){
    .customer-head {
        padding: 7px;
    }
}
.customer-head h2 {
    font-size: 42px;
    margin-top: 15px;
    color: #000;
    text-align: center;
    padding: 15px;
}
@media(max-width:310px){
    .customer-head h2 {
        font-size: 30px;
    }
}
.customer-head img {
    width: 108px;
}

.review-desc {
    padding: 15px;
    display: flex;
    justify-content: space-between;
}

.review-2 {
    display: none;
}

@media(max-width:750px) {
    .review-2 {
        margin-top: 15px;
        margin-bottom: 15px;
        width: 25rem;
        height: 200px;
        border-radius: 12px;
        justify-content: space-between;
        display: flex !important;
        background-color: #ffffff;
        flex-direction: column;
        border: 1px solid rgb(245, 245, 245);
        box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
        transition: transform 0.3s ease;
    }

    .review-2 p {
        color: #000;
        font-size: 12px;
        padding: 15px;
        text-align: left;
    }

    .review-2:hover {
        transform: translateY(-5px);
    }
}

@media(max-width:400px) {
    .review-2 {
        width: 18rem;
    }
}

.review-1 {
    width: 25rem;
    height: 235px;
    border-radius: 12px;
    justify-content: space-between;
    display: flex;
    background-color: #ffffff;
    flex-direction: column;
    border: 1px solid rgb(245, 245, 245);
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease;
}

@media(max-width:850px) {
    .review-1 {
        height: 251px;
    }
}

.review-1 p {
    color: #000;
    font-size: 12px;
    padding: 15px;
    text-align: left;
}

.review-1:hover {
    transform: translateY(-5px);
}
</style>