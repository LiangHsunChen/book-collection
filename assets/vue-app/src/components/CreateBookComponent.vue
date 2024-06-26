<template>
  <div id="create-book-component">
    <h1>Create Book Page</h1>
    <p>Welcome to the create book page.</p>

    <BookFormComponent :book="book" />
  </div>
</template>

<script>
import BookFormComponent from "./BookFormComponent.vue";

export default {
  name: "CreateBookComponent",
  components: {
    BookFormComponent,
  },
  data() {
    return {
      years: [],
    };
  },
  methods: {
    // resetForm() {
    //   this.book = {
    //     title: "",
    //     author: "",
    //     genre: "",
    //     published_year: new Date().getFullYear(), // Reset to current year
    //     description: "",
    //   };
    // },
  },
};
</script>

<style scoped>
#create-book-component {
  margin-top: 20px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #f9f9f9;
}
</style>
