<template>
  <li>
    <el-checkbox class="checkbox" v-model="todo.completed" @click="completeTask(todo)"></el-checkbox>
    <div class="list-item" @dblclick="todo.editing = true; editTodoCache=todo.text">
      {{todo.text}}
    </div>
    <span class="remove" :class="{completed: todo.completed}" @click="$emit('remove', todo.id)">x</span>
  </li>
</template>
<script>
export default {
  props: {
    todo: {
      type: Object,
      required: true
    }
  }
};
</script>
<style scoped>
@import url("../assets/style/todolist.css");
</style>
