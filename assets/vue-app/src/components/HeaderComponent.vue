<template>
  <header id="header-component">
    <h1 class="title">Books Collection</h1>
    <nav class="breadcrumb">
      <a @click="goHome" class="breadcrumb-link">Home</a>
      <span v-if="currentPage" class="breadcrumb-separator">/</span>
      <span class="breadcrumb-current">{{ currentPage }}</span>
    </nav>
  </header>
</template>

<script>
export default {
  name: "HeaderComponent",
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
};
</script>

<style scoped>
#header-component {
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.title {
  text-align: center;
}

.breadcrumb {
  margin-right: auto;
}

.breadcrumb-link {
  text-decoration: underline;
  font-size: 16px;
  color: white;
  cursor: pointer;
}

.breadcrumb-link:hover {
  text-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
}

.breadcrumb-separator {
  margin: 0 5px;
  font-size: 16px;
}

.breadcrumb-current {
  font-size: 16px;
}
</style>
