<!-- src/components/LandingPage.vue -->
<template>
  <div class="landing-page container mx-auto p-6 bg-background" id="home">
    <div class="text-center mt-20">
      <h1 class="text-5xl font-bold mb-4 text-accent animate-fade-in">Hello, I'm [Your Name]</h1>
      <p class="text-xl text-primary mb-6 animate-fade-in-delay">A passionate Software Engineer.</p>
      <a href="/resume.pdf"  class="bg-secondary text-background py-2 px-4 rounded hover:bg-primary transition duration-300">Download My Resume</a>
    </div>
    <div id="about" class="mt-12">
      <h2 class="text-4xl font-bold mb-4 text-accent animate-fade-in">About Me</h2>
      <p class="text-gray-700 mb-4 animate-fade-in-delay">
        I am a software engineer with experience in building web applications using modern technologies. I enjoy solving complex problems and creating user-friendly solutions. My skills include JavaScript, Vue.js, React, Node.js, and more.
      </p>
      <p class="text-gray-700 mb-4 animate-fade-in-delay">
        I am passionate about continuous learning and staying up-to-date with the latest industry trends. When I'm not coding, I enjoy reading, hiking, and spending time with family and friends.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LandingPage'
};
</script>

<style scoped>
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
.animate-fade-in {
  animation: fadeIn 1s ease-in-out;
}
.animate-fade-in-delay {
  animation: fadeIn 1s ease-in-out 0.5s forwards;
  opacity: 0; /* Initial opacity to support the animation */
}
.landing-page {
  padding-top: 50px;
  padding-bottom: 50px;
}
</style>
