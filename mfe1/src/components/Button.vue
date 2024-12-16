<template>
  <button @click="counter">+ First App Component +</button>
  <span>counted: {{ count }}</span>
</template>

<script setup>
import { ref } from "vue";
const count = ref(0);
const counter = () => {
  ++count.value;
};
</script>

<style></style>
