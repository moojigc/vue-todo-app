<template>
  <h1>My To Dos</h1>
  <Input />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Input from "./components/Input.vue";

export default defineComponent({
  name: "App",
  components: {
    Input
  }
});
</script>

<style lang="scss">
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
:root {
  font-size: 20px;
  font-family: "Raleway", Avenir, Helvetica, sans-serif;
  font-weight: 300;
  --safe: forestgreen;
  --danger: rgb(255, 97, 97);
}
body {
  background: black;
  color: whitesmoke;
}
h1 {
  margin: 1em 0;
}
button {
  padding: 0.5rem 1rem;
  border: unset;
  border-radius: 3px;
  background: lightblue;
  cursor: pointer;
  transition: 250ms;
  &:hover {
    box-shadow: 0 0 10px -1px lightblue;
    background: darken(
      $color: (
        lightblue
      ),
      $amount: 10
    );
  }
}
.danger {
  color: var(--danger);
}
.safe {
  color: var(--safe);
}
#app {
  text-align: center;
}
</style>
