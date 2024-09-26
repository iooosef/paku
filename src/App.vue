<script>
export default {
  components: {
  }
};
</script>

<template>
  <slot name="header"></slot>
  <router-view />
  <slot name="footer"></slot>
</template>
