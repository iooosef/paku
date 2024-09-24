<script setup>
import Footer from './components/Footer.vue';
</script>
<script>
export default {
  components: {
    Footer: () => import('./components/Footer.vue'),
  },  
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
};
</script>

<template>
  <router-view />
</template>

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
