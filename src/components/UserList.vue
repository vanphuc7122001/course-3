<template>
    <tbody>
      <user-item v-for="(user,index) in userListByName" :key="index" :user="user"></user-item>
      <!-- <user-item></user-item>
      <user-item></user-item>
      <user-item></user-item>
      <user-item></user-item> -->
    </tbody>
  </template>
  
  <script>
  import UserItem from "./UserItem.vue";
  import { createNamespacedHelpers } from 'vuex'
  const { mapState, mapGetters, mapActions } = createNamespacedHelpers('user')
  export default {
    components: {
      UserItem,
    },
    computed:{
      ...mapState({
        userList : (state) => state.userList
      }),
      ...mapGetters({
        userListByGenDer: 'userListByGenDer',
        userListByName: "userListByName"
      })
    },
    methods: {
      ...mapActions({
        getAllUser : 'actionGetAllUser',
      })
    },
    created() {
      this.getAllUser()
    }
    
  };
  </script>
  
  <style></style>
  