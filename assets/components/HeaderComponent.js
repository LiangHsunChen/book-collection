Vue.component("header-component", {
  template: `
  <header id="header-component">
    <h1 class="title">Books Collection</h1>
    <nav class="breadcrumb">
      <a @click="goHome" class="breadcrumb-link">Home</a>
      <span v-if="currentPage" class="breadcrumb-separator">/</span>
      <span class="breadcrumb-current">{{ currentPage }}</span>
    </nav>
  </header>
  `,
  props: {
    currentPage: {
      type: String,
      default: "",
    },
  },
  methods: {
    goHome() {
      window.location.href = window.location.origin + "/coding-challenge";
    },
  },
});
