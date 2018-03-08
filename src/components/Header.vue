<template>
  <div id="nav">
    <div 
      class="left" 
      @click="$store.dispatch('fetchImages')">HACF.online</div>
    <div class="right">
      <a href="#about">About</a> |
      <a href="#wackersberg">Wackersberg</a> |
      <a href="#anreise">Anreise</a>
    </div>
  </div>	
</template>

<script>
export default {};
</script>
