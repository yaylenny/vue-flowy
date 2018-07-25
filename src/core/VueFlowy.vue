<script>
  import FlowItem from "../components/FlowItem.vue";


  export default{
    props: {

    },
    data(){
      return {
        items: [],
        active: 0,
        root: 0
      };
    },
    components:{
      FlowItem
    },
    methods:{
      activateItem( item ){
        this.active=item.id;
      },
      onFocus( e, item ){
        this.activateItem( item );
        console.log( 'onFocus')
      },
      onBlur( e, item ){
        console.log( 'onBlur')
      },
      onBullet( e, item ){
        console.log( 'onBullet')
      },
      onKeyDown( e, item ){

      },
      onEnter( e, item ){
        console.log( 'onEnter')

      },
      onTab( e, item ){
        console.log( 'onTab')
      }

    },
    computed:{
      flowData(){
        if( this.items.length ){

        }
        else{
          return [
            { index: 0, level: 0, text: '', id: 1, fid: -1 }
          ];
        }

      }
    },
    // created(){},
    // destroyed(){},
    // mounted(){},
    // watch:{}
  }
</script>

<template lang="pug">
  .vue-flow
    .flow-toolbar
      .toolbar-left
        .toolbar-item: .flow-logo Flowy Ripoff
      .toolbar-right
        button.button.is-small.is-grey
          span Show completed
    //- .flow-toolbar
    .flow-items
      flow-item( v-for="(item,index) in flowData"
        :class="{'item-active': active==item.id }"
        :title="item.title"
        :key="item.fid"
        :fid="item.fid"
        :id="item.id"
        :index="item.index"
        :level="item.level"
        @focus="onFocus( $event, item )"
        @blur="onBlur( $event, item )"
        @tab="onTab( $event, item )"
        @bullet="onBullet( $event, item )"
        @enter="onEnter( $event, item )")

</template>

<style lang="scss" src="../components/style.scss"></style>
