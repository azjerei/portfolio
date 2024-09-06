<script setup lang="ts">
import { computed, ref } from 'vue';
import { QuoteService } from '../services/QuoteService';

let quote: string | undefined = ref(undefined);

QuoteService
  .getQuote()
  .then((q) => { quote.value = q; });
</script>

<template>
<div v-if="!quote">Loading quote...</div>
<div v-if="!!quote" class="quote">{{quote}}</div>
</template>

<style scoped>
.quote {
  font-family: 'Courier New', Courier, monospace;
  font-size: 32px;
}
</style>