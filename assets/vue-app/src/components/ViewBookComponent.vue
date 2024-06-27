<template>
  <div id="view-book-component">
    <HeaderComponent currentPage="Book Details" />

    <h1>Book Details</h1>
    <p>
      Update the book details by editing the form below and clicking the
      "Update" button.
    </p>

    <BookFormComponent
      :book="book"
      :action="action"
      :submitForm="submitForm"
      :getInitialData="fetchBook"
    />
  </div>
</template>

<script>
import HeaderComponent from "./HeaderComponent.vue";
import BookFormComponent from "./BookFormComponent.vue";

export default {
  name: "ViewBookComponent",
  components: {
    HeaderComponent,
    BookFormComponent,
  },
  data() {
    return {
      action: "update",
      book: {},
    };
  },
  created() {
    this.book = window.book;
  },
  methods: {
    submitForm(book) {
      return fetch(
        `${window.location.origin}/coding-challenge/books/${this.book.id}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(book),
        }
      )
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
          console.log("Book updated:", data);
          return data;
        })
        .catch((error) => {
          console.error("Error updating book:", error);
        });
    },
    fetchBook(id) {
      return fetch(
        `${window.location.origin}/coding-challenge/books/get_book/${id}`
      )
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
          console.log("Book fetched:", data);
          return data;
        })
        .catch((error) => {
          console.error("Error fetching book:", error);
        });
    },
  },
};
</script>

<style scoped>
#view-book-component {
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
