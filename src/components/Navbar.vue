<!-- src/components/Navbar.vue -->
<template>
  <nav class="bg-primary p-4 fixed w-full z-10 top-0">
    <div class="container mx-auto flex justify-between items-center">
      <div class="text-background text-2xl font-bold">My Portfolio</div>
      <div class="space-x-4">
        <a href="#home" class="text-background hover:text-secondary">Home</a>
        <a href="#about" class="text-background hover:text-secondary">About</a>
        <a href="#work" class="text-background hover:text-secondary">Work</a>
        <a href="#skills" class="text-background hover:text-secondary">Skills</a>
        <a href="#contact" class="text-background hover:text-secondary">Contact</a>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navbar'
};
</script>
