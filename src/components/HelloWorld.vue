<template>
  <Dialog :dialogVisible="dialogVisible"></Dialog>
  <el-button @click="dialogVisible = true">打开弹层</el-button>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import Dialog from './Dialog.vue'

const dialogVisible = ref(false)


</script>

<style scoped>
a {
  color: #42b983;
}

label {
  margin: 0 0.5em;
  font-weight: bold;
}

code {
  background-color: #eee;
  padding: 2px 4px;
  border-radius: 4px;
  color: #304455;
}
</style>
