<template>
    <div class="main-sign">
      <a href="https://app.washman.pk/bestil"><button class="signup-button">Sign Up</button></a>
      
  
      <div v-if="isSignupPopupVisible" class="popup-overlay">
        <div class="popup">
          <button @click="closePopup" class="close-button">×</button>
          <div class="popup-content">
            <h2 class="popup-title">Join the Future!</h2>
            <form @submit.prevent="submitForm" class="signup-form">
              <div class="input-group">
                <input type="text" placeholder="Full Name" v-model="formData.name" class="input-field" required />
                <input type="email" placeholder="Email Address" v-model="formData.email" class="input-field" required />
              </div>
              <div class="input-group">
                <input type="password" placeholder="Password" v-model="formData.password" class="input-field" required />
                <input type="password" placeholder="Confirm Password" v-model="formData.confirmPassword" class="input-field" required />
              </div>
              <button type="submit" class="signup-button">Get Started</button>
            </form>
          </div>
        </div>
      </div>
  
      <div v-if="isSigninPopupVisible" class="popup-overlay">
        <div class="popup">
          <button @click="closePopup" class="close-button">×</button>
          <div class="popup-content">
            <h2 class="popup-title">Welcome Back!</h2>
            <form @submit.prevent="signin" class="signin-form">
              <input type="email" placeholder="Email Address" v-model="signinData.email" class="input-field" required />
              <br>
               
              <input type="password" placeholder="Password" v-model="signinData.password" class="input-field" required />
              <button type="submit" class="signup-button">Sign In</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'SignUp',
    data() {
      return {
        isSignupPopupVisible: false,
        isSigninPopupVisible: false,
        isSignedUp: false,
        formData: {
          name: '',
          email: '',
          password: '',
          confirmPassword: '',
        },
        signinData: {
          email: '',
          password: '',
        },
      };
    },
    methods: {
      showSignupPopup() {
        this.isSignupPopupVisible = true;
      },
      showSigninPopup() {
        this.isSigninPopupVisible = true;
      },
      closePopup() {
        this.isSignupPopupVisible = false;
        this.isSigninPopupVisible = false;
      },
      submitForm() {
        console.log('Form submitted:', this.formData);
        this.isSignupPopupVisible = false;
        this.isSignedUp = true;
      },
      signin() {
        console.log('Sign in data:', this.signinData);
         
        this.isSigninPopupVisible = false;
      },
    },
  };
  </script>
  
  <style>
  .signin-form {
    display: flex;
    flex-direction: column;
    justify-content: left;
  }
  .success-message {
    display: flex;
    justify-content: center;
    flex-direction: column;
  }
  .main-sign {
    display: flex;
    justify-content: center;
  }
  .signup-button {
    margin-top: 20px;
    background-color: #00c6ff;
    color: #fff;
    border: none;
    padding: 9px 33px;
    font-size: 21px;
    border-radius: 50px;
    cursor: pointer;
    transition: background-color 0.3s ease;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  }
  
  .signup-button:hover {
    background-color: #00a4ff;
  }
  
  .popup-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.8);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 999;
  }
  
  .popup {
    background-color: #fff;
    padding: 60px;
    border-radius: 30px;
    box-shadow: 0 10px 40px rgba(0, 0, 0, 0.4);
    max-width: 800px;
    width: 90%;
    position: relative;
    animation: fadeIn 0.5s ease;
  }
  
  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(-50px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  .close-button {
    position: absolute;
    top: 20px;
    right: 20px;
    background: none;
    border: none;
    font-size: 30px;
    color: #151414;
    cursor: pointer;
  }
  
  .popup-content {
    margin-top: 30px;
  }
  
  .popup-title {
    margin-bottom: 30px;
    font-size: 32px;
    color: #333;
    text-align: center;
  }
  
  .input-group {
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
  }
  
  .input-field {
    flex: 1;
    padding: 15px;
    border: 2px solid #00c6ff;
    border-radius: 10px;
    font-size: 18px;
  }
  
  .submit-button {
    background-color: #00c6ff;
    color: #fff;
    border: none;
    padding: 20px 0;
    font-size: 24px;
    border-radius: 10px;
    cursor: pointer;
    transition: background-color 0.3s ease;
    box-shadow: 0 5px 15px rgba(0, 198, 255, 0.4);
  }
  
  .submit-button:hover {
    background-color: #00a4ff;
  }
  </style>
  