<template>
    <div>
        <p>ID:{{ user.id }}</p>
        <p>Name: {{ user.name }}</p>
        <p>Gender: {{ user.gender }}</p>
        <p>Address: {{ user.address }}</p>
        <p>DateOfBirth: {{ user.dateOfBirth }}</p>
        <p></p>
    </div>
</template>

<script setup>
    import { ref } from 'vue';
    import { useStore } from 'vuex';
    const store = useStore();
    const user = ref(store.state.user)
    
</script>

<style>

</style>