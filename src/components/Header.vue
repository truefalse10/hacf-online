<template>
  <div id="nav">
    <div 
      class="left" 
      @click="$store.dispatch('fetchImages')">HACF.online</div>
    <div class="right">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
  </div>	
</template>

<script>
export default {};
</script>

<style>

</style>
