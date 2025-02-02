<template>
  <section>
    <div class="form-box">
      <form>
        <h1>CM Panel</h1>
        <div class="inputbox">
          <font-awesome-icon icon="fa-solid fa-envelope" />
          <input
            type="text"
            name="username"
            v-model="login"
            autofocus
            required
          />
          <label for="username">Login</label>
        </div>
        <div class="inputbox">
          <font-awesome-icon icon="fa-solid fa-lock" />
          <input
            type="password"
            name="password"
            v-model="password"
            required
          />
          <label for="password">Hasło</label>
        </div>
        <button @click.prevent="handleLogin">Zaloguj</button>
      </form>
    </div>
  </section>
</template>

<script>
import { useAuthenticationStore } from '@/stores/AuthenticationStore';
export default {
  name: 'LoginView',
  data() {
    return {
      login: '',
      password: '',
    }
  },
  methods: {
    handleLogin() {
      // TODO:
      //fetch('post', {login, password})
      //if 200 => redirect
      //else display error
      console.log('logged in, redirecting to home')
      const { setAuthentication } = useAuthenticationStore()
      setAuthentication(this.login, true)
      this.$router.push('/')
    },
  },
}
</script>

<style scoped>
  section{
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    width: 100%;
    
    background: url('../assets/login_background.jpg') no-repeat;
    background-position: center;
    background-size: cover;
}

  h1 {
    font-size: 4em;
    color: #fff;
    text-align: center;
    text-shadow: #0e2f3b 1px 1px 1px;
  }

  .form-box{
    position: relative;
    width: 400px;
    height: 450px;
    background: transparent;
    border: 2px solid rgba(255,255,255,0.5);
    border-radius: 20px;
    backdrop-filter: blur(15px);
    display: flex;
    justify-content: center;
    align-items: center;
    -webkit-box-shadow: 0px 0px 64px -13px rgba(66, 68, 90, 1);
    -moz-box-shadow: 0px 0px 64px -13px rgba(66, 68, 90, 1);
    box-shadow: 0px 0px 64px -13px rgba(66, 68, 90, 1);
}

  .inputbox {
    position: relative;
    margin: 30px 0;
    width: 310px;
    border-bottom: 2px solid #fff;
  }

  .inputbox label {
    position: absolute;
    top: 50%;
    left: 5px;
    transform: translateY(-50%);
    color: #fff;
    font-size: 1em;
    pointer-events: none;
    transition: .3s;
  }

  input:focus ~ label,
  input:valid ~ label{
    top: -5px;
  }

  .inputbox input {
    width: 100%;
    height: 50px;
    background: transparent;
    border: none;
    outline: none;
    font-size: 1em;
    padding:0 35px 0 5px;
    color: #fff;
  }

  .inputbox svg{
    position: absolute;
    left: 0;
    color: #fff;
    font-size: 1.2em;
    top: 15px;
    transform: translateX(-150%);
  }

  button{
    width: 100%;
    height: 40px;
    border-radius: 40px;
    background: #fff;
    border: none;
    outline: none;
    cursor: pointer;
    font-size: 1em;
    font-weight: 600;
    transition: .3s;
  }

  button:hover, button:focus {
    background-color: #0e2f3b;
    color: white;
  }
</style>
