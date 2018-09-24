<template>
  <div>
    <el-container>
      <el-header>
        About
      </el-header>
    </el-container>
    <div class="container">
      <Panel />
    </div>
  </div>
</template>

<script>
import Panel from "./components/Panel.vue";

export default {
  name: "app",
  components: {
    Panel
  }
};
</script>

<style>
@import url("//unpkg.com/element-ui/lib/theme-chalk/index.css");
body {
  background: #f1f3f7;
  font-family: "Open Sans", sans-serif;
  padding: 0;
  margin: 0;
}
.el-container {
  background: #fff;
  margin-bottom: 15px;
}
.el-header {
  line-height: 60px;
  text-align: left;
  padding: 0 0 0 10px;
  color: #1d79ce;
}
</style>
