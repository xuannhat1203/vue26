<template>
    <div class="register-container">
      <h2>Đăng Ký</h2>
      <form @submit.prevent="handleRegister">
        <div class="form-group">
          <label for="username">Tên Đăng Nhập:</label>
          <input type="text" id="username" v-model="username" required />
        </div>
        <div class="form-group">
          <label for="password">Mật Khẩu:</label>
          <input type="password" id="password" v-model="password" required />
        </div>
        <button type="submit">Đăng Ký</button>
      </form>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import { useStore } from 'vuex';
  
  const username = ref('');
  const password = ref('');
  const store = useStore();
  const handleRegister = () => {
    store.commit("register",{
        name: username.value,
        password:password.value
    })
  };
  </script>
  
  <style>
  .register-container {
    max-width: 400px;
    margin: 0 auto;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  }
  
  .form-group {
    margin-bottom: 15px;
  }
  
  label {
    display: block;
    margin-bottom: 5px;
  }
  
  input {
    width: 100%;
    padding: 8px;
    box-sizing: border-box;
  }
  
  button {
    width: 100%;
    padding: 10px;
    background-color: #28a745;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  
  button:hover {
    background-color: #218838;
  }
  </style>
  