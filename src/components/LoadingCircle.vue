<style>
.loading-circle {
  width: 100%;
  text-align: center;
}
.loading-circle ons-progress-circular {
  margin: 0 auto;
  display: block;
}
</style>

<template>
  <div v-show="isLoading" class="loading-circle">
    <v-ons-progress-circular indeterminate></v-ons-progress-circular>
    <small>{{ text }}</small>
  </div>
</template>

<script>
export default {
  props: {
    isLoading: {
      type: Boolean,
      default: false
    },
    text: {
      type: String,
      default: ""
    }
  }
};
</script>
