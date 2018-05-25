<template>
    <div>

        <div v-for="(chunk, $index) in results" :key="$index" class="py-5">
            <div class="text-center" v-for="result in chunk" :key="result.subClass">
                <h2>{{ result.subClass }}: <strong>{{ result.result }}</strong></h2>
            </div>
        </div>

    </div>
</template>

<script>
  import chunk from 'lodash/chunk'

  export default {
    computed: {
      results() {
        return chunk(Object.keys(this.$store.state.results).map(key => {
          return {
            subClass: key,
            result: Object.values(this.$store.state.results[key]).reduce((total, amount) => total + amount, 0)
          }
        }), 2)
      }
    }
  }
</script>
