<template>
  <div class="container">
    <div class="form-section">
      <el-input @blur="focused.mycheck = true" v-model="newTodo" @keyup.enter="addTodo" placeholder="Write service and component"></el-input>
      <el-button type="primary" @click.prevent="addTodo">Add</el-button>
    </div>
    <div class="list-section">
      <div>
        <ul v-if="todos.length">
          <TodoListItem 
            v-for="todo in todos"
            :key="todo.id"
            :todo="todo"
            @remove="removeTodo"
            v-bind:class="{selected:todo.completed}"
            @click="completeTask(todo)"
          />
        </ul>
      </div>
      <div v-if="todos.length === 0">
        <div class="no-todos"> No items</div>
      </div>
    </div>
  </div>
</template>
<script>
// import TodoList from "./TodoList.vue";
import store from "../store";
import TodoListItem from "./TodoListItem.vue";

export default {
  name: "Panel",
  components: {
    TodoListItem
  },
  store: store,
  data() {
    return {
      newTodo: "",
      todos: store.getters.getTodos
    };
  },

  methods: {
    addTodo: function() {
      if (this.newTodo.trim() === "") return;

      this.$store.commit("addTodo", this.newTodo);
      this.newTodo = "";
    },
    removeTodo(id) {
      this.$store.commit("deleteTodo", id);
    },
    completeTask(todo) {
      if (!todo.completed) {
        todo.completed = true;
      } else {
        todo.completed = false;
      }
    }
  }
};
</script>
<style scoped>
@import url("../assets/style/panel.css");
.el-input {
  width: 88%;
  margin-right: 15px;
}
.el-button {
  padding: 12px 30px;
}
</style>
