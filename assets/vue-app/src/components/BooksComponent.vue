<template>
  <div id="books-component">
    <h1>Home Page</h1>
    <p>Welcome to the home page.</p>

    <!-- Create button for insert a new book -->
    <button @click="redirectToCreateBook" class="create-button">
      Insert New Book
    </button>

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
              <button @click="redirectToViewBook(book.id)" class="view-button">
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
</template>

<script>
export default {
  name: "BooksComponent",
  data() {
    return {
      books: [],
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
      }
    },
  },
};
</script>

<style scoped>
#books-component {
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  display: flex;
  flex-direction: column;
}

h1 {
  text-align: center;
  color: #333;
}

p {
  text-align: center;
  color: #666;
}

.create-button {
  display: block;
  margin: 20px auto;
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
</style>
