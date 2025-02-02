<template>
  <Navbar v-if="isAuthenticated" />
  <HeroImage/>
  <RouterView/>
</template>

<script>
import { useAuthenticationStore } from '@/stores/AuthenticationStore'
import Navbar from './components/Navbar.vue';
import HeroImage from '@/components/HeroImage.vue';
export default {
  name: 'App',
  components: {
    Navbar,
    HeroImage
  },
  created() {
    const { login, isAuthenticated } = useAuthenticationStore();

    if(login === null || isAuthenticated) {
        this.$router.push('/login')
    }
  },
  computed: {
    isAuthenticated() {
      return useAuthenticationStore().isAuthenticated
    }
  },
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300&display=swap');

html, body {
  margin: 0;
}

#app {
  font-family: 'poppins', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
