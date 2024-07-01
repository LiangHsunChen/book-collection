var booksComponent = new Vue({
  el: "#books-component",
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
});
