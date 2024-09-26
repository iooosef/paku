<!-- src/views/Home.vue -->
<template>
  <App>
    <template v-slot:header>
      <Header />
    </template>
  </App>
  <div class="h-1/2 pt-28 mb-10 bg-fixed bg-no-repeat bg-center bg-cover" style="background: linear-gradient(0deg, rgba(208, 150, 21, 0.5 ), rgba(0, 0, 0, 0.3)), url(./src/assets/paku_campus_front_v2.png); background-repeat: no-repeat; background-size: cover; background-position: center;">
    <div class="h-full px-6 flex flex-col justify-center items-center">
      <h3 class="text-3xl font-bold text-center text-white">Admissions</h3>
    </div>
  </div>
  <div class="p-6">
      <div class="px-6 sm:px-20 md:px-28">
        <h1 class="text-3xl font-bold text-center text-pretty">Senior High School (SHS) Strands Offered</h1>
        <ul class="list-disc ml-8 mt-3">
          <li>Science, technology, engineering, and mathematics (STEM)</li>
          <li>Information and Communication Technology (ICT)</li>
        </ul>
      </div>
  </div>
  <div class="p-6">
      <div class="px-6 sm:px-20 md:px-28">
        <h1 class="text-3xl font-bold text-center text-pretty">Courses Offered</h1>
        <ul class="list-disc ml-8 mt-3">
          <li>Bachelor of Science in Computer Science (BSCS)</li>
          <li>Bachelor of Science in Information Technology (BSIT)</li>
          <li>Bachelor of Science in Information Systems (BSIS)</li>
          <li>Bachelor of Science in Entertainment and Multimedia Computing (BSEMC)</li>
          <li>Bachelor of Science in Data Science (BSDS)</li>
          <li>Bachelor of Science in Computer Engineering (BSCpE)</li>
        </ul>
      </div>
  </div>
  <div class="p-6">
      <div class="px-6 sm:px-20 md:px-28">
        <h1 class="text-3xl font-bold text-center text-pretty">Admission Requirements</h1>
        <ul class="list-disc ml-8 mt-3">
          <li>School ID (photocopy)</li>
          <li>Grade 12 Report Card / Form 138 (photocopy)</li>
          <li>PSA-issued Birth Certificate (photocopy)</li>
          <li>Good Moral Certificate (original)</li>
          <li>2x2 ID Picture (4 copies)</li>
          <li>Long Brown Envelope (1 piece)</li>
        </ul>
      </div>
  </div>
    <App>
      <template v-slot:footer>
        <Footer />
      </template>
    </App>
</template>
  
  <script>
  import Header from '../components/Header.vue';
  import Footer from '../components/Footer.vue';
  import App from '../App.vue'
  export default {
    name: 'Admissions',
    components: {
      App,
      Header,
      Footer
    }
  }
  </script>
  
  <style scoped>
  /* Add any component-specific styles here */
  </style>
  