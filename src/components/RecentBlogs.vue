<template>
    <div class="main-blog" data-aos="fade-up" data-aos-delay="300">
        <div class="blog-head">
            <h1>Recent Relevant Blogs</h1>
        </div>
        <div class="blog-row">
            <div class="small-blogs">
                <div class="blog-col-1" data-aos="fade-down" data-aos-delay="300">
                    <div class="blog-col-descp">
                        <img src="@/assets/images/First.webp" alt="">
                    </div>
                    <div class="blog-main-col">
                        <div class="blog-row-col-1">
                            <div class="date">13</div>
                            <div class="month">Jan</div>
                        </div>
                        <div class="blog-row-col-2">
                            <h4>The Secret to perfectly Folded Clothes:Tips from WaveMaX Experts</h4>
                            <p>
                                Beyond Clean Clothes: Exploring the Untold Advantages
                                Laundromats have long been hailed as convenient places to get your laundry done
                                quickly and
                                efficiently. However, they offer much more than just ...
                            </p>
                            <div @click="updateActive('/BLOG')" v-bind:class="{ 'active': isActive('/BLOG') }">
                                <router-link to="/BLOG" class="navbar-item-s">Read more <i
                                        class="fas fa-chevron-right"></i></router-link>
                            </div>
                            <!-- <a href="">read more</a> -->
                        </div>
                    </div>

                </div>
                <div class="blog-col-1" data-aos="fade-down" data-aos-delay="400">
                    <div class="blog-col-descp">
                        <img src="@/assets/images/Second.webp" alt="">
                    </div>
                    <div class="blog-main-col">
                        <div class="blog-row-col-1">
                            <div class="date">13</div>
                            <div class="month">Jan</div>
                        </div>
                        <div class="blog-row-col-2">
                            <h4>The Secret to perfectly Folded Clothes:Tips from WaveMaX Experts</h4>
                            <p>
                                Beyond Clean Clothes: Exploring the Untold Advantages
                                Laundromats have long been hailed as convenient places to get your laundry done
                                quickly and
                                efficiently. However, they offer much more than just ...
                            </p>
                            <div @click="updateActive('/BLOG')" v-bind:class="{ 'active': isActive('/BLOG') }">
                                <router-link to="/BLOG" class="navbar-item-s">Read more <i
                                        class="fas fa-chevron-right"></i></router-link>
                            </div>
                        </div>
                    </div>

                </div>
                <div class="blog-col-1" data-aos="fade-down" data-aos-delay="500">
                    <div class="blog-col-descp">
                        <img src="@/assets/images/Third.webp" alt="">
                    </div>
                    <div class="blog-main-col">
                        <div class="blog-row-col-1">
                            <div class="date">13</div>
                            <div class="month">Jan</div>
                        </div>
                        <div class="blog-row-col-2">
                            <h4>The Secret to perfectly Folded Clothes:Tips from WaveMaX Experts</h4>
                            <p>
                                Beyond Clean Clothes: Exploring the Untold Advantages
                                Laundromats have long been hailed as convenient places to get your laundry done
                                quickly and
                                efficiently. However, they offer much more than just ...
                            </p>
                            <div @click="updateActive('/BLOG')" v-bind:class="{ 'active': isActive('/BLOG') }">
                                <router-link to="/BLOG" class="navbar-item-s">Read more <i
                                        class="fas fa-chevron-right"></i></router-link>
                            </div>
                        </div>
                    </div>

                </div>
                <div class="blog-col-1" data-aos="fade-down" data-aos-delay="550">
                    <div class="blog-col-descp">
                        <img src="@/assets/images/Fourth.webp" alt="">
                    </div>
                    <div class="blog-main-col">
                        <div class="blog-row-col-1">
                            <div class="date">13</div>
                            <div class="month">Jan</div>
                        </div>
                        <div class="blog-row-col-2">
                            <h4>The Secret to perfectly Folded Clothes:Tips from WaveMaX Experts</h4>
                            <p>
                                Beyond Clean Clothes: Exploring the Untold Advantages
                                Laundromats have long been hailed as convenient places to get your laundry done
                                quickly and
                                efficiently. However, they offer much more than just ...
                            </p>
                            <div @click="updateActive('/BLOG')" v-bind:class="{ 'active': isActive('/BLOG') }">
                                <router-link to="/BLOG" class="navbar-item-s">Read more <i
                                        class="fas fa-chevron-right"></i></router-link>
                            </div>
                        </div>
                    </div>

                </div>
                <div class="blog-col-1" data-aos="fade-down" data-aos-delay="600">
                    <div class="blog-col-descp">
                        <img src="@/assets/images/Fifth.webp" alt="">
                    </div>
                    <div class="blog-main-col">
                        <div class="blog-row-col-1">
                            <div class="date">13</div>
                            <div class="month">Jan</div>
                        </div>
                        <div class="blog-row-col-2">
                            <h4>The Secret to perfectly Folded Clothes:Tips from WaveMaX Experts</h4>
                            <p>
                                Beyond Clean Clothes: Exploring the Untold Advantages
                                Laundromats have long been hailed as convenient places to get your laundry done
                                quickly and
                                efficiently. However, they offer much more than just ...
                            </p>
                            <div @click="updateActive('/BLOG')" v-bind:class="{ 'active': isActive('/BLOG') }">
                                <router-link to="/BLOG" class="navbar-item-s">Read more <i
                                        class="fas fa-chevron-right"></i></router-link>
                            </div>
                        </div>
                    </div>

                </div>
                <div class="blog-col-1" data-aos="fade-down" data-aos-delay="590">
                    <div class="blog-col-descp">
                        <img class="last-img" src="@/assets/images/Sixth.jpg" alt="">
                    </div>
                    <div class="blog-main-col">
                        <div class="blog-row-col-1">
                            <div class="date">13</div>
                            <div class="month">Jan</div>
                        </div>
                        <div class="blog-row-col-2">
                            <h4>The Secret to perfectly Folded Clothes:Tips from WaveMaX Experts</h4>
                            <p>
                                Beyond Clean Clothes: Exploring the Untold Advantages
                                Laundromats have long been hailed as convenient places to get your laundry done
                                quickly and
                                efficiently. However, they offer much more than just ...
                            </p>
                            <div @click="updateActive('/BLOG')" v-bind:class="{ 'active': isActive('/BLOG') }">
                                <router-link to="/BLOG" class="navbar-item-s">Read more <i
                                        class="fas fa-chevron-right"></i></router-link>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <swiper class="mySwiper" :slidesPerView="3" :spaceBetween="20" :autoplay="{
                                delay: 3500,
                                disableOnInteraction: false,
                            }" :navigation="true" :pagination="true" :modules="modules">
                <swiper-slide>
                    <div class="blog-col-1">
                        <div class="blog-col-descp">
                            <img src="@/assets/images/First.webp" alt="">
                        </div>
                        <div class="blog-main-col">
                            <div class="blog-row-col-1">
                                <div class="date">13</div>
                                <div class="month">Jan</div>
                            </div>
                            <div class="blog-row-col-2">
                                <h4>The Secret to perfectly Folded Clothes:Tips from WaveMaX Experts</h4>
                                <p>
                                    Beyond Clean Clothes: Exploring the Untold Advantages
                                    Laundromats have long been hailed as convenient places to get your laundry done
                                    quickly and
                                    efficiently. However, they offer much more than just ...
                                </p>
                                <div @click="updateActive('/BLOG')" v-bind:class="{ 'active': isActive('/BLOG') }">
                                    <router-link to="/BLOG" class="navbar-item-s">Read more <i
                                            class="fas fa-chevron-right"></i></router-link>
                                </div>
                            </div>
                        </div>

                    </div>
                </swiper-slide>
                <swiper-slide>
                    <div class="blog-col-1">
                        <div class="blog-col-descp">
                            <img src="@/assets/images/Second.webp" alt="">
                        </div>
                        <div class="blog-main-col">
                            <div class="blog-row-col-1">
                                <div class="date">13</div>
                                <div class="month">Jan</div>
                            </div>
                            <div class="blog-row-col-2">
                                <h4>The Secret to perfectly Folded Clothes:Tips from WaveMaX Experts</h4>
                                <p>
                                    Beyond Clean Clothes: Exploring the Untold Advantages
                                    Laundromats have long been hailed as convenient places to get your laundry done
                                    quickly and
                                    efficiently. However, they offer much more than just ...
                                </p>
                                <div @click="updateActive('/BLOG')" v-bind:class="{ 'active': isActive('/BLOG') }">
                                    <router-link to="/BLOG" class="navbar-item-s">Read more <i
                                            class="fas fa-chevron-right"></i></router-link>
                                </div>
                            </div>
                        </div>

                    </div>
                </swiper-slide><swiper-slide>
                    <div class="blog-col-1">
                        <div class="blog-col-descp">
                            <img src="@/assets/images/Third.webp" alt="">
                        </div>
                        <div class="blog-main-col">
                            <div class="blog-row-col-1">
                                <div class="date">13</div>
                                <div class="month">Jan</div>
                            </div>
                            <div class="blog-row-col-2">
                                <h4>The Secret to perfectly Folded Clothes:Tips from WaveMaX Experts</h4>
                                <p>
                                    Beyond Clean Clothes: Exploring the Untold Advantages
                                    Laundromats have long been hailed as convenient places to get your laundry done
                                    quickly and
                                    efficiently. However, they offer much more than just ...
                                </p>
                                <div @click="updateActive('/BLOG')" v-bind:class="{ 'active': isActive('/BLOG') }">
                                    <router-link to="/BLOG" class="navbar-item-s">Read more <i
                                            class="fas fa-chevron-right"></i></router-link>
                                </div>
                            </div>
                        </div>

                    </div>
                </swiper-slide>
                <swiper-slide>
                    <div class="blog-col-1">
                        <div class="blog-col-descp">
                            <img src="@/assets/images/Fourth.webp" alt="">
                        </div>
                        <div class="blog-main-col">
                            <div class="blog-row-col-1">
                                <div class="date">13</div>
                                <div class="month">Jan</div>
                            </div>
                            <div class="blog-row-col-2">
                                <h4>The Secret to perfectly Folded Clothes:Tips from WaveMaX Experts</h4>
                                <p>
                                    Beyond Clean Clothes: Exploring the Untold Advantages
                                    Laundromats have long been hailed as convenient places to get your laundry done
                                    quickly and
                                    efficiently. However, they offer much more than just ...
                                </p>
                                <div @click="updateActive('/BLOG')" v-bind:class="{ 'active': isActive('/BLOG') }">
                                    <router-link to="/BLOG" class="navbar-item-s">Read more <i
                                            class="fas fa-chevron-right"></i></router-link>
                                </div>
                            </div>
                        </div>

                    </div>
                </swiper-slide><swiper-slide>
                    <div class="blog-col-1">
                        <div class="blog-col-descp">
                            <img src="@/assets/images/Fifth.webp" alt="">
                        </div>
                        <div class="blog-main-col">
                            <div class="blog-row-col-1">
                                <div class="date">13</div>
                                <div class="month">Jan</div>
                            </div>
                            <div class="blog-row-col-2">
                                <h4>The Secret to perfectly Folded Clothes:Tips from WaveMaX Experts</h4>
                                <p>
                                    Beyond Clean Clothes: Exploring the Untold Advantages
                                    Laundromats have long been hailed as convenient places to get your laundry done
                                    quickly and
                                    efficiently. However, they offer much more than just ...
                                </p>
                                <div @click="updateActive('/BLOG')" v-bind:class="{ 'active': isActive('/BLOG') }">
                                    <router-link to="/BLOG" class="navbar-item-s">Read more <i
                                            class="fas fa-chevron-right"></i></router-link>
                                </div>
                            </div>
                        </div>

                    </div>
                </swiper-slide>
                <swiper-slide>
                    <div class="blog-col-1">
                        <div class="blog-col-descp">
                            <img src="@/assets/images/Sixth.jpg" alt="">
                        </div>
                        <div class="blog-main-col">
                            <div class="blog-row-col-1">
                                <div class="date">13</div>
                                <div class="month">Jan</div>
                            </div>
                            <div class="blog-row-col-2">
                                <h4>The Secret to perfectly Folded Clothes:Tips from WaveMaX Experts</h4>
                                <p>
                                    Beyond Clean Clothes: Exploring the Untold Advantages
                                    Laundromats have long been hailed as convenient places to get your laundry done
                                    quickly and
                                    efficiently. However, they offer much more than just ...
                                </p>
                                <div @click="updateActive('/BLOG')" v-bind:class="{ 'active': isActive('/BLOG') }">
                                    <router-link to="/BLOG" class="navbar-item-s">Read more <i
                                            class="fas fa-chevron-right"></i></router-link>
                                </div>
                            </div>
                        </div>

                    </div>
                </swiper-slide>
            </swiper>
        </div>
    </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'swiper/css/pagination';
export default {
    name: 'RecentBlogs',
    mounted() {
        AOS.init();
    },

    components: {
        Swiper,
        SwiperSlide,
    },
    methods: {
        isActive(route) {
            return this.$route.path === route;
        },
         updateActive(route) {
            // Update the active link when clicked
            this.$router.push(route);
        },
    },
    setup() {
        return {
            modules: [Autoplay, Pagination],
        };
    },
};
</script>


<style>
.small-blogs {
    display: none;
}

@media(max-width:600px) {
    .small-blogs {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
}

.swiper-pagination {
    margin-bottom: -9px;
}

.blog-row-col-2 a {
    color: #000;
    text-decoration: none;
    font-size: 15px;
}

.blog-row-col-2 {
    text-align: left;
    margin-left: 9px;
}

@media(max-width:1030px) {
    .blog-row-col-2 {
        display: flex;
        flex-direction: column;
        margin-left: 0px;
        margin-top: 10px;
        align-items: center;
    }
}

.blog-col-descp {
    margin-bottom: 10px;
}

.blog-row-col-2 h4 {
    margin: 5px;
    font-size: 19px;
    color: #0088cc;
}

@media(max-width:1450px) {
    .blog-row-col-2 h4 {
        width: 300px;
        font-size: 14px;
    }
}

@media(max-width:1030px) {
    .blog-row-col-2 h4 {
        width: auto;
        margin: 0px;
        text-align: center;
    }
}

.blog-row-col-2 p {
    font-size: 15px;
    margin: 5px;
    color: #101010;
}

@media(max-width:1450px) {
    .blog-row-col-2 p {
        width: 300px;
        font-size: 11px;
    }
}

@media(max-width:1030px) {
    .blog-row-col-2 p {
        text-align: center;
        width: auto;
        margin-top: 20px !important;
        margin: 0px;
    }
}

.blog-main-col {
    display: flex;
    flex-direction: row;
}

@media(max-width:1030px) {
    .blog-main-col {
        flex-direction: column;
        align-items: center
    }
}

.blog-col-1 {
    margin: 55px;
    display: flex;
    flex-direction: column;
    width: 31.5rem;
}

@media(max-width :1030px) {
    .blog-col-1 {
        width: 15.15rem;
    }
}

.date {
    color: #0088cc;
    background: #efeeee;
    border-radius: 2px 2px 0 0;
    display: block;
    font-size: 18px;
    font-weight: 900;
    padding: 10px;
}

@media(max-width:1030px) {
    .blog-row-col-1 {
        display: flex;
        flex-direction: row;
    }
}

.month {
    background: #0088cc;
    color: #f7f7f7;
    border-radius: 2px 2px 0 0;
    display: block;
    font-size: 18px;
    font-weight: 200;
    padding: 10px;
}

.main-blog {
    margin-top: 120px;
}

.blog-head {
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    margin: 20px;
}

.blog-head h1 {
    color: #000;
    font-size: 44px;
}

@media(max-width:500px) {
    .blog-head h1 {
        font-size: 30px;
    }
}

.blog-col-descp img {
    height: 21rem;
    border-radius: 15px;
}

@media(max-width:1450px) {
    .blog-col-descp img {
        height: 14rem;
    }
}

@media(max-width:1030px) {
    .blog-col-descp img {
        height: 10rem;
    }
}

@media(max-width:600px) {
    .last-img {
        height: 12rem !important;
    }
}
</style>
