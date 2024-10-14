<template>
    <div class="register-container">
      <h2>Đăng Ký</h2>
      <form @submit.prevent="handleLogin">
        <div class="form-group">
          <label for="username">Tên Đăng Nhập:</label>
          <input type="text" id="username" v-model="username" />
        </div>
        <div class="form-group">
          <label for="password">Mật Khẩu:</label>
          <input type="password" id="password" v-model="password" />
        </div>
        <button type="submit">Đăng Nhập</button>
      </form>
    </div>
  </template>
  
  <script setup>
  import { computed } from 'vue';
  import { useStore } from 'vuex';
  
  const store = useStore();
  const username = computed(() => store.state.acc.name);
  const password = computed(() => store.state.acc.password);
  
  const handleLogin = () => {
  };
  </script>
  
  <style>
  </style>
  