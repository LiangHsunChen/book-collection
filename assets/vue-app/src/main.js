import Vue from "vue";
import BooksComponent from "./components/BooksComponent.vue";
import CreateBookComponent from "./components/CreateBookComponent.vue";
import ViewBookComponent from "./components/ViewBookComponent.vue";

Vue.config.productionTip = false;

new Vue({
  el: "#books-component",
  render: (h) => h(BooksComponent),
});

new Vue({
  el: "#create-book-component",
  render: (h) => h(CreateBookComponent),
});

new Vue({
  el: "#view-book-component",
  render: (h) => h(ViewBookComponent),
});
