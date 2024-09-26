<template>    
    <div class="fixed w-full z-20">
      <!-- header nav here -->
      <header class="flex justify-between w-full z-10 p-4 bg-gray-800 text-white">
        <div class="flex flex-1">
          <img src="../assets/paku-logo.png" class="max-h-20">
          <h1 class="content-center text-base sm:text-lg md:text-lg">Philippine Association for Coders University</h1>
        </div>


        <div class="md:hidden content-center">
          <button @click="toggleDrawer" class="pe-4 pt-2 text-white focus:outline-none">
          <!-- Burger icon -->
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M3 6h18M3 12h18M3 18h18"/></svg>
          </button>
        </div>

        <nav class="content-center hidden md:block flex-2">
          <router-link class="mx-2" to="/">Home</router-link>
          <router-link class="mx-2" to="/about">About</router-link>
          <router-link class="mx-2" to="/admissions">Admissions</router-link>
          <router-link class="mx-2" to="/privacy">Privacy</router-link>
          
          <a href="../accounts.html" class="mx-2 px-4 py-3 text-md font-semibold text-white bg-[#d09615] border border-[#d09615] rounded-lg shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#d09615]">
            Register Now
          </a>

        </nav>
      </header>
      <!-- Drawer -->
      <div>
        <div v-if="isDrawerOpen" class="absolute z-10 w-full pt-4 pb-4 bg-gray-800 bg-opacity-95 md:hidden">
          <div class="absolute top-0 right-0 p-4">
            <button @click="toggleDrawer" class="text-white">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <div class="flex flex-col items-center justify-center h-full">
            <router-link class="my-2 pt-3 pb-3 text-white" to="/">Home</router-link>
            <router-link class="my-2 pt-3 pb-3 text-white" to="/about">About</router-link>
            <router-link class="my-2 pt-3 pb-3 text-white" to="/admissions">Admissions</router-link>
            <router-link class="my-2 pt-3 pb-3 text-white" to="/privacy">Privacy</router-link>
            <router-link class="my-2 pt-3 pb-3 text-white" to="/accounts.html">Register Now!</router-link>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
    name: 'Header', 
    data() {
      return {
        isDrawerOpen: false,
      };
    },
    methods: {
      toggleDrawer() {
        this.isDrawerOpen = !this.isDrawerOpen;
      },
    },
}
</script>

<style scoped>
.router-link-active {
  font-weight: bold;
  color: #d09615; /* Example highlight color */
}
.router-link-exact-active {
  font-weight: bold;
  color: #d09615;
}
</style>