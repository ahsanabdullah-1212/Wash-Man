<template>
    <div class="main-footer">
        <div class="basic-footer">
            <div class="footer-row-1">
                <div class="footer-col-1">
                    <img src="@/assets/images/apple.png" alt="">
                    <img src="@/assets/images/play.png" alt="">
                </div>
                <div class="footer-col-2">
                    <img src="@/assets/images/weather.png" alt="">
                    <div class="footer-col-2-desc">
                        <h6>Pantego, TX</h6>
                        <h4>Chances Rain Showers</h4>
                        <h3>69°C</h3>
                    </div>
                </div>
            </div>
            <div class="footer-row-2">
                <div class="footer-col-1">
                    <h4>© 2024 All rights reserved.</h4>
                    <h4>Privacy Policy</h4>
                    <h4>Terms & Conditions</h4>
                    <h4>Developed by Walibu</h4>
                </div>
                <div class="footer-col-2">
                    <h4>Address: 2823 W Park Row Dr Arlington, TX 76013</h4>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
export default {
  name: 'MainFooter',  
  data() {
    return {
       
    };
  },
};
</script>


<style>

.footer-col-2-desc {
    display: flex;
    flex-direction: column;
    margin: 20px;
}
.footer-col-2 {
    display: flex;
    align-items: center;
    flex-direction: row;
    padding: 18px;
}
/* @media(max-width:750px){
    .footer-col-2 {
        flex-direction: column;
    }
} */
.footer-col-1 img {
    border-radius: 9px;
    margin: 20px;
    height: 2.5rem;
}
.footer-col-2 img {
    margin: 20px;
    height: 5.5rem;
    border-radius: 9px;
}
.footer-col-1 {
    display: flex;
    align-items: center;
    flex-direction: row;
    padding: 25px;
}
@media(max-width:750px){
    .footer-col-1 {
        flex-direction: column;
    }
}
.main-footer {
    background-color: #054574;
}
.footer-row-1 {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}
@media(max-width:500px){
    .footer-row-1{
        flex-direction: column;
        justify-content: center;
    }
}
.footer-row-2 {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
}
@media(max-width:380px){
    .footer-row-2{
        flex-direction: column;
        justify-content: center;
    }
}
.footer-col-1 h4 {
    font-size: 1rem;
    color: #fff;
    margin: 10px;
}
@media(max-width:1024px){
    .footer-col-1 h4{
        font-size: 0.7rem;
    }
}
.footer-col-2 h4 {
    font-size: 1rem;
    color: #fff;
    /* text-align: center; */
}
.footer-col-2 h3 {
    font-size: 1rem;
    color: #fff;
}
.footer-col-2 h6 {
    font-size: 1rem;
    color: #fff;
}
@media(max-width:380px){
    .basic-footer  {
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
}
</style>