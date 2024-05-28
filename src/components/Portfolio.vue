<!-- src/components/Portfolio.vue -->
<template>
  <div class="container mx-auto p-6" id="work">
    <h1 class="text-4xl font-bold text-center mb-8">{{ title }}</h1>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div v-for="project in projects" :key="project.id" class="bg-white rounded-lg shadow-md p-6">
        <h2 class="text-2xl font-semibold mb-2">{{ project.name }}</h2>
        <p class="text-gray-700 mb-4">{{ project.description }}</p>
        <a :href="project.link" target="_blank" class="text-blue-500 hover:underline">View Project</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Portfolio',
  data() {
    return {
      title: 'My Portfolio',
      projects: [
        {
          id: 1,
          name: 'Project One',
          description: 'Description for project one.',
          link: 'https://example.com/project-one'
        },
        {
          id: 2,
          name: 'Project Two',
          description: 'Description for project two.',
          link: 'https://example.com/project-two'
        },
        {
          id: 3,
          name: 'Project Two',
          description: 'Description for project two.',
          link: 'https://example.com/project-two'
        },
        {
          id: 4,
          name: 'Project Two',
          description: 'Description for project two.',
          link: 'https://example.com/project-two'
        }
        // Tambahkan proyek lainnya di sini
      ]
    };
  }
};
</script>
