<template>
  <div id="create-book-component">
    <h1>Create Book Page</h1>
    <p>Welcome to the create book page.</p>

    <BookFormComponent :submitForm="submitForm" />
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
    submitForm(book) {
      return fetch(window.location.origin + "/coding-challenge/books/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(book),
      })
        .then((response) => {
          if (!response.ok) {
            // Handle HTTP errors
            return response.json().then((errorData) => {
              throw new Error(errorData.error || "Unknown error");
            });
          }
          return response.json();
        })
        .then((data) => {
          console.log("Book created:", data);
          return data;
        })
        .catch((error) => {
          console.error("Error creating book:", error);
        });
    },
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
