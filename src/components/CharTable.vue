<template>
  <div class="">
    <b-container>
    <b-table striped hover :items="characters" :fields="fields">

      <!-- <template #cell(name)="data">
        <router-link :to="`/characters/${character}/${data.index}`">{{ data.value }}</router-link>
      </template> -->
    </b-table>
  </b-container>
  </div>
</template>

<script>

export default {
  props: {
    characters: {
      type:Array,
      default:()=>[],

    }
  },
  components:{

  },
  data(){
    return{
      fields: ['currentClass', 'baseStats', 'id'],
      loadingCharacters:false

    }
  },
  mounted(){


  }
}
</script>
