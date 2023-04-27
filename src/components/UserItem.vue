<template>
  <tr>
    <td>
      <img :src="user.avatar" class="mr-2" alt="image" />
      {{ user.name }}
    </td>
    <td>23</td>
    <td>
      <label class="badge badge-gradient-primary mr-2" v-for="(pro, index) in user.programmingLanguage" :key="index">
        {{ pro }}
      </label>
    </td>
    <td>{{ user.gender }}</td>
    <td>
      <button type="button" class="mr-2 btn btn-gradient-danger btn-icon-text" @click.prevent="handleDeleteUser(user.id)">
        <i class="mdi mdi-delete btn-icon-prepend"></i> Remove
      </button>
      <button type="button" class="btn btn-gradient-info btn-icon-text" @click="handleOpenModal">
        <i class="mdi mdi-border-color btn-icon-prepend"></i> Edit
        <teleport to="#app">
          <app-modal :isOpen="isOpenEdit" :handelCloseModal="handelCloseModal">
            <FormUser :userInfo="user"></FormUser>
          </app-modal>
        </teleport>
      </button>
    </td>
  </tr>
</template>
  
<script>
import FormUser from './FormUser.vue';
import { createNamespacedHelpers } from 'vuex'

const {  mapActions } = createNamespacedHelpers('user')
export default {
  data(){
    return {
      isOpenEdit: false,
    }
  },
  components: {
    FormUser
  },
  props: {
    user: {
      type: Object
    }
  },
  methods: {
    handelCloseModal(){
      this.isOpenEdit = false;
    },
    handleOpenModal(){
      this.isOpenEdit = true;
    },
    ...mapActions({
      handleDeleteUser: 'ActionDeleteUser',
    })
  }
};
</script>
  
<style></style>
  