<template>
    <div class="parent-nav">
        <div class="main-navbar-content" :class="{ 'hide-navbar': showScrollNavbar }">
            <div class="navbar-1">
                <div class="phone-details">
                    <div class="call">
                        <img src="@/assets/images/phone.png" alt="">&nbsp;&nbsp;
                        <p>(682) 323-4466</p>
                    </div>
                    <div class="time">
                        <img src="@/assets/images/clock.png" alt="">&nbsp;&nbsp;
                        <p>7am to 10pm Daily</p>
                    </div>
                </div>
                <div class="social">
                    <i class="fa-brands fa-facebook-f"></i>
                    <i class="fa-brands fa-google"></i>
                    <i class="fa-solid fa-phone"></i>
                    <img src="@/assets/images/country.png" alt="">
                </div>
            </div>
            <div class="navbar-2">
                <div class="logo">
                    <router-link to="/" class="navbar-item-1"><img src="@/assets/images/logo-wavemax.png" alt=""></router-link>
                    
                </div>
                <div class="location">
                    <img src="@/assets/images/map.png" alt="">
                    <div class="location-desc">
                        <h1>2823 W Park Row Dr
                            Arlington, TX 76013</h1>
                    </div>
                </div>
                <div class="nav-2-btns">
                    <div class="franchise-btn">
                        <button>Franchise</button>
                    </div>
                    <div class="location-btn">
                        <button>Locations</button>
                    </div>
                </div>

            </div>
            <div class="nav-main">
                <div class="logo-1">
                    <router-link to="/"  ><img src="@/assets/images/logo-wavemax.png" alt=""></router-link>
                </div>
                <nav class="navbar">


                    <ul id="navbar">
                        <router-link to="/" v-bind:class="{ 'active': isActive('/') }"
                            class="navbar-item-1">Home</router-link>
                        <router-link to="/SelfServe" v-bind:class="{ 'active': isActive('/SelfServe') }"
                            class="navbar-item">Self-Serve Laundry</router-link>
                        <router-link to="/WashDry" v-bind:class="{ 'active': isActive('/WashDry') }"
                            class="navbar-item">Wash-Dry-Fold</router-link>
                        <router-link to="/PickupDelivery" v-bind:class="{ 'active': isActive('/PickupDelivery') }"
                            class="navbar-item">Pickup & Delivery</router-link>
                        <div class="drop-down-menu">
                            <router-link to="/AboutPage" v-bind:class="{ 'active': isActive('/AboutPage') }"
                                class="navbar-item">About Us&nbsp;<i class="fa-solid fa-caret-down"></i></router-link>
                            <transition name="fade">
                                <div class="dropdown-content">
                                    <div v-bind:class="{ 'active': isActive('/FAQ') }">
                                        <router-link to="/FAQ" @click="removeSidebar"
                                            class="navbar-item-s">FAQ</router-link>
                                    </div>
                                    <div v-bind:class="{ 'active': isActive('/BLOG') }">
                                        <router-link to="/BLOG" @click="removeSidebar"
                                            class="navbar-item-s">BLOG</router-link>
                                    </div>
                                </div>
                            </transition>
                        </div>
                        <router-link to="/MainContact" v-bind:class="{ 'active': isActive('/MainContact') }"
                            class="navbar-item">Contact Us</router-link>
                    </ul>

                </nav>
                <div id="menu-icon" @click="toggleSidebar" :class="{ 'active': isSidebarOpen }">
                    <i :class="{ 'fa-solid fa-bars': !isSidebarOpen, 'fa-solid fa-times': isSidebarOpen }"></i>
                </div>
            </div>

            <div id="sidebar" :style="{ width: sidebarWidth }">
                <span class="close-icon" @click="closeSidebar"><i class="fa-solid fa-xmark"></i></span>

                <ul v-if="sidebarWidth !== '0px'">
                    <div class="logo-side">
                        <img src="@/assets/images/logo-wavemax.png" alt="">
                    </div>
                    <router-link to="/" v-bind:class="{ 'active': isActive('/') }" class="navbar-item-side-1"
                        @click="removeSidebar">Home</router-link>
                    <router-link to="/SelfServe" v-bind:class="{ 'active': isActive('/SelfServe') }"
                        class="navbar-item-side" @click="removeSidebar">Self-Serve
                        Laundry</router-link>
                    <router-link to="/WashDry" v-bind:class="{ 'active': isActive('/WashDry') }"
                        class="navbar-item-side" @click="removeSidebar">Wash-Dry-Fold</router-link>
                    <router-link to="/PickupDelivery" v-bind:class="{ 'active': isActive('/PickupDelivery') }"
                        class="navbar-item-side" @click="removeSidebar">Pickup &
                        Delivery</router-link>
                    <div class="drop-down-menu">
                        <router-link to="/AboutPage" v-bind:class="{ 'active': isActive('/AboutPage') }"
                            class="navbar-item" @click="removeSidebar">About Us&nbsp;<i
                                class="fa-solid fa-caret-down"></i></router-link>
                        <transition name="fade">
                            <div class="dropdown-content">
                                <div v-bind:class="{ 'active': isActive('/FAQ') }">
                                    <router-link to="/FAQ" @click="removeSidebar"
                                        class="navbar-item-s">FAQ</router-link>
                                </div>
                                <div v-bind:class="{ 'active': isActive('/BLOG') }">
                                    <router-link to="/BLOG" @click="removeSidebar"
                                        class="navbar-item-s">BLOG</router-link>
                                </div>
                            </div>
                        </transition>
                    </div>
                    <router-link to="/MainContact" class="navbar-item-side" @click="removeSidebar">Contact
                        Us</router-link>
                    <div class="side-bar-btns">
                        <div class="franchise-btn-side" @click="removeSidebar">
                            <button>Franchise</button>
                        </div>
                        <div class="location-btn-side" @click="removeSidebar">
                            <button>Locations</button>
                        </div>
                    </div>
                </ul>


            </div>
        </div>
        <transition name="slide-down">
            <div v-if="showScrollNavbar" class="fixed-navbar" key="fixed-navbar">
                <!-- New fixed navbar content -->
                <div class="nav-main-2">
                    <div class="logo-1">
                        <img src="@/assets/images/logo-wavemax.png" alt="">
                    </div>
                    <nav class="navbar">
                        <ul id="navbar">
                            <router-link to="/" v-bind:class="{ 'active': isActive('/') }"
                                class="navbar-item-1">Home</router-link>
                            <router-link to="/SelfServe" v-bind:class="{ 'active': isActive('/SelfServe') }"
                                class="navbar-item">Self-Serve Laundry</router-link>
                            <router-link to="/WashDry" v-bind:class="{ 'active': isActive('/WashDry') }"
                                class="navbar-item">Wash-Dry-Fold</router-link>
                            <router-link to="/PickupDelivery" v-bind:class="{ 'active': isActive('/PickupDelivery') }"
                                class="navbar-item">Pickup & Delivery</router-link>
                            <div class="drop-down-menu">
                                <router-link to="/AboutPage" v-bind:class="{ 'active': isActive('/AboutPage') }"
                                    class="navbar-item">About Us&nbsp;<i
                                        class="fa-solid fa-caret-down"></i></router-link>
                                <transition name="fade">
                                    <div class="dropdown-content">
                                        <div v-bind:class="{ 'active': isActive('/FAQ') }">
                                            <router-link to="/FAQ" @click="removeSidebar"
                                                class="navbar-item-s">FAQ</router-link>
                                        </div>
                                        <div v-bind:class="{ 'active': isActive('/BLOG') }">
                                            <router-link to="/BLOG" @click="removeSidebar"
                                                class="navbar-item-s">BLOG</router-link>
                                        </div>
                                    </div>
                                </transition>
                            </div>

                            <router-link to="/MainContact" v-bind:class="{ 'active': isActive('/MainContact') }"
                                class="navbar-item">Contact Us</router-link>
                        </ul>
                    </nav>
                    <div id="menu-icon" @click="toggleSidebar" :class="{ 'active': isSidebarOpen }">
                        <i :class="{ 'fa-solid fa-bars': !isSidebarOpen, 'fa-solid fa-times': isSidebarOpen }"></i>
                    </div>
                </div>
                <div id="sidebar" :style="{ width: sidebarWidth }">
                    <span class="close-icon" @click="closeSidebar"><i class="fa-solid fa-xmark"></i></span>

                    <ul v-if="sidebarWidth !== '0px'">
                        <div class="logo-side">
                            <img src="@/assets/images/logo-wavemax.png" alt="">
                        </div>
                        <router-link to="/" v-bind:class="{ 'active': isActive('/') }" class="navbar-item-side-1"
                            @click="removeSidebar">Home</router-link>
                        <router-link to="/SelfServe" v-bind:class="{ 'active': isActive('/SelfServe') }"
                            class="navbar-item-side" @click="removeSidebar">Self-Serve
                            Laundry</router-link>
                        <router-link to="/WashDry" v-bind:class="{ 'active': isActive('/WashDry') }"
                            class="navbar-item-side" @click="removeSidebar">Wash-Dry-Fold</router-link>
                        <router-link to="/PickupDelivery" v-bind:class="{ 'active': isActive('/PickupDelivery') }"
                            class="navbar-item-side" @click="removeSidebar">Pickup &
                            Delivery</router-link>
                        <div class="drop-down-menu">
                            <router-link to="/AboutPage" v-bind:class="{ 'active': isActive('/AboutPage') }"
                                class="navbar-item" @click="removeSidebar">
                                About Us&nbsp;<i class="fa-solid fa-caret-down"></i>
                            </router-link>
                            <transition name="fade">
                                <div class="dropdown-content">
                                    <div>
                                        <router-link to="/FAQ" @click="removeSidebar"
                                            class="navbar-item-s">FAQ</router-link>
                                    </div>
                                    <div>
                                        <router-link to="/BLOG" @click="removeSidebar"
                                            class="navbar-item-s">BLOG</router-link>
                                    </div>
                                </div>
                            </transition>
                        </div>
                        <router-link to="/MainContact" v-bind:class="{ 'active': isActive('/MainContact') }"
                            class="navbar-item-side" @click="removeSidebar">Contact
                            Us</router-link>
                        <div class="side-bar-btns">
                            <div class="franchise-btn-side" @click="removeSidebar">
                                <button>Franchise</button>
                            </div>
                            <div class="location-btn-side" @click="removeSidebar">
                                <button>Locations</button>
                            </div>
                        </div>
                    </ul>


                </div>
            </div>
        </transition>
    </div>

</template>

<script>
export default {
    name: 'NavbarComponent',
    data() {
        return {
            activeTab: 'AboutPage',
            isSidebarOpen: false,
            sidebarWidth: '0px',
            showScrollNavbar: false,
            lastScrollPosition: 0,
            isAtTop: true
        };
    },
    mounted() {
        window.addEventListener('scroll', this.handleScroll);
        this.isAtTop = window.pageYOffset <= 0; // Check if page is at the top on mountZ
    },
    beforeDestroy() {
        window.removeEventListener('scroll', this.handleScroll);
    },
    methods: {
        isActive(route) {
            return this.$route.path === route;
        },

        removeSidebar() {
            this.isSidebarOpen = false;
            this.sidebarWidth = '0px';
        },
        toggleSidebar() {
            this.isSidebarOpen = !this.isSidebarOpen;
            this.sidebarWidth = this.isSidebarOpen ? '300px' : '0px';
        },
        closeSidebar() {
            this.isSidebarOpen = false;
            this.sidebarWidth = '0px';
        },
        handleScroll() {
            const currentScrollPosition = window.pageYOffset || document.documentElement.scrollTop;
            if (window.scrollY > 230) {
                // Scrolling down
                this.showScrollNavbar = true;
            } else {
                // Scrolling up
                if (currentScrollPosition <= 0) {
                    // Check if scrolled to the top
                    this.isAtTop = true;
                }
                if (this.isAtTop) {
                    // Only show navbar if at top of page
                    this.showScrollNavbar = false;
                }
            }
            this.lastScrollPosition = currentScrollPosition <= 0 ? 0 : currentScrollPosition;
        }
    }
};
</script>
<style scoped>
.active {
    background-color: rgb(135, 187, 13);
}

.dropdown-content a {
    color: rgb(0, 0, 0) !important;

    transition: color 0.3s ease;
}

.dropdown-content a:hover {
    color: #3498db;
}

.drop-down-menu {
    position: relative;
    display: flex;
}

.dropdown-content {
    line-height: 2rem;
    color: #000 !important;
    text-align: center;
    display: flex;
    flex-direction: column;
    text-align: left;
    padding: 10px;
    width: 125px;
    position: absolute;
    background: #fff;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
    z-index: 1;
    top: 70px;
    border-radius: 10px;
    opacity: 0;
    transform: translateY(-10px);
    transition: opacity 0.5s, transform 0.5s;
}

.router-link:hover .dropdown-content {
    opacity: 1;
    transform: translateY(0);
}

.dropdown-content router-link {
    color: black;
    padding: 12px 16px;
    text-decoration: none;
    display: block;
}

.dropdown-content router-link:hover {
    background-color: #f1f1f1;
}

.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.5s, transform 0.5s;
}

.fade-enter,
.fade-leave-to {
    opacity: 0;
    transform: translateY(-10px);
}

.drop-down-menu:hover .dropdown-content {
    opacity: 1;
    transform: translateY(0);
}

.hide-navbar {
    transform: translateY(-100%);
    transition: transform 0.3s ease;
}

.show-navbar {
    transform: translateY(0);
    transition: transform 0.3s ease;
}

.fixed-navbar {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    background-color: #041e42;
    z-index: 1000;
    transition: transform 0.3s ease;
}

.slide-down-enter-active,
.slide-down-leave-active {
    transition: transform 0.3s ease;
}

.slide-down-enter,
.slide-down-leave-to {
    transform: translateY(-100%);
}

#menu-icon {
    /* background-color: #0072c4; */
    cursor: pointer;
    transition: transform 0.3s ease;
}

#menu-icon.active {
    background-color: #041e42;
    transform: rotate(90deg);
}

.side-bar-btns {
    margin-top: 20px;
    display: flex;
    width: 243px;
    align-items: center;
    justify-content: center;
    flex-direction: column;
}

#menu-icon .fa-solid.fa-bars {
    color: #fff;
    font-size: 24px;
}

.nav-main {
    display: flex;
    flex-direction: row;
    justify-content: center;
    background-color: #041e42;
    width: 100%;
}

@media(max-width:900px) {
    .nav-main {
        justify-content: space-between;
    }
}

.nav-main-2 {
    display: flex;
    flex-direction: row;
    justify-content: center;
    background-color: #041e42;
    width: 100%;
}

@media(max-width:900px) {
    .nav-main-2 {
        justify-content: space-between;
    }
}

.navbar {
    max-width: 1700px;
    justify-content: center;
    display: flex;
    flex-direction: row;
}

@media(max-width:900px) {
    .navbar {

        display: none;
    }
}

nav {
    width: 100%;
    height: auto;
    background-color: #041e42;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

/* .fa-bars {
    width: 100px;
} */
#menu-icon {
    display: none;
}

#navbar {
    display: flex;
    justify-content: space-around;

}

@media(max-width:900px) {
    #navbar {
        display: none;
    }
}

#navbar li {
    list-style: none;
}

#sidebar {
    height: 100%;
    background-color: #085791;
    position: fixed;
    top: 0;
    left: 0;
    transition: 0.3s;
    z-index: 1000;
    overflow: hidden;
    overflow-x: hidden;
}

ul {
    padding: 0px;
}

#sidebar ul {
    transition: 0.4s;
    position: absolute;
    z-index: 1000;
    overflow: hidden;
    margin-top: 10px !important;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding-left: 20px !important;
    padding: 0;
    margin: 0;
}

#sidebar li {
    list-style: none;
    margin: 10px 0;
}

#sidebar a {
    color: white;
    text-decoration: none;
}

.close-icon {
    position: absolute;
    top: 10px;
    right: 10px;
    font-size: 20px;
    cursor: pointer;
}


@media screen and (max-width: 900px) {
    #navbar {
        width: 100%;
    }

    #menu-icon {
        margin-right: 10px;
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 34px;
        height: auto;
        justify-content: center;
        cursor: pointer;
    }

    #sidebar {
        width: 300px;
    }
}

/* navbar */
.navbar-3 {
    display: flex;
    flex-direction: row;
    /* padding-top: 20px; */
    justify-content: center;
    /* padding-bottom: 20px; */
    background-color: #041e42;
}

.fa-brands.fa-facebook-f {
    display: flex;
    align-items: center;
    margin: 3px;
    width: 33px;
    height: 33px;
    color: #009cde;
    background-color: #fff;
    transition: background-color 0.3s ease, transform 0.3s ease;
    border-radius: 20px;
    font-size: 17px;
    justify-content: center;
    border: 1px solid #fff;
}

.location-desc h1 {
    margin-top: 12px !important;
    margin: 10px;
    font-size: 18px;
    width: 190px;
}

.location {
    align-items: center;
    display: flex;
    flex-direction: row;
    margin: 10px;
}

@media(max-width:1024px) {
    .location {
        text-align: center;
        align-items: center;
        flex-direction: column;
    }
}

.location img {
    background: #8fbe00;
    width: 50px;
    height: 50px !important;
    padding: 13px;
    display: inline-block;
    vertical-align: middle;
    line-height: 42px;
    text-align: center;
    border-radius: 80px;
    margin: 10px;
    height: 2rem;
}

.nav-2-btns {
    display: flex;
    align-items: center;
    flex-direction: row;
    margin: 10px;
}

@media(max-width:1024px) {
    .nav-2-btns {
        justify-content: center;
        flex-direction: column;
    }
}

.franchise-btn-side button {
    flex-direction: row;
    margin: 5px;
    font-size: 15px;
    height: 45px;
    width: 200px;
    background-color: #ffff;
    border-radius: 25px;
    cursor: pointer;
    font-weight: bolder;
    background-color: #fff;
    color: #041e42;
    border: none;
    padding: 10px;
    transition: background-color 0.3s ease;
}

.franchise-btn-side button:hover {
    color: #fff;
    background-color: #8fbe00;
}

.franchise-btn button {
    flex-direction: row;
    margin: 5px;
    font-size: 15px;
    height: 45px;
    width: 150px;
    background-color: #ffff;
    border-radius: 25px;
    cursor: pointer;
    font-weight: bolder;
    background-color: #fff;
    color: #041e42;
    border: none;
    padding: 10px;
    transition: background-color 0.3s ease;
}

.franchise-btn button:hover {
    color: #fff;
    background-color: #8fbe00;
}

.location-btn button {
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

.location-btn-side button {
    flex-direction: row;
    margin: 5px;
    font-size: 15px;
    height: 45px;
    width: 200px;
    color: #ffff;
    border-radius: 25px;
    cursor: pointer;
    font-weight: bolder;
    background-color: #8fbe00;
    border: none;
    padding: 10px;
}

.fa-brands.fa-facebook-f:hover {
    border: #041e42;
    color: #fff;
    background: #041e42;
    /* Change background color on hover */
    transform: translateY(-5px);
    /* Move it upwards */
}

.fa-brands.fa-google {
    margin: 3px;
    display: flex;
    align-items: center;
    width: 33px;
    height: 33px;
    color: #009cde;
    transition: background-color 0.3s ease, transform 0.3s ease;
    background-color: #fff;
    border-radius: 20px;
    font-size: 17px;
    justify-content: center;
    border: 1px solid #fff;
}

.fa-brands.fa-google:hover {
    border: #041e42;
    color: #fff;
    background: #041e42;
    transform: translateY(-5px);
}

.fa-solid.fa-phone {
    display: flex;
    margin: 3px;
    align-items: center;
    width: 33px;
    height: 33px;
    color: #009cde;
    transition: background-color 0.3s ease, transform 0.3s ease;
    background-color: #fff;
    border-radius: 20px;
    font-size: 17px;
    justify-content: center;
    border: 1px solid #fff;
}

.fa-solid.fa-phone:hover {
    border: #041e42;
    color: #fff;
    background: #041e42;
    transform: translateY(-5px);
}

.social {
    margin: 5px;
    display: flex;
    flex-direction: row;
    align-items: center;

}

.navbar-1 {
    display: flex;
    background: #009cde;
    flex-direction: row;
    justify-content: space-around;
    padding: 15px 0;
}


@media(max-width:1024px) {
    .logo-1 {
        display: flex;
        align-items: center;
    }
}

@media(max-width:1024px) {
    .logo {
        display: flex;
        align-items: center;
    }
}

.logo-1 img {
    display: none;
}

@media(max-width:900px) {
    .logo-1 img {
        display: flex;
        width: 250px;
        padding: 20px;
    }
}

.logo img {
    margin: 10px;
}

@media(max-width:1024px) {
    .logo img {
        width: 250px;
    }
}

.logo-side img {
    margin-top: 50px;
    margin-bottom: 50px;
    width: 250px;
}

.phone-details {
    display: flex;
    flex-direction: row;
}

.call {
    display: flex;
    margin: 5px;
    align-items: center;
}

.call p {
    font-weight: bold;
    color: #fff;
    margin-bottom: 0px !important;
}

.time {
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin: 5px;
    display: flex;
    align-items: center;
}

.time p {
    color: #fff;
    margin-bottom: 0px !important;
    font-weight: bold;
}



.container {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.navbar-brand {
    display: flex;
    align-items: center;
}



.title {
    color: #fff;
    font-size: 1.8rem;
    margin: 0;
}

.navbar-menu {
    display: flex;
    align-items: center;
}

.navbar-item-side-1 {
    color: #fff;
    width: 216px;
    font-size: 1rem;
    padding: 15px;
    font-weight: bold;
    cursor: pointer;
    text-decoration: none;
    position: relative;
    transition: background-color 0.3s ease;
    /* Smooth transition effect */
}

.navbar-item-side-1:hover {
    background-color: #0072c4;
    ;
    /* Blue background color on hover */
}

.navbar-item-side i {
    float: right;
}

.navbar-item-side {
    color: #fff;
    width: 216px;
    font-size: 1rem;
    padding: 15px;
    font-weight: bold;
    cursor: pointer;
    text-decoration: none;
    position: relative;
    transition: background-color 0.3s ease;
    /* Smooth transition effect */
}

.navbar-item-side:hover {
    background-color: #0072c4;
    ;
    /* Blue background color on hover */
}

.navbar-item-s {
    color: #fff;
    font-size: 1.1rem;
    padding: 15px;
    font-weight: bold;
    cursor: pointer;
    text-decoration: none;
    position: relative;
    transition: background-color 0.3s ease;
    /* Smooth transition effect */
}

.navbar-item {
    color: #fff;
    font-size: 1.5rem;
    padding: 15px;
    font-weight: bold;
    cursor: pointer;
    text-decoration: none;
    position: relative;
    transition: background-color 0.3s ease;
    /* Smooth transition effect */
}

.navbar-item:hover {
    background-color: #0072c4;
    ;
    /* Blue background color on hover */
}

@media(max-width:1400px) {
    .navbar-item {
        font-size: 1rem;
    }
}

.navbar-item-1 {
    color: #fff;
    font-size: 1.5rem;
    padding: 15px;
    font-weight: bold;
    cursor: pointer;
    text-decoration: none;
    position: relative;
    transition: background-color 0.3s ease;
}

.navbar-item-1:hover {
    background-color: #0072c4;
    /* Blue background color on hover */
}

@media(max-width:1400px) {
    .navbar-item-1 {
        font-size: 1rem;
    }
}

@media (max-width: 900px) {
    .navbar-menu {
        display: flex;
        position: fixed;
        top: 0;
        left: 0;
        height: 100%;
        width: 250px;
        background-color: #041e42;
        transition: left 0.5s;
        padding-top: 50px;
        z-index: 1000;
    }

    .navbar-menu.show-sidebar {
        left: 0;
    }

    .menu-icon {
        display: flex;
        align-items: center;
        cursor: pointer;
        margin-right: 20px;
        z-index: 1001;
    }
}

.navbar-3 {
    display: flex;
    flex-direction: row;
    /* padding-top: 20px; */
    justify-content: center;
    /* padding-bottom: 20px; */
    background-color: #041e42;
}

.fa-brands.fa-facebook-f {
    display: flex;
    align-items: center;
    margin: 3px;
    width: 33px;
    height: 33px;
    color: #009cde;
    background-color: #fff;
    transition: background-color 0.3s ease, transform 0.3s ease;
    border-radius: 20px;
    font-size: 17px;
    justify-content: center;
    border: 1px solid #fff;
}

.location-desc h1 {
    margin-top: 12px !important;
    margin: 10px;
    font-size: 18px;
    width: 190px;
}

.location {
    align-items: center;
    display: flex;
    flex-direction: row;
    margin: 10px;
}

@media(max-width:1024px) {
    .location {
        text-align: center;
        align-items: center;
        flex-direction: column;
    }
}

@media(max-width:900px) {
    .location {
        display: none;
    }
}

.nav-2-btns {
    display: flex;
    align-items: center;
    flex-direction: row;
    margin: 10px;
}

@media(max-width:1024px) {
    .nav-2-btns {
        justify-content: center;
        flex-direction: column;
    }
}

@media(max-width:900px) {
    .nav-2-btns {
        display: none;
    }
}

.franchise-btn button {
    flex-direction: row;
    margin: 5px;
    font-size: 15px;
    height: 45px;
    width: 150px;
    background-color: #ffff;
    border-radius: 25px;
    cursor: pointer;
    font-weight: bolder;
    background-color: #fff;
    color: #041e42;
    border: none;
    padding: 10px;
    transition: background-color 0.3s ease;
}

.franchise-btn button:hover {
    color: #fff;
    background-color: #8fbe00;
}

.location-btn button {
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

.fa-brands.fa-facebook-f:hover {
    border: #041e42;
    color: #fff;
    background: #041e42;
    /* Change background color on hover */
    transform: translateY(-5px);
    /* Move it upwards */
}

.fa-brands.fa-google {
    margin: 3px;
    display: flex;
    align-items: center;
    width: 33px;
    height: 33px;
    color: #009cde;
    transition: background-color 0.3s ease, transform 0.3s ease;
    background-color: #fff;
    border-radius: 20px;
    font-size: 17px;
    justify-content: center;
    border: 1px solid #fff;
}

.fa-brands.fa-google:hover {
    border: #041e42;
    color: #fff;
    background: #041e42;
    transform: translateY(-5px);
}

.fa-solid.fa-phone {
    display: flex;
    margin: 3px;
    align-items: center;
    width: 33px;
    height: 33px;
    color: #009cde;
    transition: background-color 0.3s ease, transform 0.3s ease;
    background-color: #fff;
    border-radius: 20px;
    font-size: 17px;
    justify-content: center;
    border: 1px solid #fff;
}

.fa-solid.fa-phone:hover {
    border: #041e42;
    color: #fff;
    background: #041e42;
    transform: translateY(-5px);
}

.social {
    margin: 5px;
    display: flex;
    flex-direction: row;
    align-items: center;

}

.navbar-1 {
    display: flex;
    background: #009cde;
    flex-direction: row;
    justify-content: space-around;
    padding: 15px 0;
}

.navbar-2 {
    justify-content: space-around;
    display: flex;
    flex-direction: row;
    background: #0072c4;
    height: auto;
    padding-top: 20px;
    padding-bottom: 20px;
}

@media(max-width:900px) {
    .navbar-2 {
        display: none;
    }
}

@media(max-width:1024px) {
    .logo {
        display: flex;
        align-items: center;
    }
}

.logo img {
    margin: 10px;
}

@media(max-width:1024px) {
    .logo img {
        width: 250px;
    }
}

.phone-details {
    display: flex;
    flex-direction: row;
}

@media(max-width:900px) {
    .phone-details {
        display: none;
    }
}

.call {
    display: flex;
    margin: 5px;
    align-items: center;
}

.call p {
    font-weight: bold;
}

.time {
    margin: 5px;
    display: flex;
    align-items: center;
}

.time p {
    font-weight: bold;
}



.container {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.navbar-brand {
    display: flex;
    align-items: center;
}



.title {
    color: #fff;
    font-size: 1.8rem;
    margin: 0;
}

.navbar-menu {
    display: none;
    transition: left 0.3s ease;
    align-items: center;
    left: 0;
}







.menu-icon {
    display: none;
}

/* Media query for responsive design at exactly 900px */
@media (max-width: 900px) {
    .navbar-3 {
        display: none;
    }

    .menu-icon {
        display: flex;
        align-items: center;
        cursor: pointer;
        margin-right: 20px;
    }

    .navbar-menu {
        display: flex !important;
        flex-direction: column;
        position: absolute;
        top: 0;
        left: 0%;
        height: 100%;
        width: 250px;
        background-color: #041e42;
        transition: right 0.5s;
        /* z-index: 1000; */
        padding-top: 50px;
    }

    .navbar-menu.show {
        left: 0;
    }

    .close-icon {
        position: absolute;
        top: 10px;
        right: 10px;
        cursor: pointer;
        color: #fff;
    }
}
</style>