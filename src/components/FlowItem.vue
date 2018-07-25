<script>
  export default{
    props: {
      level: Number,
      title: String,
      fid: Number,
      index: Number,
      id: {},

    },
    data(){
      return {
        rawTitle: this.title || ''
      };
    },
    components:{
    },
    computed:{

    },
    methods:{
      focusBullet(){

      },
      onBlur(e){
        this.$emit('blur', e )
      },
      onBullet(e){
        this.$emit('bullet', e )
      },
      onClick( e ){
        this.$emit('click', e )
      },
      onFocus( e ){
        this.$emit('focus', e )
      },
      onEnter( e ){
        this.$emit('enter', e )
      },
      onTab( e ){
        this.$emit('tab', e )
      }
    },
    created(){},
    watch:{}
  }
</script>
<template lang="pug">
  .flow-item( @click="onClick")
    .item-bullet( @click="onBullet")
      span.bullet
    .item-title
      input( type="text" v-model="rawTitle"
        @blur="onBlur"
        @focus="onFocus"
        @keydown.enter="onEnter"
        @keydown.tab.prevent="onTab")
</template>
