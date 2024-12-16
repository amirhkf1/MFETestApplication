<template>
  <div>
    <h1>Micro Front-end Project</h1>
    <h2>host</h2>
    <div class="flex flex-col space-y-5">
      <Mfe1Button />
      <Mfe2Button />
    </div>
  </div>
</template>

<script setup>
import { defineAsyncComponent } from "vue";

const Mfe1Button = defineAsyncComponent(() => import("mfe1/Button"));
const Mfe2Button = defineAsyncComponent(() => import("mfe2/Button"));
</script>

<style scoped></style>
