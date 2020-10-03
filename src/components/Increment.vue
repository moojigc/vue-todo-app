<template>
  <div>Count: {{ count }}</div>
  <button @click="increment">Increment</button>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Increment",
  data() {
    return {
      count: 0
    };
  },
  methods: {
    increment() {
      return ++this.count;
    }
  }
});
</script>

<style scoped lang="scss">
div {
  font-weight: 900;
  font-size: 20px;
}
button {
  padding: 5px 10px;
  border: unset;
  border-radius: 3px;
  background: lightblue;
  cursor: pointer;
  transition: 250ms;
  &:hover {
    background: darken(
      $color: (
        lightblue
      ),
      $amount: 10
    );
  }
}
</style>
