<template>
    <div class="container-fluid">
        <h4>Import</h4>
        <textarea class="form-control mb-2" v-model="data"></textarea>
        <button @click="importState" class="btn btn-block btn-primary">Import</button>
    </div>
</template>

<style scoped>

</style>

<script>
  export default {
    data() {
      return {
        data: null
      }
    },
    methods: {
      importState() {
        this.$store.commit('importState', this.jsonData)
      }
    },
    computed: {
      store() {
        return JSON.stringify(this.$store.state)
      },
      jsonData() {
        return JSON.parse(this.data)
      }
    }
  }
</script>

