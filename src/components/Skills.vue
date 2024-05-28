<!-- src/components/Skills.vue -->
<template>
  <div id="skills" class="container mx-auto p-6 mt-12 bg-background">
    <h2 class="text-4xl font-bold mb-4 text-center text-accent">Skills</h2>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div v-for="skill in skills" :key="skill.name" class="bg-white rounded-lg shadow-md p-6 text-center">
        <font-awesome-icon :icon="skill.icon" class="text-4xl mb-2" />
        <h3 class="text-2xl font-semibold mb-2 text-accent">{{ skill.name }}</h3>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Skills',
  data() {
    return {
      skills: [
        { name: 'JavaScript', icon: ['fab', 'js'] },
        { name: 'Vue.js', icon: ['fab', 'vuejs'] },
        { name: 'React', icon: ['fab', 'react'] },
        { name: 'Node.js', icon: ['fab', 'node-js'] },
        { name: 'CSS', icon: ['fab', 'css3-alt'] },
        { name: 'HTML', icon: ['fab', 'html5'] }
        // Tambahkan skill lainnya di sini
      ]
    };
  }
};
</script>

<style scoped>
/* Tambahkan gaya untuk ikon jika diperlukan */
</style>
