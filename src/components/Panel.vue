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
        <div class="box box__empty"> No items</div>
      </div>
    </div>
  </div>
</template>
<script>
// import TodoList from "./TodoList.vue";
import TodoListItem from "./TodoListItem.vue";

export default {
  name: "Panel",
  components: {
    TodoListItem
  },
  data() {
    return {
      newTodo: "",
      todos: [
        {
          id: 1,
          text: "Learn Vue",
          completed: false
        },
        {
          id: 2,
          text: "Build Todo with Vue",
          completed: false
        },
        {
          id: 3,
          text: "Do more in Vue",
          completed: false
        }
      ]
    };
  },

  methods: {
    addTodo() {
      if (this.newTodo.trim() === "") return;
      /*
      let todo = {
        id: this.todos.length+1,
        text: this.newTodo,
        completed: false,
        editing: false
      };
      */
      this.todos.push({
        id: this.todos.length + 1,
        text: this.newTodo,
        completed: false,
        editing: false
      });
      this.newTodo = "";
    },
    removeTodo(idToremove) {
      this.todos = this.todos.filter(todo => {
        return todo.id != idToremove;
      });
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
<style scoped lang="scss">
.container {
  width: 960px;
  margin: 10px auto;
}
ul {
  padding: 0;
  margin: 0;
  list-style: none;
}
ul li {
  cursor: pointer;
  padding: 12px 18px;
  background: #faf9f9;
  border-bottom: 1px solid #ccd3de;
}
.selected {
  color: rgb(24, 38, 70);
  background: #d9e4f5;
}

.el-input {
  width: 88%;
  margin-right: 15px;
}
.el-button {
  padding: 12px 30px;
}
.form-section {
  border: 1px solid #d5dbe6;
  background-color: #fff;
  color: #303133;
  border-radius: 4px;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
  overflow: hidden;
  padding: 22px 18px;
}
.list-section {
  border: 1px solid #d5dbe6;
  background-color: #fff;
  color: #303133;
  border-radius: 4px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
  overflow: hidden;
  padding: 0;
}
</style>
