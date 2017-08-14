<template>
  <div class='page-login'>
    <!--关于我-->
  </div>
</template>

<script>
  /* ============
   * Login Index Page
   * ============
   *
   * Page where the user can login.
   */
  import authService from '@/services/auth';

  export default {
    data() {
      return {
      };
    },
    components: {
    },
    methods: {
      login() {
        authService.login();
      },
    },
  };
</script>
