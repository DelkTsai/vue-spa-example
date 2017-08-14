<template>
  <div class='page-account'>
    <we-header title='账户中心'></we-header>
    <p class='tip1'>{{account.firstName}}</p>
    <p class='tip1'>{{account.lastName}}</p>
    <p class='tip1'>{{account.email}}</p>
    <p class='btn' @click = 'goHome'>首页</p>
  </div>
</template>

<script>
  import WeHeader from '~component/layouts/header';
  import { mapGetters } from 'vuex';
  import './index.less';

  export default {
    data() {
      return {
      };
    },
    computed: {
      // 使用对象展开运算符将 getters 混入 computed 对象中
      ...mapGetters({
        account: 'account/getAccount',
      }),
    },
    methods: {
      goHome() {
        this.router.push('/home');
      },
    },
    components: {
      WeHeader,
    },
    mounted() {
    },
  };
</script>
