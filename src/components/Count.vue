<template>
    <div>
        <p>Count: {{ store.state.count }} </p>
    <button @click="handleClick">Increase</button>
    <button @click="handleClick2">Decrease</button>
    </div>
</template>

<script setup>
import { useStore } from 'vuex';
    const store = useStore();
    const handleClick = () => {
        store.commit("increment")
    }
    const handleClick2 = () => {
        store.commit("decrement")
    }
</script>

<style>

</style>