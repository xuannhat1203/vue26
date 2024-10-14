<template>
  <div>
    <table border="1">
        <thead>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Gender</th>
                <th>Date</th>
                <th>Address</th>
                <th>Option</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="user in listUser" :key="user.id">
                <td>{{ user.id }}</td>
                <td>{{ user.name }}</td>
                <td>{{ user.gender }}</td>
                <td>{{ user.dateOfBirth }}</td>
                <td>{{ user.address }}</td>
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
    const listUser = ref(store.getters.getListUser); 
</script>

<style>

</style>