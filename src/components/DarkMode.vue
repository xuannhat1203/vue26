<template>
    <div>
        <div :style="{ backgroundColor: status ? 'black' : 'white' }" class="div"></div>
        <button @click="handleChange">Change</button>
    </div>
</template>

<script setup>
import { ref, watch } from 'vue';
import { useStore } from 'vuex';

const store = useStore();
const status = ref(store.state.darkMode);
watch(() => store.state.darkMode,(newValue) => {
        status.value = newValue;
    }
);
const handleChange = () => {
    const newStatus = !status.value;
    store.commit("changeHtml", newStatus);
}
</script>

<style>
.div {
    width: 200px;
    height: 200px;
    border: 1px solid black;
}
</style>
