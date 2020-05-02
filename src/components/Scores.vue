<template>
  <div>Score: {{ score }}</div>
</template>

<script>
export default {
  computed: {
    score() {
      const get = localStorage.getItem("game-score");
      const set = get === null ? 0 : parseInt(get);
      return set;
    }
  }
};
</script>
