<template>
    <div>blog</div>
    <button @click="countStore.increment">{{countStore.count}}</button>
</template>

<script lang="ts" setup>
import {useCounterStore} from '@/store/count'

const countStore=useCounterStore();

</script>

<style scoped>
</style>