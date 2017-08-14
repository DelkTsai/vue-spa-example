<template>
  <div class='page-login'>
    <we-header title='登录'></we-header>
    <p class='btn' @click = 'login'>登录</p>
  </div>
</template>

<script>
  /* ============
   * Login Index Page
   * ============
   *
   * Page where the user can login.
   */
  import { mapActions } from 'vuex';
  import WeHeader from '~component/layouts/header';
  
  export default {
    data() {
      return {
      };
    },
    computed: {
      ...mapActions({
        authLogin: 'auth/login', // 映射 this.authLogin() 为 this.$store.dispatch('auth/login')
      }),
    },
    components: {
      WeHeader,
    },
    methods: {
      login() {
        this.authLogin.then();
      },
    },
  };
</script>
