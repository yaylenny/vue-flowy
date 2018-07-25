import VueFlowy from "./core/VueFlowy.vue";

export default{
  install( Vue, prefix="vue-flowy" ){
    Vue.component( prefix, VueFlowy );
  },
  VueFlowy
}

export{
  VueFlowy
}
