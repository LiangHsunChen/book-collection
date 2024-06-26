<template>
  <div id="book-form-component">
    <form @submit.prevent="handleSubmit">
      <div class="form-group">
        <label for="title">Title:</label>
        <input
          type="text"
          id="title"
          v-model="localBook.title"
          class="form-control"
          required
        />
      </div>

      <div class="form-group">
        <label for="author">Author:</label>
        <input
          type="text"
          id="author"
          v-model="localBook.author"
          class="form-control"
          required
        />
      </div>

      <div class="form-group">
        <label for="genre">Genre:</label>
        <input
          type="text"
          id="genre"
          v-model="localBook.genre"
          class="form-control"
          required
        />
      </div>

      <div class="form-group">
        <label for="published_year">Published Year:</label>
        <select
          id="published_year"
          v-model="localBook.published_year"
          class="form-control"
          required
        >
          <option v-for="year in years" :key="year" :value="year">
            {{ year }}
          </option>
        </select>
      </div>

      <div class="form-group">
        <label for="description">Description:</label>
        <textarea
          id="description"
          v-model="localBook.description"
          class="form-control"
        ></textarea>
      </div>

      <button type="submit" class="create-button">Insert New Book</button>

      <div v-if="successMessage" class="success-message">
        {{ successMessage }}
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "BookForm",
  props: {
    book: {
      type: Object,
      default: () => ({
        title: "",
        author: "",
        genre: "",
        published_year: new Date().getFullYear(),
        description: "",
      }),
    },
    submitForm: {
      type: Function,
      required: true,
    },
  },

  data() {
    return {
      // Create a local copy of the book prop
      localBook: { ...this.book },
      years: [],
    };
  },
  created() {
    this.populateYears();
  },
  methods: {
    populateYears() {
      const currentYear = new Date().getFullYear();
      for (let year = currentYear; year >= 1900; year--) {
        this.years.push(year);
      }
    },
    handleSubmit() {
      this.submitForm(this.localBook)
        .then((data) => {
          this.resetForm();
          this.successMessage = `Book ${data.title} successfully created with id: ${data.id}`;
        })
        .catch((error) => {
          console.error(error);
          alert("An error occurred while submitting the form.");
        });
    },
    resetForm() {
      this.localBook = {
        title: "",
        author: "",
        genre: "",
        published_year: new Date().getFullYear(),
        description: "",
      };
    },
  },
};
</script>

<style scoped>
#book-form-component {
  padding: 20px;
  max-width: 600px;
  margin: 0 auto;
  background-color: #f9f9f9;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.form-group {
  margin-bottom: 15px;
}

.form-group label {
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
}

.form-group input {
  width: 100%;
  padding: 8px;
  box-sizing: border-box;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.create-button {
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

.success-message {
  margin-top: 20px;
  color: green;
  font-weight: bold;
}
</style>
