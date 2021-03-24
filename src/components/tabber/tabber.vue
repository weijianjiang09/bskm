<template>
  <div id="app">
      <div id="tab-bar">
        <slot></slot>
      </div>
  </div>  
  
</template>
      
<script>
export default {
  name: 'tabber',
  components: {
    
  }
}
</script>

<style>
   #tab-bar{ 
    position: relative;
    left: 34%;
    width: 700px;
    display: flex;
  }

</style>