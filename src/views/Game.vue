<template>
  <div class="about">
    <h3>Category: {{data.category.toUpperCase() }}</h3>
    <span v-for="(img, index) of data.image" :key="index">
      <img :src="img" class="resize" />
    </span>
    <h1>{{data.question}}</h1>
    <span v-for="index in data.answer.length" :key="index">
      <input type="text" ref="answer" :key="index" @change="monitorChars"/>
    </span>
    <br />
    <button>Reset</button>
    &nbsp;
    <button>Reset</button>
    &nbsp;
    <button @click="verify">Submit</button>
  </div>
</template>

<style scoped lang="scss">
.resize {
  width: 200px;
  max-width: 100%;
}

h1 {
  font-size: 1.8em;
  font-weight: bold;
}
span {
  margin-left: 5px;
  margin-right: 5px;
}
input[type="text"] {
  width: 50px;
  font-size: 1.4em;
  font-weight: bold;
  text-transform: uppercase;
  border: 3px solid #000;
  text-align: center;
}
</style>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Game extends Vue {
  data: {
    id: number,
    answer: string,
    category: string,
    question: string,
    image: Array<string>
  };
  constructor() {
    super();
    this.data = {
      id: 1,
      category: "tech",
      question: "what's the name of this guy?",
      image: ["https://pbs.twimg.com/media/DqlqiJbWwAICl8C.jpg"],
      answer: "prosper"
    };
  }
  verify(): void {
    const ans = this.data['answer'].split("");
    const _index = this.$refs["answer"];
    const output = ans.map((resp, index) => _index[index].value);
    if (ans.join("") === output.join("")) {
      return alert("Correct Answer");
    }
    alert("Wrong Answer");
  }
  monitorChars(): void {
    const _index = this.$refs["answer"];
    // _index.map((input) => {
    //   if(input.value.length > 0) {

    //   }
    // })
  }
}
</script>