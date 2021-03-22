<template>
  <div class="container">
    <div class="first-section">
      <div>
        1
      </div>
      <div>
        2
      </div>
      <div>
        3
      </div>
    </div>
    <div class="second-section">
      <div>
        4
      </div>
      <div>
        5
      </div>
      <div>
        6
      </div>      
    </div>
    <div>
      7
    </div>
    <div>
      8
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
  components: {

  }
}
</script>
<style>
.container{
  display:flex;
  flex-direction:row;
  justify-content:space-between;
}
.first-section{
  flex-direction:column;
}
.second-section{
  flex-direction:column-reverse;
}
.third-section{

}
</style>
