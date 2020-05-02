<template>
  <div class="container">
    <h3>
      Category:
      <span v-if="category">{{ category }}</span>
    </h3>
    <div class="col-md-5">
      <div class="d-flex flex-wrap p-1 bg-secondary text-white">
        <div
          class="flex-fill img-wrap"
          v-for="(img, index) of image"
          :key="index"
        >
          <img :src="img" class="resize rounded img-thumbnail" />
        </div>
      </div>
    </div>
    <h1>{{ question }}</h1>
    <span v-for="(ans, index) in answer" :key="index">
      <input type="text" ref="answer" :key="ans" />
    </span>
    <br />
    <br />
    <p>
      <button class="btn btn-info">Restart</button>
      &nbsp;
      <button class="btn btn-danger">Reset</button>
      &nbsp;
      <button @click="verify" class="btn btn-primary">Submit</button>
    </p>
  </div>
</template>

<style lang="scss" scoped>
.resize {
  width: 100%;
  height: 100%;
}

.img-wrap {
  width: 140px;
  max-width: 100%;
  overflow: hidden;
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

<script>
import Vue from "vue";

export default {
  data() {
    return {
      games: [
        {
          id: 1,
          category: "tech",
          question: "what's the name of this guy?",
          image: [
            "https://pbs.twimg.com/media/DqlqiJbWwAICl8C.jpg",
            "https://res.cloudinary.com/denj7z5ec/image/upload/v1587859671/download_ezoqfj.jpg",
            "https://res.cloudinary.com/denj7z5ec/image/upload/v1587859680/2946769_bm17qs.png",
            "https://res.cloudinary.com/denj7z5ec/image/upload/v1587859686/prosper-otemuyiwa_tg1ffi.jpg"
          ],
          answer: "prosper"
        },
        {
          id: 2,
          category: "people",
          question: "what's the name of this person?",
          image: [
            "https://res.cloudinary.com/denj7z5ec/image/upload/v1587859479/library-of-congress-WYmjDP_8kMU-unsplash_ijazaz.jpg",
            "https://res.cloudinary.com/denj7z5ec/image/upload/v1587859466/dyana-wing-so-Og16Foo-pd8-unsplash_otikkj.jpg",
            "https://res.cloudinary.com/denj7z5ec/image/upload/v1587859531/lubo-minar-BhgatsWv_S0-unsplash_wr575a.jpg"
          ],
          answer: "barack"
        },
        {
          id: 3,
          category: "cars",
          question: "what's the name of this car?",
          image: ["https://source.unsplash.com/500x500/?car"],
          answer: "lamborghini"
        },
        {
          id: 4,
          category: "Location",
          question: "where is this in Lagos?",
          image: [
            "https://res.cloudinary.com/denj7z5ec/image/upload/v1587859903/oshodi-district-nigeria-akinleye5-ga_lj7hik.jpg",
            "https://res.cloudinary.com/denj7z5ec/image/upload/v1587859902/Oshodi_jmzqvw.jpg",
            "https://res.cloudinary.com/denj7z5ec/image/upload/v1587859890/00520848_1e12fcc4512c8c31cb59a470b5715b66_arc614x376_w735_us1_h5yrbi.jpg",
            "https://res.cloudinary.com/denj7z5ec/image/upload/v1587859886/images_k1oyxb.jpg"
          ],
          answer: "oshodi"
        }
      ],
      id: 1,
      data: undefined,
      storage: undefined
    };
  },
  mounted() {
    this.storage = localStorage.getItem("user-game");
    const _id =
      this.storage === null ? this.id : localStorage.getItem("user-game");
    this.data = this.games.find(game => game.id === parseInt(_id));
  },
  computed: {
    category() {
      return this.data ? this.data.category : "";
    },
    image() {
      return this.data ? this.data.image : [];
    },
    question() {
      return this.data ? this.data.question : "";
    },
    answer() {
      return this.data ? this.data.answer.length : 0;
    }
  },
  methods: {
    verify() {
      const ans = this.data["answer"].toLowerCase().split("");
      const _index = this.$refs["answer"];
      const output = ans.map((resp, index) => {
        return _index[index].value;
      });
      if (ans.join("") === output.join("")) {
        alert("Correct Answer");
        ans.map((resp, index) => {
          _index[index].value = "";
        });
        this.highestGameLevel();
        const _id =
          this.storage !== null ? parseInt(this.storage) + 1 : this.id + 1;
        localStorage.setItem("user-game", _id);
        return window.location.reload();
      }
      return alert("Wrong Answer");
    },
    highestGameLevel() {
      const storage = parseInt(this.storage);
      if (this.games.length === storage) {
        alert(
          "Congratulations, You have gotten to the highest level of the game."
        );
        this.$router.push("/category");
      }
    },
    monitorChars() {
      const _index = this.$refs["answer"];
      // _index.map((input) => {
      //   if(input.value.length > 0) {

      //   }
      // })
    }
  }
};
</script>
