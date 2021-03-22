<template>
  <div>
    <h1>Here we display existing Characters!</h1>
    <button>All</button>
    <button>Berserker</button>
    <button>Rogue</button>
    <button>Scribe</button>
    <button>Engineer</button>
    <CharTable
    :characters="this.characters" />
      <Skeleton />
    <transition name="fade">
    <p v-if="classVisible">Class should be visible now...</p>
    </transition>
    <button class="butStyle" @click="toggleVisibility">Show Class</button>
  </div>
</template>
<script>

  import CharTable from '@/components/CharTable.vue'
  import { Skeleton } from 'skeleton-loader-vue';

  import { mapState } from 'vuex'
  export default {
    components:{
      CharTable,
      Skeleton

    },
    data(){
      return {
        fields: ['currentClass', 'baseStats', 'id'],
        classVisible:false
      }
    },
  computed: {
    ...mapState([
      'characters'
    ])

  },
  methods:{
    toggleVisibility(){
      this.classVisible = !this.classVisible;
    }
  },
  mounted (){
    this.$store.dispatch('loadCharacters')

  }
  }
</script>
<style>
.butStyle{
  background:purple;
  color:white;
  width: 100px;
  height: 80px;

}
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
