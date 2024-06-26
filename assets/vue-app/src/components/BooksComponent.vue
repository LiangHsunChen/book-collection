<template>
  <div>
    <h1>Home Page</h1>
    <p>Welcome to the home page.</p>
    <div v-if="books.length > 0">
      <table>
        <thead>
          <tr>
            <th v-for="(value, key) in books[0]" :key="key">{{ key }}</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="book in books" :key="book.id">
            <td v-for="(value, key) in book" :key="key">{{ value }}</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div v-else>
      <p>No books available.</p>
    </div>
    <!-- <li v-for="book in books" :key="book.id">{{ book.title }}</li> -->
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
  },
};
</script>

<style>
#books-component {
  color: aqua;
}
</style>
