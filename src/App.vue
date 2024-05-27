<template>
  <div id="app">
    <navbarComponent2 />
     
    <button @click="scrollToTop" v-if="showScrollButton" class="scroll-top-button">↑</button>
    <router-view />
  </div>
</template>

<script>
import './assets/styles/global.css';
import navbarComponent2 from './components/navbarComponent2.vue';
 
import '@fortawesome/fontawesome-free/css/all.css'

export default {
  name: 'App',
  components: {
    
    navbarComponent2,
  },
  data() {
    return {
      showScrollButton: false // Initialize showScrollButton to false
    };
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
    this.$router.afterEach(() => {
      this.scrollToTop();
    });
  },
  methods: {
    scrollToTop() {
      // Smooth scroll to the top of the page
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
     
    },
    handleScroll() {
      // Check if user has scrolled down beyond certain threshold
      if (window.pageYOffset > 200) { // You can adjust the threshold as needed
        this.showScrollButton = true;
      } else {
        this.showScrollButton = false;
      }
    }
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll); // Clean up event listener
  }
}
</script>
<style>
@font-face {
  font-family: "BankGothic";
  src: url(@/assets/fonts/BankGothic.ttf) format("truetype");
}

@font-face {
  font-family: "GowunBatang";
  src: url(@/assets/fonts/GowunBatang-Regular.ttf) format("truetype");
}

@font-face {
  font-family: "Playfair Display";
  src: url(@/assets/fonts/static/PlayfairDisplay-Medium.ttf) format("truetype");
}

@font-face {
  font-family: "Corben";
  src: url(@/assets/fonts/Corben-Regular.ttf) format("truetype");
}
 
@font-face {
  font-family: "BeVietnamPro-Black";
  src: url(@/assets/fonts/BeVietnamPro-Black.ttf) format("truetype");
}
 

.scroll-top-button {
  position: fixed;
  z-index: 1000;
  bottom: 30px;
  right: 30px;
  background-color: transparent;
  color: #000000;
  padding: 10px 20px;
  border: none;
  border-radius: 50%;
  font-family: 'Poppins', sans-serif;  
  font-size: 20px;
  text-transform: uppercase;
  letter-spacing: 1px;
  cursor: pointer;
  overflow: hidden;
  transition: background-color 0.3s ease-in-out, transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);  
}

.scroll-top-button:hover {
  background-color: #00c4ff;  
  transform: translateY(-3px);  
  box-shadow: 0 0 30px rgba(0, 196, 255, 0.5);  
}

.scroll-top-button i {
  display: inline-block;
  vertical-align: middle;
  margin-right: 8px;
}

.scroll-top-button::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: radial-gradient(circle, rgba(255, 255, 255, 0) 50%, rgba(255, 255, 255, 0.3) 80%, rgba(255, 255, 255, 0.5) 100%);
  border-radius: 50%;
  z-index: -1;
  transition: transform 0.8s ease-in-out;
  transform: scale(0);
}

.scroll-top-button:hover::before {
  transform: scale(1);
}

/* Optional: Add a smooth scroll behavior when clicking the button */
html {
  scroll-behavior: smooth;
}

/* Add other hover effects as needed */
 
</style>