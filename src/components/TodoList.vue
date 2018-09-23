<template>
  <div>
    <div>
      Todo
    </div>
  </div>
</template>

<script>


export default {
  name: "TodoList",
  props: {
    msg: String
  },
  data() {
    return {
      newTodo: "",
      todos: [
        {
          id: 1,
          text: "Learn Vue",
          completed: false,
          editing: false
        },
        {
          id: 2,
          text: "Build Todo with Vue",
          completed: false,
          editing: false
        },
        {
          id: 3,
          text: "Do more in Vue",
          completed: false,
          editing: false
        }
      ]
    };
  },

  computed: {
    remaining() {
      return this.todos.filter(todo => !todo.completed).length;
    },
    classObject: function(todo) {
      return {
        "list-group-item-info": todo.completed
      };
    }
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
    editTodo(todo) {
      if (todo.text.trim() === "") todo.text = this.editTodoCache;
      todo.editing = false;
    },
    removeTodo(todo) {
      this.todos.splice(todo, 1);
    },
    cancelEdit(todo) {
      todo.text = this.editTodoCache;
      todo.editing = false;
    },
    completeTask(todo) {
      if (!todo.completed) {
        todo.completed = true;
      } else {
        todo.completed = false;
      }
    }
  },

  directives: {
    focus: {
      inserted(el) {
        el.focus();
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/*h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42abb9;
}
.container {
  min-height: 300px;
  display: flex;
  flex-direction: column;
}
footer {
  padding: 8px 15px;
  background: #76ccdb;
  border-radius: 3px;
}
.todo-list {
  padding: 8px 0;
}
.todo-list .list:hover {
  background: #f7fbfc;
}
.todo-list .list {
  display: flex;
  align-items: center;
  padding: 0 15px;
  text-align: left;
}
.todo-list .list .text {
  padding: 0 8px;
  height: 44px;
  line-height: 44px;
  margin: 6px 0;
  cursor: default;
  flex: 1;
}
.todo-list .list .text.completed {
  text-decoration: line-through;
}
.input__div {
  margin: 6px 0;
  position: relative;
  border: 1px solid #e4f0f5;
  flex: 1;
}
.input__div:focus-within .input__wrapper {
  background: #fff;
}
.input__div .input__wrapper {
  background: #f7fbfc;
  padding: 0 15px;
  transition: background 0.3s;
}
.input__div .input__wrapper input {
  height: 35px;
  background: 0 0;
  border: none;
  color: #2c3e50;
  display: block;
  font-family: inherit;
  font-size: 16px;
  line-height: 16px;
  outline: 0;
  padding: 0;
  position: relative;
  width: 100%;
  z-index: 1;
}
.input__div .border {
  background: #429db9;
  transition: all 0.18s;
  bottom: -1px;
  height: 2px;
  left: 30%;
  opacity: 0;
  pointer-events: none;
  position: absolute;
  right: 30%;
}
.input__div:focus-within .border {
  left: 0;
  right: 0;
  opacity: 1;
}
.custom-checkbox {
  position: relative;
  display: inline-block;
  color: rgba(0, 0, 0, 0.87);
  cursor: pointer;
  font-size: 14px;
  line-height: 18px;
}
.custom-checkbox > input {
  appearance: none;
  -moz-appearance: none;
  -webkit-appearance: none;
  position: absolute;
  z-index: -1;
  left: -5px;
  top: -5px;
  display: block;
  margin: 0;
  border-radius: 50%;
  width: 18px;
  height: 18px;
  background-color: rgba(0, 0, 0, 0.42);
  outline: none;
  opacity: 0;
  transform: scale(1);
  -ms-transform: scale(0); 
  transition: opacity 0.5s, transform 0.5s;
}
.custom-checkbox > input:checked {
  background-color: #2196f3;
}
.custom-checkbox > input:disabled {
  opacity: 0;
}
.custom-checkbox > input:disabled + span {
  cursor: initial;
}
.custom-checkbox > span::before {
  content: "";
  display: inline-block;
  margin-right: 15px;
  border: solid 2px rgba(0, 0, 0, 0.42);
  border-radius: 2px;
  width: 14px;
  height: 14px;
  vertical-align: -4px;
  transition: border-color 0.5s, background-color 0.5s;
}
.custom-checkbox > input:checked + span::before {
  border-color: #1d8bca;
  background-color: #1d8bca;
}
.custom-checkbox > input:active + span::before {
  border-color: #1d8bca;
}
.custom-checkbox > input:checked:active + span::before {
  border-color: transparent;
  background-color: rgba(0, 0, 0, 0.42);
}
.custom-checkbox > span::after {
  content: "";
  display: inline-block;
  position: absolute;
  top: 0;
  left: 0;
  width: 5px;
  height: 10px;
  border: solid 2px transparent;
  border-left: none;
  border-top: none;
  transform: translate(5.5px, 1px) rotate(45deg);
  -ms-transform: translate(5.5px, 2px) rotate(45deg);
}
.custom-checkbox > input:checked + span::after {
  border-color: #fff;
}*/
</style>
