<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link>|
      <router-link to="/category">Category</router-link>
      <Score />
    </div>
    <router-view />
  </div>
</template>

<script>
import Score from "@/components/Scores";

export default {
  components: {
    Score
  }
};
</script>
