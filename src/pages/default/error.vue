<!--error-type-->

<!--(*)data-error-->
<!--forbidon 无权限-->
<!--experiod  逾期-->

<template>
  <div class='page-login'>
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
