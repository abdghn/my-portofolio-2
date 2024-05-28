<!-- src/App.vue -->
<template>
  <div id="app" class="bg-background">
    <Navbar />
    <LandingPage />
    <Portfolio />
    <Skills />
    <Contact />
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue';
import LandingPage from './components/LandingPage.vue';
import Portfolio from './components/Portfolio.vue';
import Skills from './components/Skills.vue';
import Contact from './components/Contact.vue';

export default {
  name: 'App',
  components: {
    Navbar,
    LandingPage,
    Portfolio,
    Skills,
    Contact
  }
};
</script>

<style>
/* Tambahkan gaya global di sini jika perlu */
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  padding-top: 60px; /* To account for fixed navbar */
}
</style>
