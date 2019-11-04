<template>
  <div>
    <div class="home">
      <div class="columns">
        <div class="column is-narrow">
          <div class="box" style="width: 200px;">
            <p class="title is-5">Narrow column</p>
            <p class="subtitle">This column is only 200px wide.</p>
          </div>
        </div>
        <div class="column">
          <div class="box">
            <p class="title is-5">Flexible column</p>
            <p class="subtitle">
              This column will take up the remaining space available.
            </p>
          </div>
        </div>
      </div>
      <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "home"
};
</script>
