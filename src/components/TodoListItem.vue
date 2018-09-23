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
li {
  overflow: hidden;
}
.checkbox {
  float: left;
  margin-right: 10px;
}
.list-item {
  float: left;
}
.remove {
  float: right;
  margin-right: 10px;
  color: rgb(29, 75, 145);
  font-size: 15px;
}
.remove:hover {
  color: rgb(250, 46, 46);
}
</style>
