<!-- src/components/Contact.vue -->
<template>
  <div id="contact" class="container mx-auto p-6 mt-12 bg-background">
    <h2 class="text-4xl font-bold mb-4 text-center text-accent">Contact Me</h2>
    <div class="text-center">
      <p class="text-gray-700 mb-4">Feel free to reach out to me via WhatsApp or check my social media profiles.</p>
      <a href="https://wa.me/yourphonenumber" target="_blank" class="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-700 transition duration-300">Contact via WhatsApp</a>
      <div class="mt-4">
        <a href="https://github.com/yourgithubusername" target="_blank" class="text-gray-700 hover:text-black mx-2">
          <font-awesome-icon :icon="['fab', 'github']" class="text-4xl text-accent" />
        </a>
        <a href="https://linkedin.com/in/yourlinkedinusername" target="_blank" class="text-gray-700 hover:text-black mx-2">
          <font-awesome-icon :icon="['fab', 'linkedin']" class="text-4xl text-accent" />
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Contact'
};
</script>
