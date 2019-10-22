<template>
  <div class="home">
    <ExperimentReport v-if="url" :url="url"/>
  </div>
</template>

<script>
// @ is an alias to /src
import ExperimentReport from '@/components/ExperimentReport.vue'

export default {
  name: 'home',
  data() {
    return {
      url: null,
    }
  },
  components: {
    ExperimentReport
  },
  mounted: function() {
    this.url = this.$route.query.url
    console.log(this.url)
  },
}
</script>
