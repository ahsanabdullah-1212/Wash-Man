<template>
  <div class="main-pickup">
    <div class="pickup-row">
      <div class="pickup-head">
        <img src="@/assets/images/rect.png" alt="">
        <h1>PICKUP SCHEDULE</h1>
        <p>We pick up & deliver Monday - Friday and have 2 windows available each day: a morning window from 9 AM to 1
          PM and an afternoon window from 1 PM to 4 PM. Our driver will text you when they are on the way!</p>
      </div>
      <div class="pickup-btn">
        <button>Schedule a Pickup</button>
      </div>
    </div>
    <div class="about-row">

      <div class="about-col-1" data-aos="fade-down" data-aos-delay="200">
        <div class="about-col-1-head">
          <img src="@/assets/images/rect.png" alt="">
          <h1>PICKUP & DELIVERY</h1>
        </div>
        <div class="about-col-1-descp">
          <h4>Do you hate doing laundry? Let WaveMAX do it for you!</h4>
          <p>
            We offer residential pickup and delivery throughout Arlington, Mansfield, Kennedale, Grand Prairie, Fort
            Worth, Bedford, North Richland Hills, Hurst, and Haltom City areas..</p>
          <br>
          <p>
            We provide detergent, softeners, and hypoallergenic Free and Clear, as requested. Everything is washed per
            your instructions, and all clothes are neatly folded and hung on hangers.
          </p>
          <br>
          <p>A small trip fee may be added depending on location. Call for final pricing.

            What are the next steps when you have WaveMAX handle your laundry needs? Our process is as simple as 1-2-3!
          </p>
        </div>
      </div>
      <div class="about-col-2" data-aos="fade-up" data-aos-delay="200">
        <img src="@/assets/images/wavemax mesquite tx3.jpg" alt="">
      </div>
    </div>
    <div class="about-row">
      <div class="about-col-2" data-aos="fade-down" data-aos-delay="200">
        <img src="@/assets/images/wavemax arlington tx3.jpg" alt="">
      </div>
      <div class="about-col-1" data-aos="fade-up" data-aos-delay="200">
        <div class="about-col-1-head">
          <img src="@/assets/images/rect.png" alt="">
          <h1>HOW MUCH DOES LAUNDRY WEIGH?</h1>
        </div>
        <div class="about-col-1-descp">
          <h6>1.We will pick up your dirty laundry at your chosen location.</h6>
          <h6>2.The laundry is weighed and charged at 1.99/lb, 17lb minimum. Some larger items have different charges..
          </h6>
          <h6>3.Items are picked up M-F from 9 am-12 pm and delivered the next day from 1 pm-4 pm. Extra-large orders
            may require 2 days.</h6>
          <h6>4.Everything is carefully folded and delivered back to your location of choice</h6>
          <h6>5.Payments are processed through our safe and secure software once the order is finished.</h6>
        </div>
      </div>

    </div>
  </div>
</template>

<script>

</script>

<style>
.pickup-btn button {
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

.pickup-row img {
  padding: 10px;
}

.pickup-row p {
  font-size: 20px;
  padding: 10px;
}

@media(max-width:380px) {
  .pickup-row p {
    font-size: 15px;
  }
}

.pickup-row h1 {
  font-weight: bolder;
  font-size: 40px;
  padding: 20px;
  color: #0072c4;
}

@media(max-width:380px) {
  .pickup-row h1 {
    font-size: 25px;
  }
}

.pickup-row {
  display: flex;
  padding: 35px;
  text-align: center;
  justify-content: center;
  flex-direction: column;
  max-width: 1200px;
  margin-right: auto;
  margin-left: auto;
}
</style>
