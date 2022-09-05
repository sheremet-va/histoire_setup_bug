<script setup lang="ts">
import { format } from "./formatter";

const world = format("World");
</script>

<template>
  <Story>Hello {{ world }}</Story>
</template>
