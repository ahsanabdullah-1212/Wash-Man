<template>
  <section id="FAQ">
    <div class="main-ask"  >
    <div class="main-ask-head" data-aos="fade-down" data-aos-delay="200">
      <h1>Frequently Asked Questions (FAQ)</h1>
    </div>
    <div class="main-questions">
      <div class="ask-question-1">
        <div class="product-detail-block border-wrapper" type="button" @click="toggleCollapse('shippingInformation1')"
          :class="{ 'clicked': isClicked1 }" data-bs-toggle="collapse" data-bs-target="#shippingInformation1"
          aria-expanded="false" aria-controls="collapseExample">
          <span class="col-2"></span>
          <span class="col">
            How does self-service laundry work?
          </span>
          <span class="col-2">
            <i class="fa-solid fa-angle-down"></i>
          </span>
        </div>
        <div class="collapse " id="shippingInformation1">
          <div class="description">
            You’ll need to purchase a laundry card from the attendant or vending machine. Once you have your card, you
            can
            activate it by putting money on it at the register. These machines take cash and credit cards. After your
            card
            is activated, you can begin using any of the washers or dryers in the laundromat.
          </div>
        </div>
      </div>
      <div class="ask-question-2">
        <div class="product-detail-block border-wrapper" type="button" @click="toggleCollapse('shippingInformation2')"
          :class="{ 'clicked': isClicked2 }" data-bs-toggle="collapse" data-bs-target="#shippingInformation2"
          aria-expanded="false" aria-controls="collapseExample">
          <span class="col-2"></span>
          <span class="col">
            How much does it cost to wash clothes at WaveMAX Laundry?
          </span>
          <span class="col-2">
            <i class="fa-solid fa-angle-down"></i>
          </span>
        </div>
        <div class="collapse" id="shippingInformation2">
          <div class="description">
            The cost varies by location. If you want to know the prices, you may want to check our locations page and
            look for a WaveMAX laundromat near you to learn more about the prices.
          </div>
        </div>
      </div>
      <div class="ask-question-3">
        <div class="product-detail-block border-wrapper" type="button" @click="toggleCollapse('shippingInformation3')"
          :class="{ 'clicked': isClicked3 }" data-bs-toggle="collapse" data-bs-target="#shippingInformation3"
          aria-expanded="false" aria-controls="collapseExample">
          <span class="col-2"></span>
          <span class="col">
            How often does WaveMAX Laundry clean their machines?
          </span>
          <span class="col-2">
            <i class="fa-solid fa-angle-down"></i>
          </span>
        </div>
        <div class="collapse" id="shippingInformation3">
          <div class="description">
            We clean our machines regularly be it a washing machine or a dryer. We have our standard set of hygiene
            rules and regulations that all machines are cleaned regularly to promote safety and cleanliness inside our
            laundromats.
          </div>
        </div>
      </div>
      <div class="ask-question-4">
        <div class="product-detail-block border-wrapper" type="button" @click="toggleCollapse('shippingInformation4')"
          :class="{ 'clicked': isClicked4 }" data-bs-toggle="collapse" data-bs-target="#shippingInformation4"
          aria-expanded="false" aria-controls="collapseExample">
          <span class="col-2"></span>
          <span class="col">
            Should you wash white clothes separately?
          </span>
          <span class="col-2">
            <i class="fa-solid fa-angle-down"></i>
          </span>
        </div>
        <div class="collapse" id="shippingInformation4">
          <div class="description">
            Yes, absolutely! You should always wash white clothes separately from your colored clothes. Laundry
            detergents that are formulated for whites contain a special bleaching agent to ensure they stay looking
            fresh and bright. If you don't wash your whites separately, the chlorine in the bleach will interact with
            pigments in other fabrics and cause discoloration or fading.
          </div>
        </div>
      </div>
      <div class="ask-question-5">
        <div class="product-detail-block border-wrapper" type="button" @click="toggleCollapse('shippingInformation5')"
          :class="{ 'clicked': isClicked5 }" data-bs-toggle="collapse" data-bs-target="#shippingInformation5"
          aria-expanded="false" aria-controls="collapseExample">
          <span class="col-2"></span>
          <span class="col">
            Why is self-service laundry important?
          </span>
          <span class="col-2">
            <i class="fa-solid fa-angle-down"></i>
          </span>
        </div>
        <div class="collapse" id="shippingInformation5">
          <div class="description">
            Self-service laundry is essential because it allows people to do their laundry without relying on others. It
            also saves money and time, as people can wash and dry their clothes in one place.
          </div>
        </div>
      </div>
    </div>
  </div>
  </section>
  
</template>
<script>
import AOS from 'aos';
import 'aos/dist/aos.css';

export default {
  name: 'AskedQuestion',
  data() {
    return {
      activeSection: null,
      angleIcons: {
        shippingInformation1: 'fa-angle-down',
        shippingInformation2: 'fa-angle-down',
        shippingInformation3: 'fa-angle-down',
        shippingInformation4: 'fa-angle-down',
        shippingInformation5: 'fa-angle-down',
      },
      isClicked1: false,
      isClicked2: false,
      isClicked3: false,
      isClicked4: false,
      isClicked5: false,
    };
  },
  mounted() {
    AOS.init();
  },
  methods: {
    toggleCollapse(section) {
      // Close all other sections except the current one
      for (let i = 1; i <= 5; i++) {
        if (`isClicked${i}` !== `isClicked${section.charAt(section.length - 1)}`) {
          this[`isClicked${i}`] = false;
          document.getElementById(`shippingInformation${i}`).classList.remove('show');
        }
      }

      // Toggle the clicked state for the specific section
      this[`isClicked${section.charAt(section.length - 1)}`] = !this[`isClicked${section.charAt(section.length - 1)}`];
    },
  },
};
</script>

<style>
/* Example CSS for smooth rotating animation */
.product-detail-block .fa-angle-down {
  transition: transform 0.3s ease;
}

.clicked .fa-angle-down {
  transform: rotate(180deg);
}

.clicked .fa-angle-up {
  transform: rotate(0);
}

.col-2 i {
  display: flex;
  padding: 5px;
  float: right;
}

.main-ask {
  padding-top: 40px;
  padding-bottom: 40px;
}

.main-ask-head {

  display: flex;
  justify-content: center;
  text-align: center;
}

.main-ask-head h1 {
  font-size: 45px;
  margin: 20px;
  font-weight: bold;
}

.main-questions {
  margin-left: auto;
  margin-right: auto;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 20px;
}

.product-detail-block.border-wrapper {
  padding: 30px;
  margin: 40px;
  border-radius: 5px 5px 0 0;
  background: rgb(242 242 242);
  margin-bottom: 0px !important;
  border: 1px solid rgb(244, 244, 244);
  transition: background-color 0.3s ease;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

@media(max-width:380px) {
  .product-detail-block.border-wrapper {
    /* font-size: 12px; */
    padding: 12px;
  }
}

.product-detail-block.border-wrapper.clicked {
  background-color: #0088cc;
}

.description {
  padding: 30px;
  margin: 40px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border-radius: 0 0 5px 5px;
  background: rgb(240, 240, 240);
  border-top: 0px solid rgb(255, 255, 255) !important;
  margin-top: 0px !important;
  border: 1px solid rgb(227, 227, 227);
}

@media(max-width:380px) {
  .description {
    /* font-size: 12px; */
    padding: 12px;
  }
}
</style>
