<template>
  <div id="app">
    <TheNavigation />
    <transition name="slide-fade" mode="out-in">
      <router-view class ="component-views"/>
    </transition>

  </div>
</template>

<script>
import TheNavigation from "./components/TheNavigation.vue";


  export default {
    data(){
      return{
        transitionName:'slide-left',
        Component:'Home'
      }
    },
    name: "App",
    components:{
      TheNavigation,

    },

    mounted(){

    }
  }
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.component-views{
  margin-top:2rem;
}
.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition:  .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
{
  transform: translateY(40px);
  opacity: 0;
}


</style>
