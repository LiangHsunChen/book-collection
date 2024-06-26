import Vue from "vue";
import BooksComponent from "./components/BooksComponent.vue";
// import AboutComponent from "./components/AboutComponent.vue";

Vue.config.productionTip = false;

new Vue({
  el: "#books-component",
  render: (h) => h(BooksComponent),
});

// new Vue({
//   el: "#app2",
//   render: (h) => h(AboutComponent),
// });
