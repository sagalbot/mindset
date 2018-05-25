<template>
    <div class="container-fluid">
        <h4>Export</h4>
        <pre>{{store}}</pre>
    </div>
</template>

<style scoped>
    pre {
        font-size: 9px;
    }
</style>

<script>
  export default {
    computed: {
      store() {
        return JSON.stringify(this.$store.state)
      }
    }
  }
</script>

