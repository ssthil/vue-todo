import Vue from "vue";
import Vuex from "vuex";
import { uuid } from "vue-uuid";

Vue.use(Vuex);
Vue.use(uuid);

const store = new Vuex.Store({
  state: {
    todos: [
      {
        id: uuid.v4(),
        text: "Create Vuejs Project",
        completed: false
      },
      {
        id: uuid.v4(),
        text: "Build Todo with Vue",
        completed: false
      },
      {
        id: uuid.v4(),
        text: "Do more in Vue",
        completed: false
      }
    ]
  },
  mutations: {
    addTodo: (state, payload) => {
      const newTodo = {
        id: uuid.v4(),
        text: payload,
        completed: false
      };
      state.todos.unshift(newTodo);
    },
    deleteTodo: (state, payload) => {
      const index = state.todos.findIndex(todo => todo.id === payload);
      state.todos.splice(index, 1);
    }
  },
  actions: {},
  getters: {
    getTodos(state) {
      return state.todos;
    }
  }
});

export default store;
