<!-- src/views/Home.vue -->
<template>
  <App>
    <template v-slot:header>
      <Header />
    </template>
  </App>
  <!-- <Header /> -->
    <div class="h-1/2 pt-28 mb-10 bg-fixed bg-no-repeat bg-center bg-cover" style="background: linear-gradient(0deg, rgba(208, 150, 21, 0.5 ), rgba(0, 0, 0, 0.3)), url(./src/assets/paku_campus_front_v2.png); background-repeat: no-repeat; background-size: cover; background-position: center;">
      <div class="h-full px-6 flex flex-col justify-center items-center">
        <h3 class="text-3xl font-bold text-center text-white">About PAC-U</h3>
      </div>
    </div>

    <div class="p-6">
        <div class="px-6 sm:px-20 md:px-28">
          <h1 class="text-3xl font-bold text-center text-pretty">History of PAC-U</h1>
          <div class="flex justify-center">
            <img src="../assets/paku_campus_2.png" class="mt-4 w-2/3 md:w-2/5" style="filter: sepia(1);">
          </div>
          <p class="mt-4">
            The school was initially founded on 1991 when Computer programming were recently introduced in the Philippines, the school wa founded by four noble man and named the institution Philippine Association of Coders University, the school initially objectifies the teaching of the new technologies and the introduction of computer programming in the Philippines, helping the nation go forth with the modernization of time. Later rebranded (2024).
          </p>
        </div>
        
        <div class="mt-16 px-10 sm:px-16 md:px-28">
          <h1 class="text-3xl font-bold text-center text-pretty">University Seal</h1>
            <div class="flex md:flex-none justify-center md:justify-normal md:float-left w-full md:w-fit">
              <img src="../assets/paku-logo.png" class="h-52">
            </div>
            <p class="mt-4">
              The P.A.C. University logo is rich with symbolic meaning, reflecting the institution's core values and mission:
            </p>
            <ol class="list-decimal ml-8 mt-3">
              <li><b>Central "C" Shape:</b> The prominent "C" shape represents Coders, directly referencing the university's primary focus on educating and training students in computer programming and related fields.</li>
              <li><b>Globe:</b> The globe at the center signifies global reach and technological advancement. It represents PACU's commitment to preparing students for a globalized tech industry, ensuring that their skills are relevant in both local and international contexts.</li>
              <li><b>P.A.C. Letters:</b> The bold "P.A.C." stands for Philippine Association for Coders, reaffirming the institution's identity and dedication to developing coders who will contribute to the nation’s technological progress.</li>
              <li><b>Laurel Wreath:</b> The laurel wreath symbolizes academic excellence, achievement, and honor. It reflects PACU's commitment to fostering a culture of success and recognition, aiming to produce graduates who excel in their respective tech fields.</li>
              <li><b>Color Scheme (Blue and Gold):</b> The use of blue conveys trust, knowledge, and stability, while gold signifies excellence, prestige, and achievement. Together, these colors emphasize PACU's goal of being a trusted institution that strives for excellence in technological education.</li>
            </ol>
        </div>
        
        <div class="mt-16 px-10 sm:px-16 md:px-28">
          <h1 class="text-3xl font-bold text-center text-pretty">School Life</h1>
            <div class="mt-4 flex md:flex-none justify-center md:justify-normal md:float-right w-full md:w-fit">
              <img src="../assets/student-life.webp" class="h-52 md:h-44 w-full px-4 pb-4 object-contain">
            </div>
            <p class="mt-4 mt-4">
              The student’s earliest lecture session is 7:30 A.M. entering their designated rooms and laboratories, maximum time length of a class is 4 hrs with a 30min health break and the minimum is 1 hour. After a class of a student they can either;
            </p>
            <ul class="list-disc ml-8 mt-3">
              <li>Study in libraries or in the tech park where tables and benches are provided.</li>
              <li>Eat for their break time enjoying the variety of selections of Food.</li>
              <li>Take a stroll in the campus with friends or by themselves.</li>
            </ul>
            <p class="mt-3">
              All classes must end by 7:30 P.M., and only corporate offices, cleaning staff, and security personnels must remain inside the campus. Prolonged use of university facilities such as the research laboratories and Collaboration Hubs must be permitted with a letter.
            </p>
        </div>
        
        <div class="mt-16 px-10 sm:px-16 md:px-28">
          <h1 class="text-3xl font-bold text-center text-pretty">Campus Facilities</h1>
            <p class="mt-4">
              The school provides numerous Computer laboratories to provide the needs of students, learning how to apply the concepts and knowledge they gained from lectures.  Network routers and mesh will be hidden all around the campus to provide the students with fast network connections anywhere at any time. Air-Conditioned classrooms and facilities are ensured for the students for a more comfortable learning environment. 
            </p>
            <p class="mt-3">
              Student Tech Assistance Office aids the students for complex problems they might encounter while using laboratories and other facilities such as iMac and the Computer Hardware laboratories. For a well rounded learning experience and environment the school also provides two gymnasiums and a tech-park to guarantee the student’s physical and mental health. Variety of food stalls and a convenient store aside from having a regular canteen are also provided, libraries and study areas are also included. To power everything such as the computers, electricity, and others; the school envisions the installation of solar panels.
            </p>
            <ul class="list-disc ml-8 mt-3">
              <li>Computer Laboratories (iMac, Server/Networking, Hardware, Multimedia Studios).</li>
              <li>Lecture Rooms</li>
              <li>Collaboration Hubs (Meetings and Presentations)</li>
              <li>Corporate Offices (STA, Faculty, Finance, Corporates)</li>
              <li>Tech-Park and Gymnasium</li>
              <li>At School Stores (Canteen, Food Stalls, Convenience Store)</li>
            </ul>
            

            <div class="mt-3 grid grid-cols-2 gap-4">
                <div class="grid gap-4">
                    <div>
                        <img class="h-auto max-w-full rounded-lg" src="../assets/library.png" alt="">
                    </div>
                    <div>
                        <img class="h-auto max-w-full rounded-lg" src="../assets/lecture-room.webp" alt="">
                    </div>
                    <div>
                        <img class="h-auto max-w-full rounded-lg" src="../assets/lecture-hall.jpeg" alt="">
                    </div>
                </div>
                <div class="grid gap-4">
                    <div>
                        <img class="h-auto max-w-full rounded-lg" src="../assets/swe_lab.jpg" alt="">
                    </div>
                    <div>
                        <img class="h-auto max-w-full rounded-lg" src="../assets/mac-lab.jpg" alt="">
                    </div>
                    <div>
                        <img class="h-auto max-w-full rounded-lg" src="../assets/network_lab.jpg" alt="">
                    </div>
                </div>
            </div>
              <div class="mt-4 grid grid-cols-2 gap-4 ">
                  <div>
                      <img class="h-auto max-w-full rounded-lg" src="../assets/study-hall.jpg" alt="">
                  </div>
                  <div>
                      <img class="h-auto max-w-full rounded-lg" src="../assets/canteen.jpg" alt="">
                  </div>
                  <div>
                      <img class="h-auto max-w-full rounded-lg" src="../assets/gym.jpg" alt="">
                  </div>
                  <div>
                      <img class="h-auto max-w-full rounded-lg" src="../assets/collab-hub.jpg" alt="">
                  </div>
              </div>

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
    name: 'About',
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
  