<!--error-type-->

<!--not fond-->

<template>
  <div class='page-login'>
    页面不存在
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
