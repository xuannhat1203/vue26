<template>
    <div>
      <table border="1">
          <thead>
              <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Price</th>
                  <th>Quantity (kg)</th>
                  <th>Option</th>
              </tr>
          </thead>
          <tbody>
              <tr v-for="user in listUser" :key="user.id">
                  <td>{{ user.id }}</td>
                  <td>{{ user.name }}</td>
                  <td>{{ user.price }}</td>
                  <td>{{ user.quantity }}</td>
                  <td>
                      <button>Edit</button>
                      <button>Delete</button>
                  </td>
              </tr>
          </tbody>
      </table>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import { useStore } from 'vuex';
      const store = useStore();
      const listUser = ref(store.getters.getListProduct); 
  </script>
  
  <style>
  
  </style>