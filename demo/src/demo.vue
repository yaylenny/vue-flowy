<script>
  export default{
    data(){
      return {
      };
    },
    components:{},
    computed:{},
    methods:{},
    // mixins:[],
    // created(){},
    // destroyed(){},
    // mounted(){},
    // watch:{}
  }
</script>

<template lang="pug">
  .demo
    .hero.is-small: .hero-body: .container

    .flow-canvas
      .container
        vue-flowy()
</template>

<style lang="scss">
  .flow-canvas{
    pading: 1em;
  }
</style>
