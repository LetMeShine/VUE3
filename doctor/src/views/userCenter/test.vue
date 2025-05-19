<template>
    <div>
        内容test++{{ key }}**{{ message }}
        <button @click="updateLocation">{{ location }}</button>
    </div>
</template>

<script lang="ts" setup>
import { inject,ref } from 'vue';
// const key = inject('key','这是默认值key')
const message = inject('message','这是默认值')

const value = inject('key', () => new ExpensiveClass(), true)
const { location, updateLocation } = inject('location')
</script>
<style scoped>

</style>