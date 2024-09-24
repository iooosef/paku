<!-- src/views/Home.vue -->
<template>
  <div class="h-screen mb-10 bg-fixed bg-no-repeat bg-center bg-cover" style="background: linear-gradient(0deg, rgba(0, 50, 98, 0.3), rgba(0, 0, 0, 0.3)), url(./src/assets/paku_campus_front_v2.png); background-repeat: no-repeat; background-size: cover; background-position: center;">
    <div class="h-full px-6 flex flex-col justify-center items-center">
      <img src="../assets/paku-logo.png" class="h-44 md:h-56" style="">
      <h3 class="text-xl md:text-3xl font-bold text-center text-white">Philippine Association for Coders University</h3>
      <a href="../accounts.html" class="mt-6 mx-2 px-6 py-3 text-2xl font-semibold text-white bg-[#d09615] border border-[#d09615] rounded-lg shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#d09615]">
            Register Now
        </a>
    </div>
  </div>
  <div class="p-6">
    <div class="px-10 sm:px-16 md:px-28">
      <h1 class="text-3xl font-bold text-center text-pretty">Welcome to PAC-U!</h1>
      <p class="mt-4">
        Welcome to PAC-U! Our programs are designed to set you on a successful career path. <br /> <br />
        Our goal is to develop the students' knowledge, courage, and the intelligence to succeed in the modern world. While focusing on computer related studies, the university also fosters high value in critical thinking and problem solving, 
        preparing graduates to achieve excellence in studies and life. <br /> <br />
        State-of-the-art facilities including Computer Hardware Laboratory, Computer Laboratory and iMac Laboratory support the learning experience on campus.
      </p>
    </div>
    <div class="mt-16 px-10 sm:px-16 md:px-28">
      <h1 class="text-3xl font-bold text-center">Vision</h1>
      <p class="mt-4">
        To produce highly capable alumni who are not only academically accomplished but also personally developed, ready to contribute meaningfully to the advancement of technology and society
      </p>
      <h1 class="mt-4 text-3xl font-bold text-center">Mission</h1>
      <p class="mt-4">
        To provide a collaborative and technology-driven learning environment that fosters innovation, problem-solving, courage, and intelligence, focusing on computer programming and related studies. We aim to equip our students with critical thinking, enthusiasm, and the skills necessary to excel in a fast-paced, contemporary world.
      </p>
    </div>
    <div class="mt-16 px-10 sm:px-16 md:px-28">
      <h1 class="mt-4 text-3xl font-bold text-center">History</h1>
      <p class="mt-4">
        The school was initially founded on 1991 when Computer programming were recently introduced in the Philippines, the school wa founded by four noble man and named the institution Philippine Association of Coders University, the school initially objectifies the teaching of the new technologies and the introduction of computer programming in the Philippines, helping the nation go forth with the modernization of time. Later rebranded (2024).
      </p>
    </div>
  </div>
</template>
  
  <script>
  export default {
    name: 'Home'
  }
  </script>
  
  <style scoped>
  .landing-container {
    height: 100%;
    max-width: 100%;
    overflow-y: auto;
  }

  .landing-content {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  </style>
  