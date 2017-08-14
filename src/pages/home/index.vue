<template>
  <div class='page-home'>
    <we-header></we-header>
    <p class='btn' @click = 'goLogin' v-if='!isLogin'>去登录</p>
    <p class='btn' @click = 'goAccount'>去账户中心</p>
    <p class='btn' @click = 'logOut' v-if='isLogin'>退出</p>
  </div>
</template>

<script>
  import './index.less';
  import WeHeader from '~component/layouts/header';
  import { mapActions, mapGetters } from 'vuex';

  export default {
    data() {
      return {
      };
    },
    computed: {
      ...mapActions({
        authLogout: 'auth/logout', // 映射 this.authLogout() 为 this.$store.dispatch('auth/logout')
      }),
      // 使用对象展开运算符将 getters 混入 computed 对象中
      ...mapGetters({
        // 映射 this.auth/isLogin 为 store.getters.auth/isLogin
        isLogin: 'auth/isLogin',
      }),
    },
    methods: {
      goLogin() {
        this.router.push('/login');
      },
      goAccount() {
        this.router.push('/profile');
      },
      logOut() {
        this.authLogout.then();
      },
    },
    components: {
      WeHeader,
    },
    mounted() {
    },
  };
</script>
