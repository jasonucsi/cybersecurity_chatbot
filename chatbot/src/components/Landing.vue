<template>
  <div class="landing-page">
    <!-- Left side with carousel -->
    <div class="left">
      <vue-carousel :items-to-show="1" :scroll-per-page="true">
        <div v-for="(image, index) in carouselImages" :key="index" class="carousel-item">
          <img :src="image" alt="carousel image" />
        </div>
      </vue-carousel>
    </div>

    <!-- Right side with login/register form -->
    <div class="right">
      <div class="form-container">
        <h2>Welcome to Our Website</h2>
        <form @submit.prevent="handleFormSubmit">
          <div class="form-group">
            <label for="email">Email:</label>
            <input type="email" id="email" v-model="email" required />
          </div>
          <div class="form-group">
            <label for="password">Password:</label>
            <input type="password" id="password" v-model="password" required />
          </div>
          <button type="submit">Login</button>
          <div class="register-link">
            <p>Don't have an account? <a href="#">Register</a></p>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
// You can install Vue Carousel if you haven't already
// npm install vue-carousel

import { VueCarousel } from 'vue-carousel';

export default {
  name: 'LandingPage',
  components: {
    VueCarousel
  },
  data() {
    return {
      carouselImages: [
        'https://via.placeholder.com/800x600?text=Image+1',
        'https://via.placeholder.com/800x600?text=Image+2',
      ],
      email: '',
      password: ''
    };
  },
  methods: {
    handleFormSubmit() {
      // Handle the form submission logic
      console.log('Form submitted with:', this.email, this.password);
    }
  }
};
</script>

<style scoped>
.landing-page {
  display: flex;
  height: 100vh;
  width: 100%;
}

.left {
  flex: 1;
  height: 100%;
}

.right {
  flex: 1;
  height: 100%;
  background-color: #f4f4f4;
  display: flex;
  justify-content: center;
  align-items: center;
}

.form-container {
  background-color: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 400px;
}

h2 {
  text-align: center;
  margin-bottom: 20px;
}

.form-group {
  margin-bottom: 15px;
}

label {
  display: block;
  font-weight: bold;
}

input {
  width: 100%;
  padding: 10px;
  margin-top: 5px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

button {
  width: 100%;
  padding: 10px;
  background-color: #42b983;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background-color: #379f6a;
}

.register-link {
  text-align: center;
  margin-top: 15px;
}

.register-link a {
  color: #42b983;
  text-decoration: none;
}

.register-link a:hover {
  text-decoration: underline;
}

/* Carousel styles */
.carousel-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
