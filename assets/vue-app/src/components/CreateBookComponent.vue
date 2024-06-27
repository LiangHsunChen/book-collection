<template>
  <div id="create-book-component">
    <HeaderComponent currentPage="Create Book" />

    <h1>Create a new Book</h1>
    <p>Please fill out the form below to create a new book.</p>

    <BookFormComponent :action="action" :submitForm="submitForm" />
  </div>
</template>

<script>
import HeaderComponent from "./HeaderComponent.vue";
import BookFormComponent from "./BookFormComponent.vue";

export default {
  name: "CreateBookComponent",
  components: {
    HeaderComponent,
    BookFormComponent,
  },
  data() {
    return {
      action: "create",
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
  background-color: #f9f9f9;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

h1 {
  text-align: center;
  color: #333;
}

p {
  text-align: center;
  color: #666;
}
</style>
