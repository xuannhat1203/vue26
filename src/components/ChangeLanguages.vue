<template>
    <div>
        <p>{{store.state.text}}</p>
        <button @click="handleChange">Change Languages</button>
    </div>
</template>

<script setup>
import { useStore } from 'vuex';

    const store = useStore();
    const handleChange = () => {
        store.commit("changeLanguages");
    }
</script>

<style>

</style>