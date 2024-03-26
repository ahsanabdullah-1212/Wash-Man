<template>
    <div class="main-question">
        <div class="main-question-row">
            <div class="main-contact">
                <div class="container">
                    <img src="@/assets/images/rect.png"  alt=""> 
                    <h1>Contact Us</h1>
                    <form id="contactForm">
                        <div class="form-group-1">
                            <input type="text" id="firstName" name="firstName" required placeholder="First Name...">
                            <input type="text" id="lastName" name="lastName" required placeholder="Last Name...">
                        </div>
                        <div class="form-group-2">
                            <input type="text" id="phone" name="phone" required placeholder="Your Phone...">
                            <input type="email" id="email" name="email" required placeholder="Your Email...">
                        </div> 
                        <div class="form-group">
                            <textarea id="message" name="message" rows="5" required placeholder="Your Message..."></textarea>
                        </div>
                        <div class="form-group-3">
                            <input class="checkbox" type="checkbox" id="agree" name="agree" required>
                            <label for="agree">By checking this box and submitting this form, you agree to our PRIVACY
                                POLICY and you consent to receive phone calls, text messages, and emails from WaveMAX
                                Laundry at the phone number and email address above. You can opt out any time by
                                replying STOP to a text or by clicking the "Unsubscribe" link in an email message.
                                Message and data rates may apply.</label>
                        </div>
                        <button type="submit">Submit</button>
                    </form>
                </div>
            </div>
            <div class="main-links">
                <div class="link-head">
                    <img src="@/assets/images/rect.png" alt="">
                    <h1>LOCAL LINKS</h1>
                </div>
                <div class="links">
                     <ul>
                        <li>WAVEMAX LIVE</li>
                        <li>HOME</li>
                        <li>SELF-SERVE LAUNDRY</li>
                        <li>WASH-DRY-FOLD</li>
                        <li>PICKUP & DELIVERY</li>
                        <li>COMMERCIAL</li>
                        <li>ABOUT US</li>
                        <li>FAQ</li>
                        <li>EMPLOYMENT</li>
                        <li>TESTIMONIALS</li>
                        <li>BLOG</li>
                        <li>CONTACT US</li>
                        <li>LOCATIONS</li>
                     </ul>
                </div>
            </div>
            <div class="main-map">
                <iframe
            className="my_map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3399.4414424483393!2d74.4166647!3d31.566940300000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39190f0cddfefa15%3A0x82458296d42c5926!2sSTechSole!5e0!3m2!1sen!2s!4v1675708925868!5m2!1sen!2s"
            width="100%"
            height="100%"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="maplocation"
          ></iframe>
            </div>
        </div>
    </div>
</template>

<script>

import AOS from 'aos';
import 'aos/dist/aos.css';

export default {
    name: 'FrequentQuestion',
    mounted() {
        AOS.init();
    },
};
</script>


<style>
.main-question {
    margin-top: 35px;
}
.main-map{
    width:33.33%
}
@media(max-width:770px){
    .main-map{
        width: 100%;
        height: 600px;
    }
}
.main-links{
    width:33.33%
}
@media(max-width:770px){
    .main-links{
        width: 100%;
    }
}
 
.main-contact {
    padding: 20px;
    background-color: #21a0fb;
    width:33.33%
}
@media(max-width:770px){
    .main-contact{
        width: 100%;
    }
}
 
 
.main-question-row {
    display: flex;
    flex-direction: row;
}
@media(max-width:768px){
    .main-question-row{
        flex-direction: column;
    }
}
.my_map{
  filter: invert();
  border: 0;
}
.links li {
    margin: 5px;
    margin-left: 0px!important;
    color: #fff;
}
.link-head img {
    margin: 20px;
}
.link-head h1 {
    color: #fff;
    margin-top: 5px!important;
    margin: 20px;
}
.main-links {
    background: #323232;
    display: flex;
    flex-direction: column;
    padding: 25px;
}
.checkbox{
    width: 1.05rem;
    height: 1.05rem;
    margin-top: 0.325rem;
    vertical-align: top;
    background-color: #fefefe;
    background-size: contain;
    
}

.container h1 {
    margin-left: 10px;
    color: #fff;
}
.container img {
    padding-top: 20px;
    margin-bottom: 15px;
    margin-left: 15px;
}
.form-group-2 input{
    margin: 10px;
    border-radius: 12px!important;
    color: #cbcbcb;
    background: #21a0fb;
}
.form-group  textarea{
    margin: 10px;
    border-radius: 12px!important;
    background: #21a0fb;
    color: #cbcbcb;
    
}
.form-group-1 input{
    margin: 10px;
    border-radius: 12px!important;
    color: #cbcbcb;
    background: #21a0fb;
}
.form-group-1{
    display: flex;
    flex-direction: row;
}
.form-group-3{
    display: flex;
    flex-direction: row;
}
.form-group-2{
    display: flex;
    flex-direction: row;
}
.form-group {
    margin-bottom: 20px;
}

label {
    display: block;
    font-size: 15px;
    color: #fff;
    margin-bottom: 5px;
}

input[type="text"],
input[type="email"],
textarea {
    width: 100%;
    padding: 10px;
    border: 1.5px solid #ccc;
    border-radius: 5px;
}
textarea{
    width:80%;
}
input[type="checkbox"] {
    margin-right: 10px;
}

#contactForm button {
    margin-top: 40px!important;
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

 
</style>
