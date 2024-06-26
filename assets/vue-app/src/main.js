import Vue from "vue";
import BooksComponent from "./components/BooksComponent.vue";
import CreateBookComponent from "./components/CreateBookComponent.vue";

Vue.config.productionTip = false;

new Vue({
  el: "#books-component",
  render: (h) => h(BooksComponent),
});

new Vue({
  el: "#create-book-component",
  render: (h) => h(CreateBookComponent),
});
