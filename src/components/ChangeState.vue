<template>
    <div>
        <p>Company: {{ store.state.nameCompany  }}</p>
        <button @click="handleChange">Change Company</button>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { useStore } from 'vuex';

    const store = useStore();
    const value = ref(store.state.nameCompany)
    const handleChange = () => {
        value.value = store.commit("changeState");
    }
</script>

<style>

</style>