var viewBookComponent = new Vue({
  el: "#view-book-component",
  data() {
    return {
      action: "update",
    };
  },
  methods: {
    submitForm(book) {
      return fetch(
        `${window.location.origin}/coding-challenge/books/${book.id}`,
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
});
