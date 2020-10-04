<template>
  <main>
    <form @submit.prevent="addTodo">
      <div class="flex">
        <input
          v-model="newTodo"
          name="newTodo"
          type="text"
          placeholder="enter todo"
        />
        <button type="submit">Add</button>
      </div>
    </form>
    <ul id="todos">
      <li v-for="todo in todos" v-bind:key="todo.id">
        <div
          @click="updateTodo(todo)"
          :class="{ 'icon safe': todo.complete, 'icon danger': !todo.complete }"
        >
          <i class="material-icons">{{
            todo.complete ? "check_box" : "check_box_outline_blank"
          }}</i>
          <input type="checkbox" :checked="todo.complete" style="display: none">
        </div>
        <span :class="{ complete: todo.complete }">{{ todo.text }}</span>
        <div
          @click="deleteTodo(todos.indexOf(todo))"
          class="icon danger"
          style="margin-left: auto"
        >
          <i class="material-icons">delete</i>
        </div>
      </li>
    </ul>
  </main>
</template>

<script lang="ts">
import { ref } from "vue";
import handleStorage from "@/utils/handleStorage";

type Todo = {
  id: number;
  text: string;
  complete: boolean;
};

export default {
  setup() {
    const storedTodos: Todo[] | null = handleStorage("todos")?.todos;
    const newTodo = ref("");
    const todos = ref(storedTodos || []);

    function addTodo() {
      const newTodoData = {
        id: Date.now(),
        text: newTodo.value,
        complete: false
      };
      newTodo.value !== "" && todos.value.push(newTodoData);
      newTodo.value = "";
      handleStorage("todos", { todos: todos.value });
    }

    function updateTodo(todo: Todo) {
      todo.complete = !todo.complete;

      handleStorage("todos", {
        todos: todos.value
      });
    }

    function deleteTodo(index: number) {
      todos.value.splice(index, 1);
      handleStorage("todos", { todos: todos.value });
    }

    return {
      newTodo,
      addTodo,
      todos,
      updateTodo,
      deleteTodo
    };
  }
};
</script>

<style scoped lang="scss">
main {
  max-width: 500px;
  margin: 0 auto;
  border: 1px solid white;
  border-top: unset;
  border-radius: 3px;
}
input {
  padding: 5px;
  font-size: 20px;
  width: 100%;
  border: 1px solid lightgray;
  border-radius: 3px;
}
ul {
  list-style: none;
  padding: 0;
}

li {
  display: inline-flex;
  padding: 0 1rem;
  &:first-of-type {
    margin-top: 1rem;
  }
  margin-bottom: 1rem;
  width: 100%;
  text-align: left;

  .icon {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    transition: 250ms;
    width: 26px;
    height: 26px;
    cursor: pointer;
    &.safe {
      border: 1px solid var(--safe);
    }
    &.danger {
      border: 1px solid var(--danger);
    }
  }
  i {
    transition: 250ms;
    font-size: 16px;
    padding: 5px;
  }
  span {
    margin: 0 0.5rem;
    word-break: break-all;
  }
}

.flex {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  button {
    border-radius: 0 3px 3px 0;
  }
  input {
    border-radius: 3px 0 0 3px;
  }
}

.complete {
  text-decoration-line: line-through;
}
</style>
