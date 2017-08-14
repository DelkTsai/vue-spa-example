<template>
  <div class='we-header'>
    <p class='title'>{{title}}</p>
  </div>
</template>

<script>
  import './index.less';

  export default {
    props: {
      title: {
        default: '首页',
      },
    },
    methods: {

    },
  };
</script>
