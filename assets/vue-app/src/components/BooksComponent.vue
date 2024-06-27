<template>
  <div id="books-component">
    <HeaderComponent />

    <div class="container">
      <h1>Home</h1>

      <!-- Create button for insert a new book -->
      <button @click="redirectToCreateBook" class="create-button">
        + Create
      </button>

      <!-- Display successfully deleted book message -->
      <div v-if="successDeleteMessage" class="success-delete-message">
        {{ successDeleteMessage }}
      </div>

      <div class="books-table" v-if="books.length > 0">
        <table>
          <thead>
            <tr>
              <th>Actions</th>
              <th v-for="(value, key) in books[0]" :key="key">{{ key }}</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="book in books" :key="book.id">
              <td class="action-buttons">
                <button
                  @click="redirectToViewBook(book.id)"
                  class="view-button"
                >
                  Edit/View
                </button>
                <button @click="deleteBook(book.id)" class="delete-button">
                  Delete
                </button>
              </td>
              <td v-for="(value, key) in book" :key="key">{{ value }}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div v-else>
        <p>No books available.</p>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderComponent from "./HeaderComponent.vue";

export default {
  name: "BooksComponent",
  components: {
    HeaderComponent,
  },
  data() {
    return {
      books: [],
      successDeleteMessage: "",
    };
  },
  mounted() {
    this.fetchBooks();
  },
  methods: {
    fetchBooks() {
      fetch(window.location.origin + "/coding-challenge/books", {
        method: "GET",
      })
        .then((response) => response.json())
        .then((data) => {
          this.books = data;
        })
        .catch((error) => {
          console.error("Error fetching books:", error);
        });
    },
    redirectToCreateBook() {
      window.location.href =
        window.location.origin + "/coding-challenge/books/create";
    },
    redirectToViewBook(bookId) {
      window.location.href =
        window.location.origin + `/coding-challenge/books/view/${bookId}`;
    },
    deleteBook(bookId) {
      if (confirm("Are you sure you want to delete this book?")) {
        console.log("Deleting book with ID:", bookId);
        fetch(
          window.location.origin + `/coding-challenge/books/delete/${bookId}`,
          {
            method: "GET",
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
            console.log("Book deleted:", data);
            this.fetchBooks();
            this.successDeleteMessage =
              "Book with ID " + bookId + " has been deleted.";
          })
          .catch((error) => {
            console.error("Error deleting book:", error);
          });
      }
    },
  },
};
</script>

<style scoped>
#books-component {
  background-color: #f9f9f9;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  display: flex;
  flex-direction: column;
}

.container {
  padding: 0 20px;
}

h1 {
  text-align: center;
  color: #333;
}

.create-button {
  display: block;
  width: 110px;
  margin-left: auto;
  padding: 10px 20px;
  font-size: 16px;
  color: white;
  background-color: #007bff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.create-button:hover {
  background-color: #0056b3;
}
.books-table {
  overflow: auto;
  padding-bottom: 30px;
}

table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
}

thead {
  background-color: #007bff;
  color: white;
}

th,
td {
  padding: 10px;
  text-align: left;
  border: 1px solid #ddd;
}

tbody tr:nth-child(even) {
  background-color: #f2f2f2;
}

.no-books {
  text-align: center;
  color: #666;
  margin-top: 20px;
}

.action-buttons {
  text-align: center;
}

.view-button,
.delete-button {
  padding: 5px 10px;
  font-size: 14px;
  color: white;
  border: none;
  border-radius: 3px;
  cursor: pointer;
}

.view-button {
  background-color: #28a745;
  margin-bottom: 2px;
}

.view-button:hover {
  background-color: #218838;
}

.delete-button {
  background-color: #dc3545;
}

.delete-button:hover {
  background-color: #c82333;
}

.success-delete-message {
  margin-top: 20px;
  color: green;
  font-weight: bold;
}

@media screen and (max-width: 600px) {
  .create-button {
    margin: auto;
  }
}
</style>
