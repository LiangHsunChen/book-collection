var createBookComponent = new Vue({
  el: "#create-book-component",
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
});
