<template>
  <div class="home">
    <ExperimentReport v-if="url" :url="url"/>
  </div>
</template>

<script>
// @ is an alias to /src
import ExperimentReport from '@/components/ExperimentReport.vue'

export default {
  name: 'experiment',
  data() {
    return {
      url: null,
    }
  },
  components: {
    ExperimentReport
  },
  mounted: function() {
    this.url = 'results/' + this.$route.params.expName + '/report_' + this.$route.params.id + '.json'
  },
}
</script>
