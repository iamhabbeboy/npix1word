<template>
  <div>
    <h1>Category here</h1>
    <ul>
      <li v-for="(category, index) of categories" :key="index">
        <router-link :to="{ name: 'game', params: { id: category.id } }">{{
          category.title
        }}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      categories: [
        {
          id: 1,
          title: "Places"
        },
        {
          id: 2,
          title: "People"
        },
        {
          id: 3,
          title: "Tech"
        },
        {
          id: 4,
          title: "Luxury"
        },
        {
          id: 5,
          title: "Entertainment"
        },
        {
          id: 6,
          title: "History"
        }
      ]
    };
  }
};
</script>