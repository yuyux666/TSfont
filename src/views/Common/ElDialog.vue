<script setup>
import { onMounted } from 'vue'

const message = () => {
  ElMessage.success('1111111111')
}

onMounted(() => {
  message()
})
</script>
<template>
  <div></div>
</template>

<style lang="scss" scoped></style>
