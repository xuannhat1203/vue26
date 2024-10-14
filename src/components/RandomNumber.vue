<template>
    <div>
      <button @click="getRandomNumbers">Get Random</button>
      <div v-if="randomNumbers.length">
        <h3>Random Numbers:{{randomNumbers  }}</h3>
      </div>
      <div v-else>
        <h3>Random Numbers:[]</h3>
      </div>
    </div>
  </template>
  
  <script setup>
  import { computed } from 'vue';
  import { useStore } from 'vuex';
  
  const store = useStore();
  const randomNumbers = computed(() => store.state.number);
  const getRandomNumbers = () => {
    store.commit('random', store.state.number);
  }
  </script>
  
  <style>
  </style>
  